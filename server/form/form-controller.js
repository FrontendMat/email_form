const FormService = require("./form-service");

class FormController {
    async form(req, res, next) {
        try {
            const { name, lastname, email, comment } = req.body;
            const resultData = await FormService.form(
                email,
                name,
                lastname,
                comment
            );
            console.log(resultData)
            return res.json(resultData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new FormController();
