import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
  Query: {
    SeeProfile: protectedResolver((_, { username }) => client.user.findUnique({
      where: {
        username
      }
    }))
  }
}
