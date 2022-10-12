import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { SliderList } from "../interface/Utils";
import { items } from "../utils/ConstData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  // Mounting
  // Updating
  // Unmounting
  // LifeCycle of react 
  const getPageIndex = ()=>{
    let index = items.findIndex(e => e.href == location.pathname.replace("/","")) + 1;
    if(index > 0){
      return `${index}`;
    }
    return "1";
  }

  
  return (
    <Sider
      collapsed={collapsed}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      style={{
        overflowY: "auto",
        overflowX: "hidden",
        position: "sticky",
        height: "100vh",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <img
        className="logo"
        src="https://www.myteam.ma/wp-content/uploads/2020/10/logo-myteam-1.png"
      />
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={[getPageIndex()]}
        items={items.map((e: SliderList) => ({
          key: e.key,
          
          icon: <FontAwesomeIcon icon={e.icon}></FontAwesomeIcon>,
          label: <Link to={e.href}>{e.label}</Link>,
        }))}
      />
    </Sider>
  );
};

export default App;
