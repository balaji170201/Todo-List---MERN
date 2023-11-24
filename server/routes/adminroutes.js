const {getalltodos,getallusers} = require('../controller/admincontroller');

const router = require('express').Router();

router.get('/todos',getalltodos);
router.get('/users',getallusers);

module.exports = router;