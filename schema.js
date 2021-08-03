import { makeExecutableSchema} from "graphql-tools";
import { mergeResolvers, mergeTypeDefs} from "@graphql-tools/merge";
import { loadFilesSync } from '@graphql-tools/load-files';

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`)
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.{queries,mutations}.js`)

const resolvers = mergeResolvers(loadedResolvers)
const typeDefs = mergeTypeDefs(loadedTypes)

export const schema = makeExecutableSchema({typeDefs, resolvers})
