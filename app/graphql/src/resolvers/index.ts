import { loginResolver } from "./login-resolver";
import { statusResolver } from "./status-resolver";

export const resolvers = {
  Query: {
    ...statusResolver.Query
  },
  Mutation: {
    ...loginResolver.Mutation
  }
};
