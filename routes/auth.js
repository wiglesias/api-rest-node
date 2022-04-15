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

/**
 * Login user
 * @openapi
 * /auth/login:
 *   post:
 *     tags:
 *       - auth
 *     summary: "Login user"
 *     description: Login a new user and get the session token
 *     responses:
 *       '200':
 *         description: Returns the object inserted in the collection.
 *       '422':
 *         description: Validation error.
 *     requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/authLogin"
 *   responses:
 *     '201':
 *       description: Returns the object inserted in the collection with state '201'
 *     '403':
 *       description: You don't have permissions '403'
 */
router.post("/login", validatorLogin, loginController);

module.exports = router;
