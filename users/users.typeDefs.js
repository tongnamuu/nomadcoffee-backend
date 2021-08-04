const { gql } = require("apollo-server");

export default gql`
  type User {
    id: Int!
    username: String!
    email: String!
    name: String!
    location: String
    password: String!
    avatarURL: String
    githubUsername: String
    createdAt: String!
    updatedAt: String!
  }
  type Mutation {
    createAccount(
      username: String!
      email: String!
      name: String!
      location: String
      password: String!
      avatarURL: String
      githubUsername: String
    ): User
  }
  type Query {
    findUser(username: String!) : User
  }
`

