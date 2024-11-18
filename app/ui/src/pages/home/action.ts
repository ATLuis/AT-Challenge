import { ActionFunctionArgs } from "react-router-dom";

export async function homeAction({ request }: ActionFunctionArgs) {
  // TODO: add agent referral data
  var rs =await request.formData()
  console.log("form submit",rs.values())
  return null;
}
