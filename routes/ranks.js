var express = require('express');
var router = express.Router();
var ranksCtrl = require('../controllers/ranks');

router.get('/', ranksCtrl.index);
router.post('/:id', ranksCtrl.create);
router.delete('/:id', ranksCtrl.delete);
router.get('/:id/edit', ranksCtrl.edit);
router.put('/:id', ranksCtrl.update);

module.exports = router;