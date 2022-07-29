var express = require('express');
var router = express.Router();
var petsCtrl = require('../controllers/pets');

router.get('/', petsCtrl.index);
router.get('/new', petsCtrl.new);
router.post('/create', petsCtrl.create);
router.get('/show/:id', petsCtrl.show);

module.exports = router;
