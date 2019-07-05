const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenditureSchema = new Schema({

    support_oppose_indicator: { type: String },
    candidate_name: { type: String },
    committee_name: { type: String },
    count: { type: Number },
    candidate_id: { type: String },
    cycle: { type: Number },
    committee_id: { type: String },
    total: { type: Number },

});

const Expenditure = mongoose.model("Expenditure", expenditureSchema);

module.exports = Expenditure;
