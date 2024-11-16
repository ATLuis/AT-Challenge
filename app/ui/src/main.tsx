import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { grapqlClient } from "./graphql";

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={grapqlClient}>
    <NextUIProvider>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </NextUIProvider>
  </ApolloProvider>
);
