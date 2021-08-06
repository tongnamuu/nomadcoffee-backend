import bcrypt from "bcrypt"
import client from "../../client";

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
        const createdUser = await client.user.create({
          data: {
            username, email, name, location, password: hashPassword, avatarURL, githubUsername
          }
        });
        if(createdUser.id) {
          return {
            ok:true
          }
        } else {
          console.log("not created")
          return {
            ok: false,
            error: "Can't Create User"
          }
        }
      } catch (error) {
        console.log("here")
        return {
          ok: false,
          error: "Account Already Exist"
        }
      }
    }
  }
}
