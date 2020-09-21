const Expenditure = require('../../models/expenditures')

module.exports = {
    expenditures: async () => {
        try {
            const expenditures = await Expenditure.find()
            return expenditures.map(expenditure => {
                return {
                    ...expenditure._doc,
                    _id: expenditure.id,
                }
            })
        } catch (err) {
            throw err
        }
    },
    createExpenditure: async args => {
        const expenditure = new Expenditure({
            candidate_id: args.expenditureInput.candidate_id,
            candidate_name: args.expenditureInput.candidate_name,
            committee_id: args.expenditureInput.committee_id,
            committee_name: args.expenditureInput.committee_name,
            count: args.expenditureInput.count,
            cycle: args.expenditureInput.cycle,
            support_oppose_indicator: args.expenditureInput.support_oppose_indicator,
            total: args.expenditureInput.total,
        });
        try {
            const result = await expenditure.save()
            return {
                ...expenditure._doc,
                _id: result._id
            }
        } catch (err){
            throw err
        }
    }
}