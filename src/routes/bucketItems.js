const express = require("express");
const router = express.Router();
const bucketItemController = require("../controllers/bucketItemController");

router.get("/newBucketItem", bucketItemController.renderBucketItemForm);

module.exports = router;
