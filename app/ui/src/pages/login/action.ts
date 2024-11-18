import { ActionFunctionArgs, redirect } from "react-router-dom";
import svc  from '../../controllers/status-controller'

export async function loginAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get("username") as string; // Type assertion
  const password = formData.get("password") as string; // Type assertion

  // Validate the form data (optional)
  if (!username || !password) {
    return { error: "Please provide both a username and password." };
  }

  // TODO: Implement login
  var rs = await svc.loginGql(username,password)
  console.log("login payload",rs)
  if(rs == null){
    return { error: "Invalid creds." };

  }
  // Save the token and user data (e.g., in localStorage)
  localStorage.setItem("authToken", rs.token);
  localStorage.setItem("userId",rs.data.id);
  localStorage.setItem("dataToken", JSON.stringify(rs.data));
  return redirect('/home');
}
