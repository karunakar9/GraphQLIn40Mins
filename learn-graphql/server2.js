const express = require('express')
const expressGraphQL = require('express-graphql')
const app =express()
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
  } = require('graphql')

app.use('/graphql',expressGraphQL({
    graphiql:true
}))
app.listen(3000,()=>console.log('server started at port 3000'))