import { gql } from "apollo-server";

export default gql`
  type Coffee {
    id: Int!
    name: String!
    popular: Int
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    coffees: [Coffee]
    coffee(id:Int!): Coffee
  }

  type Mutation {
    createCoffee(name: String!, popular:Int): Coffee
    deleteCoffee(id: Int!): Coffee
    updateCoffee(id: Int!, popular:Int!): Coffee
  }
`;
