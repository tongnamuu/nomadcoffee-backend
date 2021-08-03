import client from "../client";

export default {
  Mutation: {
    createCoffee: (_, { name, popular }) => client.coffee.create({ data: { name, popular } }),
    deleteCoffee: (_, { id }) => client.coffee.delete({ where: { id } }),
    updateCoffee: (_, { id, popular }) => client.coffee.update({ where: { id }, data: { popular } }),
  }
}