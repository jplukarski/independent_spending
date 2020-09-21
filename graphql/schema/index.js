const {buildSchema} = require('graphql')

module.exports = buildSchema(`

type Committee {
    _id: ID
    committee_id: String
    affiliated_committee_name: String
    city: String
    committee_type: String
    committee_type_full: String
    custodian_city: String
    custodian_name_1: String
    custodian_name_2: String
    custodian_name_full: String
    custodian_name_middle: String
    custodian_name_prefix: String
    custodian_name_suffix: String
    custodian_name_title: String
    custodian_phone: String
    custodian_state: String
    custodian_street_1: String
    custodian_street_2: String
    custodian_zip: String
    designation: String
    designation_full: String
    email: String
    fax: String
    filing_frequency: String
    first_file_date: String
    form_type: String
    last_file_date: String
    leadership_pac: String
    lobbyist_registrant_pac: String
    name: String
    organization_type: String
    organization_type_full: String
    party: String
    party_full: String
    party_type: String
    party_type_full: String
    state: String
    state_full: String
    street_1: String
    street_2: String
    treasurer_city: String
    treasurer_name: String
    treasurer_name_1: String
    treasurer_name_2: String
    treasurer_name_middle: String
    treasurer_name_prefix: String
    treasurer_name_suffix: String
    treasurer_name_title: String
    treasurer_phone: String
    treasurer_state: String
    treasurer_street_1: String
    treasurer_street_2: String
    treasurer_zip: String
    website: String
    zip: String
}

input CommitteeInput {
    committee_id: String
    affiliated_committee_name: String
    city: String
    committee_type: String
    committee_type_full: String
    custodian_city: String
    custodian_name_1: String
    custodian_name_2: String
    custodian_name_full: String
    custodian_name_middle: String
    custodian_name_prefix: String
    custodian_name_suffix: String
    custodian_name_title: String
    custodian_phone: String
    custodian_state: String
    custodian_street_1: String
    custodian_street_2: String
    custodian_zip: String
    designation: String
    designation_full: String
    email: String
    fax: String
    filing_frequency: String
    first_file_date: String
    form_type: String
    last_file_date: String
    leadership_pac: String
    lobbyist_registrant_pac: String
    name: String
    organization_type: String
    organization_type_full: String
    party: String
    party_full: String
    party_type: String
    party_type_full: String
    state: String
    state_full: String
    street_1: String
    street_2: String
    treasurer_city: String
    treasurer_name: String
    treasurer_name_1: String
    treasurer_name_2: String
    treasurer_name_middle: String
    treasurer_name_prefix: String
    treasurer_name_suffix: String
    treasurer_name_title: String
    treasurer_phone: String
    treasurer_state: String
    treasurer_street_1: String
    treasurer_street_2: String
    treasurer_zip: String
    website: String
    zip: String
}

type Candidate {
    _id: ID!
    active_through: String
    address_city: String
    address_state: String
    address_street_1: String
    address_street_2: String
    address_zip: String
    candidate_id: String
    candidate_inactive: String
    candidate_status: String
    district: String
    district_number: String
    federal_funds_flag: String
    first_file_date: String
    flags: String
    has_raised_funds: String
    incumbent_challenge: String
    incumbent_challenge_full: String
    last_f2_date: String
    last_file_date: String
    load_date: String
    name: String
    office: String
    office_full: String
    party: String
    party_full: String
    state: String
}

input CandidateInput {
    active_through: String!
    address_city: String
    address_state: String
    address_street_1: String
    address_street_2: String
    address_zip: String
    candidate_id: String
    candidate_inactive: String
    candidate_status: String
    district: String
    district_number: String
    federal_funds_flag: String
    first_file_date: String
    flags: String
    has_raised_funds: String
    incumbent_challenge: String
    incumbent_challenge_full: String
    last_f2_date: String
    last_file_date: String
    load_date: String
    name: String
    office: String
    office_full: String
    party: String
    party_full: String
    state: String
}

type Expenditure {
    _id: ID!
    candidate_id: String
    candidate_name: String
    committee_id: String
    committee_name: String
    count: String
    cycle: String
    support_oppose_indicator: String
    total: Int
}

input ExpenditureInput {
    candidate_id: String
    candidate_name: String
    committee_id: String
    committee_name: String
    count: String
    cycle: String
    support_oppose_indicator: String
    total: Int
}

type RootQuery {
    candidates: [Candidate!]!
    comittees: [Committee!]!
    expenditures: [Expenditure!]!
}

type RootMutation {
    createCandidate(candidateInput: CandidateInput): Candidate
    createCommittee(comitteeInput: CommitteeInput): Committee
    createExpenditure(expenditureInput: ExpenditureInput): Expenditure
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`)