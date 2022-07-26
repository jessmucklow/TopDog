var express = require('express');
var router = express.Router();
var ranksCtrl = require('../controllers/pets');


console.log('made it to router')
router.get('/', ranksCtrl.index);


module.exports = router;