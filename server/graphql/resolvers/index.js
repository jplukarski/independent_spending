const candidatesResolver = require('./candidates')
const expendituresResolver = require('./expenditures')
const committeesResolver = require('./committees')

const rootResolver = {
    ...candidatesResolver,
    ...expendituresResolver,
    ...committeesResolver
}

module.exports = rootResolver;