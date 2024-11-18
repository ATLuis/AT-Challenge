import { gql } from "@apollo/client";
import { grapqlClient } from "../graphql";

 async function loginFromGraphql(username: string, password: string) {
    const LOGIN_USER = gql`
      mutation Login {
        login(username: "${username}", password: "${password}")
      }
    `;
  
    try {
      const res = await grapqlClient.mutate({
        mutation: LOGIN_USER,
        variables:{username:username,password:password}
      },
      );
    console.log(res.data);
      return res.data;
    } catch (error) {
      return error;
    }
  }

  export default
    {
        loginFromGraphql
    }