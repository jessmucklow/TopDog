const Rank = require('../models/pet');

module.exports = {
index,
};

function index(req, res) {
    Pet.find({}).sort('-createdAt').exec(function (err, pets) {
        res.render('pets/ranks', { title: 'Top Dog', pets });
    });
}
