const Pet = require('../models/pet');

module.exports = {
    index,
    create
};

function index(req, res) {
    Pet.find({}).sort('-createdAt').exec(function (err, pets) {
        res.render('pets/ranks', { title: 'Top Dog', pets });
    });
}

// function create(req, res) {
//     Pet.findById(req.params.id, function(err, rank) {
//       req.body.user = req.user._id;
//       req.body.userName = req.user.name;
//       req.body.userAvatar = req.user.avatar;
//       pet.ranks.push(req.body);
//       pet.save(function(err) {
//         res.redirect(`/pets/${pet._id}`);
//       });
//     });
//   }


function create(req, res) {
    Pet.findById(req.params.id, function (err, pet) {
        // Update req.body to contain user info
        console.log
        req.body.user = req.user._id;
        // Add the comment
        pet.ranks.push(req.body);
        pet.save(function (err) {
            res.redirect(`/pets/show/${pet._id}`);
        });
    });
}