const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

router.user("/users", userRoutes);
router.user("/thoughts", thoughtRoutes);

module.export= router;
