import React from "react";
import ReactDOM from "react-dom/client";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { ENV } from "./constant";
import WalletAdapterProvider from "./providers/walletAdapter";

const queryClient = new QueryClient();

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <WalletAdapterProvider>
      <QueryClientProvider client={queryClient}>
        <Auth0Provider
          domain={ENV.VITE_AUTH_DOMAIN}
          clientId={ENV.VITE_AUTH_CLIENT_ID}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <RouterProvider router={router} />
        </Auth0Provider>
      </QueryClientProvider>
    </WalletAdapterProvider>
  </React.Fragment>,
);
