import { gql } from "apollo-server";

export default gql`
  type CreateAccountesult {
    ok: Boolean!
    errors: String
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
    ): CreateAccountesult
  }
`