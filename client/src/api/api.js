const API_URL = "http://localhost:5002/api"; /// move to .env in production

export const sendMessage = async (data) => {
    const response = await fetch(`${API_URL}/form`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "NOT SUCCESS");
    }

    return await response.json();
};
