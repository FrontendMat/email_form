import { emailRegex } from "./consts";

export const validateFormData = (name, lastname, email, comment) => {
    const messages = [];

    if (!name || !lastname || !email || !comment) {
        messages.push("No necessarry data");
    }

    if (!emailRegex.test(email)) {
        messages.push("Wrong Email");
    }

    return messages;
};
