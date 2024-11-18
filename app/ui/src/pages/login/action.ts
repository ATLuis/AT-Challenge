import { ActionFunctionArgs, redirect } from "react-router-dom";

export async function loginAction({ request }: ActionFunctionArgs) {
  console.log("loginAction ejecutado");
  const formData = await request.formData();
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        mutation Login($username: String!, $password: String!) {
          login(username: $username, password: $password) {
            success
            message
            token
          }
        }
      `,
      variables: { username, password },
    }),
  });

  const { data } = await response.json();

  if (data?.login?.success) {
    localStorage.setItem("token", data.login.token);
    return redirect("/home"); 
  } else {
    return { error: data?.login?.message || "Error desconocido" };
  }
}