import { LoaderFunctionArgs, redirect } from "react-router-dom";

export function rootLoader({ request: _ }: LoaderFunctionArgs) {
  // TODO: implement authentication
  const authToken = localStorage.getItem("dataToken");
  if(authToken==null)return null;
  //check expiration
  let tokenData = JSON.parse(authToken)
  let isAuthenticated=  tokenData.exp* 1000 > Date.now(); // JWT expiration check

  const pathname = new URL(_.url).pathname;
  const redirectTo = isAuthenticated ? "/home" : "/login";

  if (pathname === redirectTo) {
    return null;
  }

  return isAuthenticated ? null : redirect(redirectTo);
}
