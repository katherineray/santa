const router = require("express").Router();
const itemRoutes = require("./posts");
const userRoutes = require("./router");

// routes
router.use("/items", itemRoutes);
router.use("/users", userRoutes);

module.exports = router;
