import { statusResolver } from "./status-resolver";
import { userResolver } from "./user-resolver";

export const resolvers = {
  Query: {
    ...statusResolver.Query
  },
  Mutation: {
    ...userResolver.Mutation, 
  },
};
