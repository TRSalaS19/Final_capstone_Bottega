const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const pssportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/user.model');


const signToken = userID => {
  return JWT.sign({
    iss : "token",
    sub: userID
  },"token", {expiresIn: "1h"});
};

userRouter.post('/signup', (req,res) =>{
      const {email, password,fName, lName, phoneNumber, role} = req.body;
      User.findOne({email}, (err,user) => {
          if(err)
            res.status(500).json({message: {msgBody: 'error has occured creating account', msgError:true}})
          if(user)
            res.status(400).json({message: {msgBody: 'Account with that email already exsist', msgError:true}})
          else{
              const newUser = new User({email, password, fName, lName, phoneNumber, role});
              newUser.save(err => {
                    if(err)
                      res.status(500).json({message: {msgBody: 'error has occured creating account', msgError:true}})
                    else
                      res.status(201).json({message: {msgBody: 'Account Successfully created!', msgError:false}})
                });
              }
            });
        });
            
userRouter.post('/signin',passport.authenticate('local',{session: false}), (req,res) => {
      if(req.isAuthenticated()) {
          const {_id, email} = req.user;
          const token = signToken(_id);
          res.cookie('access_token', token, {httpOnly:true, sameSite:true});
          res.status(200).json({isAuthenticated: true, user: {email}});
        }
    });

userRouter.route('/').get((req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
module.exports = userRouter;





  // router.route('/add').post((req, res) => {
    //   const email = req.body.email;
    //   const password = req.body.password;
    //   const confirm = req.body.confirm;
    //   const fName = req.body.fName;
    //   const lName = req.body.lName;
    //   const phoneNumber = req.body.phoneNumber;
    //   const role = req.body.role;
    
    //   const newUser = new User({email,password,confirm,fName,lName,phoneNumber, role});
    
    //   newUser.save()
    //     .then(() => res.json('User added!'))
    //     .catch(err => res.status(400).json('Error: ' + err));
    // });
  