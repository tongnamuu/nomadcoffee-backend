import client from "../client";

export default {
  Query: {
    findUser: (_, { username }) => client.user.findUnique({
      where: {
        username
      }
    })
  }
}
