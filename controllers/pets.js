const Pet = require('../models/pet');

module.exports = {
    index,
    new: newPet,
    create
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
    // Assign the logged in user's id  <-- you already have this comment, but need the code below
    pet.user = req.user._id;
    pet.save(function(err) {
      if (err) return res.redirect('/pets/new' /* or a path that displays a custom error */);
      // Probably want to go to newly added book's show view  <-- update this comment
      res.redirect('/pets')
    });
  }
