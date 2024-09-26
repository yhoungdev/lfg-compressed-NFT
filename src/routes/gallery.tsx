import { createFileRoute } from "@tanstack/react-router";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";

export const Route = createFileRoute("/gallery")({
  component: () => (
    <Layout>
      <Gallery />
    </Layout>
  ),
});
