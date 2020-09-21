const Candidate = require('../../models/candidates')

module.exports = {
    Candidates: async () => {
        try {
            const candidates = await Candidate.find()
            return candidates.map(candidate => {
                return {
                    ...candidate._doc,
                    _id: candidate.id,
                }
            })
        } catch (err){
            throw err
        }
    },
    createCandidate: async args => {
        const candidate = new Candidate({
            active_through: args.candidateInput.active_through,
            address_city: args.candidateInput.address_city,
            address_state: args.candidateInput.address_state,
            address_street_1: args.candidateInput.address_street_1,
            address_street_2: args.candidateInput.address_street_2,
            address_zip: args.candidateInput.address_zip,
            candidate_id: args.candidateInput.candidate_id,
            candidate_inactive: args.candidateInput.candidate_inactive,
            candidate_status: args.candidateInput.candidate_status,
            district: args.candidateInput.district,
            district_number: args.candidateInput.district_number,
            federal_funds_flag: args.candidateInput.federal_funds_flag,
            first_file_date: args.candidateInput.first_file_date,
            flags: args.candidateInput.flags,
            has_raised_funds: args.candidateInput.has_raised_funds,
            incumbent_challenge: args.candidateInput.incumbent_challenge,
            incumbent_challenge_full: args.candidateInput.incumbent_challenge_full,
            last_f2_date: args.candidateInput.last_f2_date,
            last_file_date: args.candidateInput.last_file_date,
            load_date: args.candidateInput.load_date,
            name: args.candidateInput.name,
            office: args.candidateInput.office,
            office_full: args.candidateInput.office_full,
            party: args.candidateInput.party,
            party_full: args.candidateInput.party_full,
            state: args.candidateInput.state,
        });
        try {
            const result = await candidate.save()
            return {
                ...candidate._doc,
                _id: result._id
            } 
        } catch (err){
            throw err
        }
    }
}