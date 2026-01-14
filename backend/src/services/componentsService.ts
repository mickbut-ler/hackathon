export const createTransactionSession = async (data: any) => {
    const apiKey = process.env.BCL_KEY;
    const url = "https://test.adyen.com/authe/api/v1/sessions";

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': apiKey || ''
        },
        body: JSON.stringify(data),
    };

    console.log("data: ", JSON.stringify(options, null, 2))
    try {
        const response = await fetch(url, options);

        if (!response.ok) {

            const errorMessage = await response.text();
            throw new Error(`Adyen API Error: ${response.status} - ${errorMessage}`);
        }

        const result = await response.json();
        console.log({ result })

        return {
            message: 'Session created',
            session: result,
        };
    } catch (error: any) {
        console.error('Error requesting session:', error);

        return {
            message: 'Failed to create session.',
            error: error.message,
        };
    }
};
