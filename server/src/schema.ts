import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type Skill {
        id: ID,
        name: String
    }
`);
