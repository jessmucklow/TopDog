var express = require('express');
var router = express.Router();
var petsCtrl = require('../controllers/pets');
/* GET users listing. */
console.log('made it to router')
router.get('/', petsCtrl.index);
router.get('/new', petsCtrl.new);
router.post('/create', petsCtrl.create);

module.exports = router;
