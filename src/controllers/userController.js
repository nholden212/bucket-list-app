const userQueries = require("../db/queries.users.js");
const bucketItemQueries = require("../db/queries.bucketItems.js");
const passport = require("passport");

module.exports = {

  renderSignUp(req, res, next){
    res.render("users/sign_up");
  },

  createUser(req, res, next){
    let newUser = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConfirmation: req.body.passwordConfirmation
    };
    userQueries.createUser(newUser, (err, user) => {
      if(err){
        req.flash("error", err);
        res.redirect("/users/sign_up");
      } else {
        passport.authenticate("local")(req, res, function () {
          req.flash("notice", "Welcome to Bucket List!");
          res.redirect("/");
        });
      }
    });
  },

  renderLogIn(req, res, next){
    res.render("users/log_in");
  },

  logIn(req, res, next){
    passport.authenticate("local")(req, res, function () {
      if(!req.user){
        req.flash("notice", "Login failed. Please try again.")
        res.redirect("/users/log_in");
      } else {
        req.flash("notice", "Login successful!");
        res.redirect("/");
      }
    });
  },

  renderLogOut(req, res, next){
    res.render("users/log_out");
  },

  logOut(req, res, next){
    req.logout();
    req.flash("notice", "You are now logged out.");
    res.redirect("/");
  },

  renderProfile(req, res, next){
    bucketItemQueries.getAllBucketItemsByUser(req.user, (err, items) => {
      if(err){
        res.redirect(500, "/");
      } else {
        console.log("HEY items is " + items);
        res.render("users/profile", {items});
      }
    })
  }

}
