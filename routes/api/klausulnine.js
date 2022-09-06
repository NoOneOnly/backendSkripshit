const express = require('express');
const router = express.Router();
const klausul9Controller = require('../../controllers/klausul9Controller');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(klausul9Controller.getAllKlausul9)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), klausul9Controller.createNewKlausul9)



module.exports = router;