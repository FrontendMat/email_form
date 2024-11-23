const nodemailer = require("nodemailer");
const ApiError = require("../exceptions/api-errors");

class Mail {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true,
            logger: false,
            debug: false,
            secureConnection: false,
            auth: {
                user: process.env.SMTP_NAME,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: true,
            },
        });
    }

    async sendActivationMail(mail, message) {
        try {
            const response = await this.transporter.sendMail({
                from: process.env.SMTP_NAME,
                to: mail,
                subject: "HERE IS MESSAGE",
                text: "Message",
                html: `
                        <div>
                            <h1 style="text-align: center">Your Message</h1>
                            <p style="
                            text-align: center; 
                            color: #424242;
                            font-size: 14px;
                            font-weight: bold;
                            ">
                                ${message} 
                            </p>
                        </div>
                    `,
            });
            return response;
        } catch (e) {
            throw ApiError.BadRequest(e);
        }
    }
}

module.exports = new Mail();
