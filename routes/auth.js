const express = require("express");
const router = express.Router();

const { registerController, loginController } = require("../controllers/auth");
const { validatorRegister, validatorLogin } = require("../validators/auth");

/**
 * http://localhost:3001/api
 *
 * Route register new user
 * @openapi
 * /auth/register:
 *  post:
 *    tags:
 *      - auth
 *    summary: "New user registration"
 *    description: "This route is to register a new user"
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/authRegister"
 *    responses:
 *      '201':
 *         description: The user is successfully registered
 *      '403':
 *         description: Validation error
 */
router.post("/register", validatorRegister, registerController);

router.post("/login", validatorLogin, loginController);

module.exports = router;
