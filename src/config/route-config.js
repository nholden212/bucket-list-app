module.exports = {
  init(app){

    const staticRoutes = require("../routes/static");
    const userRoutes = require("../routes/users");
    const bucketItemRoutes = require("../routes/bucketItems");

    app.use(staticRoutes);
    app.use(userRoutes);
    app.use(bucketItemRoutes);

  }
}
