const { gql } = require("apollo-server");

export default gql` 
  type Query {
    SeeProfile(username: String!) : User
  }
`

