const Router = require("express").Router;
const formController = require("../form/form-controller");

const router = new Router();

router.post("/form", formController.form);

module.exports = router;
