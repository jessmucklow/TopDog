const Pet = require('../models/pets');

module.exports = {
    index,
    new: newPet,
    create
};

function index(req, res) {
    Pet.find({}, function (err, pets) {
        res.render('home', { title: 'Top Dog', pets });
    });
}

function newPet(req, res) {
    res.render('pets/new', { title: 'Post Pet' });
}

function create(req, res) {
    console.log('hi')
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    var pet = new Pet(req.body);
    pet.save(function (err) {
        // one way to handle errors
        if (err) return res.redirect('/pets/new');
        res.redirect(`/home`);
    });
}
