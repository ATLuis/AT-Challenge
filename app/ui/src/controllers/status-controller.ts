import { gql } from "@apollo/client";
import { grapqlClient } from "../graphql";
import { URI_DOTNET } from "../constants";

async function getStatusFromDotNet() {
  const res = await fetch(`${URI_DOTNET}/status`);
  return await res.text();
}

async function getStatusFromGraphql() {
  const GET_STATUS = gql`
    query Status {
      getStatus
    }
  `;

  try {
    const res = await grapqlClient.query({
      query: GET_STATUS,
    });

    return res.data.getStatus;
  } catch (error) {
    return error;
  }
}

export default {
  getStatusFromDotNet,
  getStatusFromGraphql,
};
