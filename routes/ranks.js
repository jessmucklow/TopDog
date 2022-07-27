var express = require('express');
var router = express.Router();
var ranksCtrl = require('../controllers/ranks');

console.log('made it to router')

router.get('/', ranksCtrl.index);
router.post('/create', ranksCtrl.create);
module.exports = router;