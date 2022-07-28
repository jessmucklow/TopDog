const Pet = require('../models/pet');

module.exports = {
    index,
    create,
    delete: deleteRank,
    edit,
    update
};

function edit(req, res) {
    console.log(req.params.id)
      Pet.findOne({"ranks._id": req.params.id}, function(err, pet) {
       let rank = pet.ranks.id(req.params.id)
       console.log(rank)
        if (err || !pet) return res.redirect('/pets');
            res.render('pets/edit', {pet, rank, title: 'edit'});
      });
    }
  
  function update(req, res) {
    Pet.findOne({'ranks._id': req.params.id}, function(err, pet) {
      const rankUpdate = pet.ranks.find(x => x.id === req.params.id);
      if (!rankUpdate.user.equals(req.user._id)) return res.redirect(`pets/edit/${pet._id}`);
      rankUpdate.ranking = req.body.ranking;
      pet.save(function(err) {
        res.redirect(`/pets/show/${pet._id}`);
      });
    });
  }
  

function index(req, res) {
    Pet.find({}).sort('-createdAt').exec(function (err, pets) {
        res.render('pets/ranks', { title: 'Top Dog', pets });
    });
}

async function deleteRank(req, res, next) {
    try {
      const pet = await Pet.findOne({'ranks._id': req.params.id, 'ranks.user': req.user._id});
      if (!pet) throw new Error('Nice Try!');
      pet.ranks.remove(req.params.id);
      await pet.save();
      res.redirect(`/pets/show/${pet._id}`);
    } catch (err) {
      return next(err);
    }
  }

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
