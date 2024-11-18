import { gql } from "@apollo/client";
import { grapqlClient } from "../graphql";
import { URI_DOTNET } from "../constants";

async function getStatusFromDotNet() {
  const res = await fetch(`${URI_DOTNET}/status`);
  return await res.text();
}

async function listAgents(userId :number) {
  const res = await fetch(`${URI_DOTNET}/values/child/${userId}`);
  return await res.json();
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
async function loginGql(username:string,password:string) {
  const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      message
    }
  }
  `;
  // Use Apollo Client to send the login mutation
  const { data } = await grapqlClient.mutate({
    mutation: LOGIN_MUTATION,
    variables: {
      username,
      password,
    },
  })
  console.log('graph data',data)
  if(data == null || data.login.token==null)return null;
  return {
      data:parseJwt(data.login.token),
      token:data.login.token
  }
}
function parseJwt (token:string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export default {
  getStatusFromDotNet,
  getStatusFromGraphql,
  loginGql,
  listAgents
};
