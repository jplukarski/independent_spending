const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const candidateSchema = new Schema({
    active_through: {
        type: String,
        required: false
    },
    address_city: {
        type: String,
        required: false
    },
    address_state: {
        type: String,
        required: false
    },
    address_street_1: {
        type: String,
        required: false
    },
    address_street_2: {
        type: String,
        required: false
    },
    address_zip: {
        type: String,
        required: false
    },
    candidate_id: {
        type: String,
        required: false
    },
    candidate_inactive: {
        type: String,
        required: false
    },
    candidate_status: {
        type: String,
        required: false
    },
    district: {
        type: String,
        required: false
    },
    district_number: {
        type: String,
        required: false
    },
    federal_funds_flag: {
        type: String,
        required: false
    },
    first_file_date: {
        type: String,
        required: false
    },
    flags: {
        type: String,
        required: false
    },
    has_raised_funds: {
        type: String,
        required: false
    },
    incumbent_challenge: {
        type: String,
        required: false
    },
    incumbent_challenge_full: {
        type: String,
        required: false
    },
    last_f2_date: {
        type: String,
        required: false
    },
    last_file_date: {
        type: String,
        required: false
    },
    load_date: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    office: {
        type: String,
        required: false
    },
    office_full: {
        type: String,
        required: false
    },
    party: {
        type: String,
        required: false
    },
    party_full: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model('Candidate', candidateSchema)