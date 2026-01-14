import React, { useMemo, useState } from "react";
import TransactionsOverviewWidget from "./components/TransactionsComponent";
import PayoutComponent from "./components/PayoutComponent";
import DisputeComponent from "./components/DisputeComponent";
import ReportComponent from "./components/ReportComponent";
import PayByLinkComponent from "./components/PayByLinkComponent";
// import PayoutsOverviewWidget from "./components/PayoutsComponent";

type StepKey = "transaction" | "payout" | "reports" | "dispute" | "paybylink";

const steps: Array<{ key: StepKey; label: string }> = [
    { key: "transaction", label: "Transaction" },
    { key: "payout", label: "Payout" },
    { key: "reports", label: "Reports" },
    { key: "dispute", label: "Dispute" },
    { key: "paybylink", label: "Pay by Link" },
];

const Components: React.FC = () => {
    const [accountHolderIdInput, setAccountHolderIdInput] = useState(
        "AH3297V223229Z5NM4GQJFVCK"
    );

    const [activeAccountHolderId, setActiveAccountHolderId] = useState(
        "AH3297V223229Z5NM4GQJFVCK"
    );

    const [activeStep, setActiveStep] = useState<StepKey>("transaction");

    const canLoad = useMemo(
        () => accountHolderIdInput.trim().length > 0,
        [accountHolderIdInput]
    );

    return (
        <div className="space-y-6">
            {/* Controls */}
            <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur">
                <h1 className="text-lg font-semibold tracking-tight text-gray-900">
                    Components
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                    Enter an Account Holder ID and load the Adyen components.
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
                    <div className="flex-1">
                        <label className="text-sm font-medium text-gray-700">
                            Account holder ID
                        </label>
                        <input
                            value={accountHolderIdInput}
                            onChange={(e) => setAccountHolderIdInput(e.target.value)}
                            placeholder="AH..."
                            className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-gray-300 focus:ring-4 focus:ring-gray-100"
                        />
                    </div>

                    <button
                        type="button"
                        disabled={!canLoad}
                        onClick={() => setActiveAccountHolderId(accountHolderIdInput.trim())}
                        className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Load
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="rounded-2xl border border-gray-200 bg-white/70 shadow-sm backdrop-blur">
                <div className="px-6 pt-4">
                    <div className="mt-3 overflow-x-auto">
                        <div className="relative flex min-w-max gap-10 border-b border-gray-200">
                            {steps.map((s) => {
                                const isActive = s.key === activeStep;
                                return (
                                    <button
                                        key={s.key}
                                        type="button"
                                        onClick={() => setActiveStep(s.key)}
                                        className={[
                                            "relative -mb-px pb-3 text-sm transition-colors",
                                            isActive
                                                ? "font-semibold text-gray-900"
                                                : "font-medium text-gray-600 hover:text-gray-900",
                                        ].join(" ")}
                                    >
                                        {s.label}
                                        {isActive ? (
                                            <span className="absolute inset-x-0 -bottom-px h-0.5 bg-gray-900" />
                                        ) : null}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {activeStep === "transaction" && (
                        <TransactionsOverviewWidget accountHolderId={activeAccountHolderId} />
                    )}

                    {activeStep === "payout" && (
                        <div className="rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-600">
                            <PayoutComponent accountHolderId={activeAccountHolderId} />
                        </div>
                    )}

                    {activeStep === "reports" && (
                        <div className="rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-600">
                            <ReportComponent accountHolderId={activeAccountHolderId} />
                        </div>
                    )}

                    {activeStep === "dispute" && (
                        <div className="rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-600">
                            <DisputeComponent accountHolderId={activeAccountHolderId} />
                        </div>
                    )}

                    {activeStep === "paybylink" && (
                        <div className="rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-600">
                            <PayByLinkComponent accountHolderId={activeAccountHolderId} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Components;
