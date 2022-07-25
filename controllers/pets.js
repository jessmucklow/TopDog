const Pets = require('../models/pets');

module.exports = {
  index,
};

function index(req, res) {
    Pet.find({}, function(err, movies) {
      res.render('/home', { title: 'Top Dog', pets });
    });
  }