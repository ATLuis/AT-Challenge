import { gql } from "apollo-server-express";

// add your type definitions here
export const typeDefs = gql`
  type Query {
    getStatus: String
    agent(id:ID!): Agent
    agentChilds(id:ID!): [Agent]
  }
  type Mutation {
    login(username: String!,password: String!): AuthPayload
    createAgent(firstName: String!, lastName: String!,phone: String!,userName: String!,password: String!,parentId:ID!): Agent
    updateAgent(id: ID!,firstname: String!, lastname: String!,phone: String!,username: String!,password: String!): Agent
    deleteAgent(id: ID!): Boolean
  }
  type AuthPayload {
    token: String
    message: String
  }
  type Agent {
    id: ID!
    parentId: ID!
    firstname: String!
    lastname: String!
    fullname: String!
    username: String!
    phone: String!
    status: String!
  }
`;
