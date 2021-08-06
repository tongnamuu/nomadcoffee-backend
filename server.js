require('dotenv').config()
import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schema";
import { getUSer } from "./users/users.utils";


const server = new ApolloServer(
  {
    typeDefs, resolvers,
    context: async ({ req }) => {
      return {
        loggedInUser: await getUSer(req.headers.token)
      }
    }
  }
);

const PORT = process.env.PORT
server.listen(PORT).then(() => console.log(`Server is running on http://localhost:${PORT}`));
