import { statusResolver } from "./status-resolver";
import { loginResolver } from "./login-resolver";
import { agentResolver } from "./agent-resolver";

export const resolvers = {
  Query: {
    ...statusResolver.Query,
    ...agentResolver.Query,
  },
  Mutation:{
    ...loginResolver.Mutation,
    ...agentResolver.Mutation,
  }
};
