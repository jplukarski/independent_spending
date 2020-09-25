const express = require('express');
const bodyParser = require('body-parser');
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose')
const graphqlSchema = require('./graphql/schema/index')
const graphqlResolvers = require('./graphql/resolvers/index')

const app = express();
const port = process.env.PORT || 3001
const path = require('path')
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Methods",'*');
    res.setHeader("Access-Control-Allow-Headers",'*');
    if(req.method === "OPTIONS"){
        return res.sendStatus(200);
    }
    next()
})

app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
}));

app.use(express.static(path.join(__dirname, '../build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@schedule-e-by-candidate.2nlju.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(port, () => {console.log(`listening on ${port}`)});
})
.catch(err => {
    console.log(err);
})