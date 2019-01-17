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
  },

  toggleComplete(req, res, next){
    bucketItemQueries.toggleComplete(req.params.id, (err, item) => {
      if(err || item === null){
        req.flash("notice", "There was a problem marking this item complete.");
      } else {
        res.redirect("/users/profile");
      }
    })
  },

  deleteBucketItem(req, res, next){
    bucketItemQueries.deleteBucketItem(req, (err, item) => {
      if(err){
        req.flash("notice", "There was a problem deleting this item.");
        res.redirect(500, "/users/profile");
      } else {
        res.redirect(303, "/users/profile");
      }
    })
  },

  sortItemsAZ(req, res, next){
    bucketItemQueries.getItemsByUserAZ(req.user, (err, items) => {
      if(err){
        res.redirect(500, "/");
      } else {
        res.render("users/profile", {items});
      }
    })
  },

  sortItemsMostRecent(req, res, next){
    bucketItemQueries.getItemsByUserDateAdded(req.user, (err, items) => {
      if(err){
        res.redirect(500, "/");
      } else {
        res.render("users/profile", {items});
      }
    })
  }

}
