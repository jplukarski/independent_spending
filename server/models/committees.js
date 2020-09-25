const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const committeeSchema = new Schema({
    affiliated_committee_name: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    committee_type: {
        type: String,
        required: false
    },
    committee_type_full: {
        type: String,
        required: false
    },
    custodian_city: {
        type: String,
        required: false
    },
    custodian_name_1: {
        type: String,
        required: false
    },
    custodian_name_2: {
        type: String,
        required: false
    },
    custodian_name_full: {
        type: String,
        required: false
    },
    custodian_name_middle: {
        type: String,
        required: false
    },
    custodian_name_prefix: {
        type: String,
        required: false
    },
    custodian_name_suffix: {
        type: String,
        required: false
    },
    custodian_name_title: {
        type: String,
        required: false
    }, 
    custodian_phone: {
        type: String,
        required: false
    }, 
    custodian_state: {
        type: String,
        required: false
    }, 
    custodian_street_1: {
        type: String,
        required: false
    }, 
    custodian_street_2: {
        type: String,
        required: false
    }, 
    custodian_zip: {
        type: String,
        required: false
    }, 
    designation: {
        type: String,
        required: false
    }, 
    designation_full: {
        type: String,
        required: false
    }, 
    email: {
        type: String,
        required: false
    }, 
    fax: {
        type: String,
        required: false
    }, 
    filing_frequency: {
        type: String,
        required: false
    }, 
    first_file_date: {
        type: String,
        required: false
    }, 
    form_type: {
        type: String,
        required: false
    }, 
    last_file_date: {
        type: String,
        required: false
    }, 
    leadership_pac: {
        type: String,
        required: false
    }, 
    lobbyist_registrant_pac: {
        type: String,
        required: false
    }, 
    name: {
        type: String,
        required: false
    }, 
    organization_type: {
        type: String,
        required: false
    }, 
    organization_type_full: {
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
    party_type: {
        type: String,
        required: false
    }, 
    party_type_full: {
        type: String,
        required: false
    }, 
    state: {
        type: String,
        required: false
    }, 
    state_full: {
        type: String,
        required: false
    }, 
    street_1: {
        type: String,
        required: false
    }, 
    street_2: {
        type: String,
        required: false
    }, 
    treasurer_city: {
        type: String,
        required: false
    }, 
    treasurer_name: {
        type: String,
        required: false
    }, 
    treasurer_name_1: {
        type: String,
        required: false
    }, 
    treasurer_name_2: {
        type: String,
        required: false
    }, 
    treasurer_name_middle: {
        type: String,
        required: false
    }, 
    treasurer_name_prefix: {
        type: String,
        required: false
    }, 
    treasurer_name_suffix: {
        type: String,
        required: false
    }, 
    treasurer_name_title: {
        type: String,
        required: false
    }, 
    treasurer_phone: {
        type: String,
        required: false
    }, 
    treasurer_state: {
        type: String,
        required: false
    }, 
    treasurer_street_1: {
        type: String,
        required: false
    }, 
    treasurer_street_2: {
        type: String,
        required: false
    }, 
    treasurer_zip: {
        type: String,
        required: false
    }, 
    website: {
        type: String,
        required: false
    }, 
    zip: {
        type: String,
        required: false
    }, 
    committee_id: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model('Committee', committeeSchema)
