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
  },

  renderEditForm(req, res, next){
    bucketItemQueries.getBucketItem(req.params.id, (err, item) => {
      if(err || item === null){
        req.flash("There was a problem editing the item you selected.");
        res.redirect(404, "/");
      } else {
        res.render("bucketItems/edit", {item});
      }
    })
  },

  updateBucketItem(req, res, next){
    bucketItemQueries.updateBucketItem(req, req.body, (err, item) => {
      if(err || item === null){
        req.flash("notice", "There was a problem updating this item.");
        res.redirect(404, `/bucketItems/${req.params.id}/edit`);
      } else {
        res.redirect("/users/profile");
      }
    })
  }

}
