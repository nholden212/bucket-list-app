const bucketItemQueries = require("../db/queries.bucketItems.js");

module.exports = {

  renderBucketItemForm(req, res, next){
    res.render("bucketItems/new");
  },

  createBucketItem(req, res, next){
    let newItem = {
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      type: req.body.type,
      userId: req.user.id
    };
    bucketItemQueries.createItem(newItem, (err, item) => {
      if(err){
        req.flash("error", err);
        res.redirect("/bucketItems/new");
      } else {
        req.flash("notice", "Item was successfully added.");
        res.redirect("/");
      }
    })
  }

}
