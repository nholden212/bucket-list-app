const BucketItem = require("./models").BucketItem;

module.exports = {

  createItem(newItem, callback){
    console.log("newItem is " + newItem);
    console.log("BucketItem is " + BucketItem);
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
  }

}
