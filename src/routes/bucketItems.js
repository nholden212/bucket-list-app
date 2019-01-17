const express = require("express");
const router = express.Router();
const bucketItemController = require("../controllers/bucketItemController");

router.get("/bucketItems/bucketItemForm", bucketItemController.renderBucketItemForm);
router.get("/bucketItems/:id/edit", bucketItemController.renderEditForm);
router.get("/bucketItems/:id/toggleComplete", bucketItemController.toggleComplete);
router.get("/bucketItems/:id/deleteBucketItem", bucketItemController.deleteBucketItem);

router.get("/bucketItems/sortItemsAZ", bucketItemController.sortItemsAZ);
router.get("/bucketItems/sortItemsMostRecent", bucketItemController.sortItemsMostRecent);

router.post("/bucketItems/createBucketItem", bucketItemController.createBucketItem);
router.post("/bucketItems/:id/updateBucketItem", bucketItemController.updateBucketItem);

module.exports = router;
