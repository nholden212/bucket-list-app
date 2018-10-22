module.exports = {

  validateUsers(req, res, next){
    console.log("validateUsers is being called.");
    if(req.method === "POST"){
      req.checkBody("email", "must be valid").isEmail();
      req.checkBody("username", "must be at least 3 characters long").isLength({min: 3});
      req.checkBody("password", "must be at least 8 characters long").isLength({min: 8});
      req.checkBody("password confirmation", "must match the given password").optional().matches(req.body.password);
    }
    const errors = req.validationErrors();
    if(errors){
      req.flash("error", errors);
      return res.redirect(req.headers.referer);
    } else {
      return next();
    }
  }

}
