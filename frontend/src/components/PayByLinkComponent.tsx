import React, { useEffect, useId, useRef, useState } from "react";
import {
    AdyenPlatformExperience,
    PaymentLinksOverview,
} from "@adyen/adyen-platform-experience-web";
import "@adyen/adyen-platform-experience-web/adyen-platform-experience-web.css";

type Props = {
    accountHolderId: string;
};

const PayByLinkComponent: React.FC<Props> = ({ accountHolderId }) => {
    const reactId = useId();
    const containerId = `transactions-${reactId.replace(/:/g, "")}`;
    const coreRef = useRef<any>(null);
    const mountedRef = useRef(false);

    const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">(
        "idle"
    );
    const [error, setError] = useState<string | null>(null);

    const createSession = async () => {
        const response = await fetch("/api/components/transaction/create-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                allowOrigin: "http://localhost:5173",
                product: "platform",
                policy: {
                    resources: [{ accountHolderId, type: "accountHolder" }],
                    roles: [
                        "Pay By Link Component: View",
                        "Pay By Link Component: View PII",
                        "Pay By Link Component: Manage Links",
                        "Pay By Link Component: Manage Settings "
                    ],
                },
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to create session (${response.status})`);
        }

        const { session } = await response.json();
        return session;
    };

    useEffect(() => {
        let cancelled = false;

        const mount = async () => {
            try {
                setStatus("loading");
                setError(null);

                // clear container before re-mount (important when accountHolderId changes)
                const el = document.getElementById(containerId);
                if (el) el.innerHTML = "";

                const core = await AdyenPlatformExperience({
                    onSessionCreate: createSession,
                });

                if (cancelled) return;
                coreRef.current = core;

                const component = new PaymentLinksOverview({ core });
                component.mount(`#${containerId}`);

                mountedRef.current = true;
                setStatus("ready");
            } catch (e: any) {
                if (cancelled) return;
                setStatus("error");
                setError(e?.message ?? "Unknown error");
            }
        };

        if (accountHolderId?.trim()) {
            mount();
        }

        return () => {
            cancelled = true;
            // best effort cleanup: clear DOM to prevent duplicates
            const el = document.getElementById(containerId);
            if (el) el.innerHTML = "";
            mountedRef.current = false;
        };
        // remount when accountHolderId changes
    }, [accountHolderId, containerId]);

    return (
        <section className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-sm font-semibold text-gray-900">
                        Transactions Overview
                    </h2>
                    <p className="mt-1 text-xs text-gray-600">
                        Account holder:{" "}
                        <span className="font-medium text-gray-900">{accountHolderId}</span>
                    </p>
                </div>

                <span className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-600">
                    {status === "loading"
                        ? "Loading…"
                        : status === "ready"
                            ? "Ready"
                            : status === "error"
                                ? "Error"
                                : "Idle"}
                </span>
            </div>

            {error ? (
                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                    {error}
                </div>
            ) : null}

            <div className="mt-5" id={containerId} />
        </section>
    );
};

export default PayByLinkComponent;
