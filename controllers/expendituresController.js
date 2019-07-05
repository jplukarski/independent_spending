const db = require("../models");

// Defining methods for the expendituresController
module.exports = {
    findAll: function (req, res) {
        db.Expenditure
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByCycle: function (req, res) {
        db.Expenditure
            .find({ "cycle": req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Expenditure
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Expenditure
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        // console.log(req.params.cycle)
        db.Expenditure
            .deleteMany({ "cycle": req.params.id })
            // .findById({ _id: req.params.id })
            // .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};