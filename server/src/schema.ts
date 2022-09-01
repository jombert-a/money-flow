import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = `
    type Skill {
        id: ID,
        name: String
    }

    type Query {
        allSkills: [Skill]
    }
`;

const resolvers = {
  Query: {
    allSkills: () => {
      return prisma.skill.findMany();
    },
  },
};

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});
