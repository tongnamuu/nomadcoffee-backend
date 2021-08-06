import { makeExecutableSchema} from "graphql-tools";
import { mergeResolvers, mergeTypeDefs} from "@graphql-tools/merge";
import { loadFilesSync } from '@graphql-tools/load-files';

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`)
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.js`)

export const resolvers = mergeResolvers(loadedResolvers)
export const typeDefs = mergeTypeDefs(loadedTypes)
