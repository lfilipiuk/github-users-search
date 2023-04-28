import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserDetails from "./components/user/UserDetails/UserDetails";
import Layout from "./components/ui/Layout";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/user/:login",
    element: (
      <Layout>
        <UserDetails />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
