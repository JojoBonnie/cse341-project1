const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contacts");

/**
 * @swagger
 * /contacts:
 *   get:
 *     tags: [Contacts]
 *     description: ""
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Internal Server Error
 */
router.get("/", contactsController.getAll);

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     tags: [Contacts]
 *     description: ""
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */
router.get("/:id", contactsController.getSingle);

/**
 * @swagger
 * /contacts:
 *   post:
 *     tags: [Contacts]
 *     description: ""
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Internal Server Error
 */
router.post("/", contactsController.createContact);

/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     tags: [Contacts]
 *     description: ""
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Internal Server Error
 */
router.put("/:id", contactsController.updateContact);

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     tags: [Contacts]
 *     description: ""
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Internal Server Error
 */
router.delete("/:id", contactsController.removeContact);

module.exports = router;
