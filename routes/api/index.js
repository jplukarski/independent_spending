const router = require("express").Router();
const expenditureRoutes = require("./expenditures");

// Expenditures routes
router.use("/expenditures", expenditureRoutes);

module.exports = router;