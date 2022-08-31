import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { schema } from "./schema";

const app = express();
app.use(cors());

app.use(
  "/graphql-api",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.listen(3030, () => console.log("server listening on port 3030"));
