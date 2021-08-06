import bcrypt from "bcrypt"
import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    editProfile:
      protectedResolver(async (_, {
        username,
        email,
        name,
        location,
        password: newPassword,
        avatarURL,
        githubUsername

      }, { loggedInUser }) => {
        let hashPassword = null;
        if (newPassword) {
          hashPassword = await bcrypt.hash(newPassword, 10)
        }
        const updatedUser = await client.user.update({
          where: {
            id: loggedInUser.id
          },
          data: {
            username,
            email,
            name,
            location,
            ...(hashPassword && { password: hashPassword }),
            avatarURL,
            githubUsername
          }
        })
        if (updatedUser.id) {
          return {
            ok: true
          }
        } else {
          return {
            ok: false,
            error: "Can't update profile"
          }
        }
      })
  }
}

