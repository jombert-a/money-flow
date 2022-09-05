import "reflect-metadata";
import path from "path";
import { resolvers } from "./prisma/generated/type-graphql";
import { buildSchemaSync } from "type-graphql";

export const schema = buildSchemaSync({
  resolvers,
  emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
  validate: false,
});
