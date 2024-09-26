import { createFileRoute } from "@tanstack/react-router";
import Layout from "../components/Layout";
import IndexDashboard from "../pages/indexDashboard";


const Index = () => {
  return (
    <Layout>
       <IndexDashboard/>
    </Layout>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
