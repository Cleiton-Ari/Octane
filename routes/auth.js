const express = require('express');
const router = require("express").Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds); // hass the password
const User = require("../models/User.model");



// ℹ️ Handles password encryption
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

// How many rounds should bcrypt run the salt (default [10 - 12 rounds])



// Require the User model in order to interact with the database
//const User = require("../models/User.model");

// Require necessary (isLoggedOut and isLiggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const { create } = require('connect-mongo');



router.post('/signup', (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;
  
  if (!firstname || !lastname || !email || !password) {
    res.status(400).json( { message: 'Merci de saisir vos identifiants à nouveau' });
    return;
  }

   // regarde la longueur du password
  if (password.length < 6){
   
   res.status(400).json({ message: 'Vous devez avoir au moins 6 caractères.'});
   return; 
 }


 User.findOne({email})
    .then(userFromDb =>{    // cr
     if (userFromDb === null) {
       const hashPass = bcryptjs.hashSync(password, salt);
       
        User.create({ firstname, lastname, email, hashPass })
          .then(createdUser =>{
           
            res.status(200).json( {createdUser});
            return;
          })

          .catch(err => {
            res.status(400).json( {message: 'error creating user'});
            return;
          })
     } else {
        res.status(400).json({message: 'user exists déja'});
        return;
     }
    
      
    })
    .catch(error => {
      res.status(400).json( {message: 'error validating email'});
      return;
    })

 

})


/*
router.get('/test', (req, res, next) =>{
 res.status(200).json({message: 'merci'})
})
*/


//  2- se logger sur son comppte 
router.post("/auth/login", (req, res, next) => {
 const { email, password } = req.body;

 if (!email || !password) {
   res.status(400).json({ errorMessage: "email or password missing" });
    return;
  }

 User.findOne({ email })
   .then((user) => {
     // If the user isn't found, send the message that user provided wrong credentials
     if (!user) {
      res.status(400).json({ errorMessage: "username does not exist" });
      return;
     }
 //compare le password sur la db de l'utilisateur
     if (bcryptjs.compareSync(password, user.hashPass)) {
       res.status(200).json({user}) 
       return;
     } 
     res.status(400).json({message: 'wrong password.'})
     return;
    
   })

   .catch((err) => {
     // in this case we are sending the error handling to the error handling middleware that is defined in the error handling file
     // you can just as easily run the res.status that is commented out below
     next(err);
     // return res.status(500).render("login", { errorMessage: err.message });
   });

})


// 3- rester connecté
router.get("/loggedin", (req, res, next) => {
 if (req.user) {
   res.status(200).json(req.user);
   return;
 }
});

 // 4- res.json(req.user);

// Déconnexion
router.get("/logout", (req, res) => {
 req.logout();
 res.status(204).send();
});


router.post("/formlocation", (req, res, next) => {
 if (req.user){
   res.status(200).json(req.user)
 }
})



module.exports = router;

/*
router.post("/signup", isLoggedOut, (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide your username." });
  }

  if (password.length < 8) {
    return res.status(400).json({
      errorMessage: "Your password needs to be at least 8 characters long.",
    });
  }

  //   ! This use case is using a regular expression to control for special characters and min length
  
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  if (!regex.test(password)) {
    return res.status(400).json( {
      errorMessage:
        "Password needs to have at least 8 chars and must contain at least one number, one lowercase and one uppercase letter.",
    });
  }
  */
/*
  // Search the database for a user with the username submitted in the form
  User.findOne({ ! }).then((found) => {
    // If the user is found, send the message username is taken
    if (found) {
      return res.status(400).json({ errorMessage: "! already taken." });
    }

    // if user is not found, create a new user - start with hashing the password
    return bcrypt
      .genSalt(saltRounds)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hashedPassword) => {
        // Create a user and save it in the database
        return User.create({
          username,
          password: hashedPassword,
        });
      })
      .then((user) => {
        // Bind the user to the session object
        req.session.user = user;
        res.status(201).json(user);
      })
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          return res.status(400).json({ errorMessage: error.message });
        }
        if (error.code === 11000) {
          return res.status(400).json({
            errorMessage:
              "Username need to be unique. The username you chose is already in use.",
          });
        }
        return res.status(500).json({ errorMessage: error.message });
      });
  });


//  1-création de comppte 
/*
const signup = require('./routes/signup');
app.use('/', signup);

const login = require('./routes/login');
app.use('/', login);
*/







  /* Here we use the same logic as above
  // - either length based parameters or we check the strength of a password
  if (password.length < 8) {
    return res.status(400).json({
      errorMessage: "Your password needs to be at least 8 characters long.",
    });
  }*/
/*
  // Search the database for a user with the username submitted in the form
  User.findOne({ username })
    .then((user) => {
      // If the user isn't found, send the message that user provided wrong credentials
      if (!user) {
        return res.status(400).json({ errorMessage: "Wrong credentials." });
      }

      // If user is found based on the username, check if the in putted password matches the one saved in the database
      bcrypt.compare(password, user.password).then((isSamePassword) => {
        if (!isSamePassword) {
          return res.status(400).json({ errorMessage: "Wrong credentials." });
        }
        req.session.user = user;
        // req.session.user = user._id; // ! better and safer but in this case we saving the entire user object
        return res.json(user);
      });
    })

    .catch((err) => {
      // in this case we are sending the error handling to the error handling middleware that is defined in the error handling file
      // you can just as easily run the res.status that is commented out below
      next(err);
      // return res.status(500).render("login", { errorMessage: err.message });
    });


router.get("/logout", isLoggedIn, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ errorMessage: err.message });
    }
    res.json({ message: "Done" });
  });
})
*/

