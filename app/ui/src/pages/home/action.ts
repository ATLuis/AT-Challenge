import { ActionFunctionArgs, redirect } from "react-router-dom";

export async function homeAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const phone = formData.get("phone") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const response = await fetch("http://localhost:5000/api/agents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      phone,
      username,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create agent");
  }

  return redirect("/home");
}
