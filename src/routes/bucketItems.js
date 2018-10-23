const express = require("express");
const router = express.Router();
const bucketItemController = require("../controllers/bucketItemController");

router.get("/bucketItems/bucketItemForm", bucketItemController.renderBucketItemForm);

router.post("/bucketItems/createBucketItem", bucketItemController.createBucketItem);

module.exports = router;
