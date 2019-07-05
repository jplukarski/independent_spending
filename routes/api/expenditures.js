const router = require("express").Router();
const expendituresController = require("../../controllers/expendituresController");

// Matches with "/api/expenditures"
router.route("/")
    .get(expendituresController.findAll)
    .post(expendituresController.create);

// Matches with "/api/expenditures/:id"
router
    .route("/:id")
    .get(expendituresController.findByCycle)
    .put(expendituresController.update)
    .delete(expendituresController.remove);
module.exports = router;