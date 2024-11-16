import { statusResolver } from "./status-resolver";

export const resolvers = {
  Query: {
    ...statusResolver.Query
  },
};
