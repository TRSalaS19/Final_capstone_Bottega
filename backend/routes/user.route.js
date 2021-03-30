const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const fName = req.body.fName;
  const lName = req.body.lName;
  const phoneNumber = req.body.phoneNumber;
  const addressOne = req.body.addressOne;
  const addressTwo = req.body.addressTwo;
  const city = req.body.city;
  const state = req.body.city;
  const zipCode = req.body.zipCode;

  const newUser = new User({username,email,fName,lName,phoneNumber,addressOne,addressTwo,city,state,zipCode});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;