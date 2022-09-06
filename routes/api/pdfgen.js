const express = require('express');
const router = express.Router();
const pdfgenController = require('../../controllers/pdfgenController.js');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(pdfgenController.getAllPdfs)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), pdfgenController.createNewPdf)



module.exports = router;