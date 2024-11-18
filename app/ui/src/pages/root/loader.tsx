import { LoaderFunctionArgs, redirect } from "react-router-dom";

export function rootLoader({ request: _ }: LoaderFunctionArgs) {
  // TODO: implement authentication
  const token = localStorage.getItem("token");
  const isAuthenticated =!!token;
  const pathname = new URL(_.url).pathname;
  console.log(pathname)
  const redirectTo = isAuthenticated ? "/home" : "/login";

  if (pathname === redirectTo) {
    return null;
  }

  return isAuthenticated ? null : redirect(redirectTo);
}
