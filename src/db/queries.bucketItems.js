const BucketItem = require("./models").BucketItem;

module.exports = {

  createItem(newItem, callback){
    return BucketItem.create({
      title: newItem.title,
      description: newItem.description,
      type: newItem.type,
      location: newItem.location,
      complete: false,
      userId: newItem.userId
    })
    .then((item) => {
      callback(null, item);
    })
    .catch((err) => {
      callback(err);
    })
  },

  updateBucketItem(req, updatedItem, callback){
    return BucketItem.findById(req.params.id)
    .then((item) => {
      if(!item){
        return callback("Item not found.");
      }
      item.update(updatedItem, {
        fields: Object.keys(updatedItem)
      })
      .then(() => {
        callback(null, item);
      })
      .catch((err) => {
        callback(err);
      })
    })
  },

  getBucketItem(id, callback){
    return BucketItem.findOne({
      where: { id: id }
    })
    .then((item) => {
      callback(null, item);
    })
    .catch((err) => {
      callback(err);
    })
  },

  getAllBucketItemsByUser(user, callback){
    return BucketItem.findAll({
      where: { userId: user.id }
    })
    .then((items) => {
      callback(null, items);
    })
    .catch((err) => {
      callback(err);
    })
  }

}
