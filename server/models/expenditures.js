const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenditureSchema = new Schema({
    candidate_id: {
        type: String,
        required: true
    },
    candidate_name: {
        type: String,
        required: true
    },
    committee_id: {
        type: String,
        required: true
    },
    committee_name: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    cycle: {
        type: Number,
        required: true
    },
    support_oppose_indicator: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Expenditure', expenditureSchema)