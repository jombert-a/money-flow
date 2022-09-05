import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { schema } from "./schema";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(cors());

app.use(
  "/graphql-api",
  graphqlHTTP({
    graphiql: true,
    schema,
    context: {
      prisma: prisma,
    },
  })
);

app.listen(3030, () => console.log("server listening on port 3030"));
