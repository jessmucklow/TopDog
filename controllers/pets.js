const Pet = require('../models/pet');

module.exports = {
    index,
    new: newPet,
    create,
    show
};

function index(req, res) {
    Pet.find({}).sort('-createdAt').exec(function (err, pets) {
        res.render('home', { title: 'Top Dog', pets });
    });
}

function newPet(req, res) {
    res.render('pets/new', { title: 'Post Pet' });
}

function create(req, res) {
    const pet = new Pet(req.body);
    pet.user = req.user._id;
    pet.save(function(err) {
      if (err) return res.redirect('/pets/new');
      res.redirect('/pets')
    });
  }

function show(req, res) {
    Pet.findById(req.params.id, function(err, pet){
        res.render('pets/show', {title: 'Pet Details', pet });
    })
}