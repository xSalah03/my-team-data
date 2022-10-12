import { Layout } from "antd";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const { Header } = Layout;

  return (
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      />
    </Layout>
  );
};

export default Header;
