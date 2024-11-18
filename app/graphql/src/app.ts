import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./schema/type-definitions";
import { resolvers } from "./resolvers";
import cors from "cors";
import { authenticateJWT } from "./utils/jwt";

const app = express();
app.use(cors())
app.use(express.json());

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(
  "/graphql",
  authenticateJWT,
  createHandler({
    schema,
    // context:({req}:any)=>{
    //   return { user: req.user?? null };
    // }
  })
);

export default app;
