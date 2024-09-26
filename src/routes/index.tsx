import { createFileRoute } from "@tanstack/react-router";

import Layout from "../components/Layout";


const Index = () => {
  return (
    <Layout>
      Welcome
    </Layout>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
