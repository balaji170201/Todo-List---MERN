const todoroutes = require('./todoroutes')
const userroutes = require('./userroutes');
const adminroutes = require('./adminroutes');

const router = require('express').Router();

router.use('/todos',todoroutes);
router.use('/users',userroutes);
router.use('/admin',adminroutes);

module.exports = router;