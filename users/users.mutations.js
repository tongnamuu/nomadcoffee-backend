import client from "../client"
import bcrypt from "bcrypt"

export default {
  Mutation: {
    createAccount: async (_, {
      username,
      email,
      name,
      location,
      password,
      avatarURL,
      githubUsername
    }) => {
      try {
        const alreadyExisting = await client.user.findFirst({
          where: {
            OR: [
              {
                username,
              },
              {
                email,
              }
            ]
          }
        })
        if (alreadyExisting) {
          throw new Error("Account Already Exist!");
        }
        const hashPassword = await bcrypt.hash(password, 10);
        return client.user.create({
          data: {
            username, email, name, location, password: hashPassword, avatarURL, githubUsername
          }
        });
      } catch (error) {
        return error;
      }
    }
  }
}
