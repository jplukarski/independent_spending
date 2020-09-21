const Committee = require('../../models/committees')

module.exports = {
    committees: async () => {
        try {
            const committees = await Committee.find()
            return committees.map(committee => {
                return {
                    ...committee._doc,
                    _id: committee.id
                }
            })
        } catch (err) {
            throw err
        }
    },
    createCommittee: async args => {
        const committee = new Committee({
            committee_id: args.comitteeInput.committee_id,
            affiliated_committee_name: args.comitteeInput.affiliated_committee_name,
            city: args.comitteeInput.city,
            committee_type: args.comitteeInput.committee_type,
            committee_type_full: args.comitteeInput.committee_type_full,
            custodian_city: args.comitteeInput.custodian_city,
            custodian_name_1: args.comitteeInput.custodian_name_1,
            custodian_name_2: args.comitteeInput.custodian_name_2,
            custodian_name_full: args.comitteeInput.custodian_name_full,
            custodian_name_middle: args.comitteeInput.custodian_name_middle,
            custodian_name_prefix: args.comitteeInput.custodian_name_prefix,
            custodian_name_suffix: args.comitteeInput.custodian_name_suffix,
            custodian_name_title: args.comitteeInput.custodian_name_title,
            custodian_phone: args.comitteeInput.custodian_phone,
            custodian_state: args.comitteeInput.custodian_state,
            custodian_street_1: args.comitteeInput.custodian_street_1,
            custodian_street_2: args.comitteeInput.custodian_street_2,
            designation_full: args.comitteeInput.designation_full,
            email: args.comitteeInput.email,
            fax: args.comitteeInput.fax,
            filing_frequency: args.comitteeInput.filing_frequency,
            first_file_date: args.comitteeInput.first_file_date,
            form_type: args.comitteeInput.form_type,
            last_file_date: args.comitteeInput.last_file_date,
            leadership_pac: args.comitteeInput.leadership_pac,
            lobbyist_registrant_pac: args.comitteeInput.lobbyist_registrant_pac,
            name: args.comitteeInput.name,
            organization_type: args.comitteeInput.organization_type,
            organization_type_full: args.comitteeInput.organization_type_full,
            party: args.comitteeInput.party,
            party_full: args.comitteeInput.party_full,
            party_type: args.comitteeInput.party_type,
            party_type_full: args.comitteeInput.party_type_full,
            state: args.comitteeInput.state,
            state_full: args.comitteeInput.state_full,
            street_1: args.comitteeInput.street_1,
            street_2: args.comitteeInput.street_2,
            treasurer_city: args.comitteeInput.treasurer_city,
            treasurer_name: args.comitteeInput.treasurer_name,
            treasurer_name_1: args.comitteeInput.treasurer_name_1,
            treasurer_name_2: args.comitteeInput.treasurer_name_2,
            treasurer_name_middle: args.comitteeInput.treasurer_name_middle,
            treasurer_name_prefix: args.comitteeInput.treasurer_name_prefix,
            treasurer_name_suffix: args.comitteeInput.treasurer_name_suffix,
            treasurer_name_title: args.comitteeInput.treasurer_name_title,
            treasurer_phone: args.comitteeInput.treasurer_phone,
            treasurer_state: args.comitteeInput.treasurer_state,
            treasurer_street_1: args.comitteeInput.treasurer_street_1,
            treasurer_street_2: args.comitteeInput.treasurer_street_2,
            treasurer_zip: args.comitteeInput.treasurer_zip,
            website: args.comitteeInput.website,
            zip: args.comitteeInput.zip,
        });
        try {
            const result = await committee.save()
            return {
                ...committee._doc,
                _id: result.id
            }
        } catch (err) {
            throw err
        }
    }
}