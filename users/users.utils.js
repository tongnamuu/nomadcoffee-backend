import jwt from "jsonwebtoken"
import client from "../client"

export const getUSer = async (token) => {
  try {
    if (!token) {
      return null;
    }
    const { id } = await jwt.verify(token, process.env.SECRET_KEY)
    const user = await client.user.findUnique({ where: { id } })
    if (user) {
      return user
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}


export function protectedResolver(resolver){
  return function(root, args, context, info) {
    if (!context.loggedInUser) {
      return {
        ok: false,
        error: "Please Login"
      }
    }
    return resolver(root, args, context, info)
  }
}