const Pet = require('../models/ranks');

module.exports = {
index,
};

function index(req, res) {
    Pet.find({}).sort('-createdAt').exec(function (err, pets) {
        res.render('pets/ranks', { title: 'Top Dog', pets });
    });
}
