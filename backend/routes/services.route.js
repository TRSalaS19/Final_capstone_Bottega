const router = require('express').Router();
let Service = require('../models/services.model');

router.route('/').get((req, res) => {
  Service.find()
    .then(services => res.json(services))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name= req.body.name;
  const description = req.body.description;
  const img = req.body.img;

  const newService = new Service({name, description, img});

  newService.save()
    .then(() => res.json('Service added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;