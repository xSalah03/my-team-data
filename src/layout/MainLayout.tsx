import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Slider from "./Slider";

type Props = {};

export default function MainLayout({}: Props) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Slider />
      <Layout>
        <Header />
        <Layout
          style={{ justifyContent: "start", height: "100%", padding: "20px" }}
        >
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
}
