const mail = require("./mail");
const ApiError = require("../exceptions/api-errors");

class FormService {
    async form(email, name, lastname, comment) {
        if (!email || !name || !lastname || !comment) {
            throw ApiError.BadRequest('No data')
        }

        const message = `Name: ${name}, LastName: ${lastname}, Email: ${email}, Comment: ${comment}`;

        const emailSend = await mail.sendActivationMail(email, message);
        console.log(emailSend)
        if (!emailSend) {
            throw ApiError.BadRequest('Wrong email')
        }

        return message;
    }
}

module.exports = new FormService();
