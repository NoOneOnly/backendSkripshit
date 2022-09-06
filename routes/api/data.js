const express = require('express');
const router = express.Router();
const dataController = require('../../controllers/dataController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(dataController.getAllData)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), dataController.createNewData)


module.exports = router;