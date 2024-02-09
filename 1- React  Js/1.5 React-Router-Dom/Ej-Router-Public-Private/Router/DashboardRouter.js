import { Flex, Layout, List } from 'antd';
import React from 'react'
import NavBar from '../Components/NavBar';
import Sidebar from '../Components/Sidebar';
import { Content, Footer } from 'antd/es/layout/layout';
import { Route, Routes } from 'react-router-dom';
import Home from '../Containers/Home';
import Add from '../Containers/Add';
import Edit from '../Containers/Edit';
import Contador from '../Containers/Contador';

const DashboardRouter = () => {
    const contentStyle = {
      textAlign: "center",
      lineHeight: "120px",
      height: "100%",
      color: "#000",
      backgroundColor: "#E5E8E8 ",
    };

    const footerStyle = {
      textAlign: "center",
      color: "#fff",
      backgroundColor: "#4096ff",
    };

    const layoutStyle = {
      borderRadius: 8,
      overflow: "hidden",
      width: "100%",
    };
  return (
    <div>
      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          <Sidebar />
          <Layout>
            <NavBar />
            <Content style={contentStyle}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/list" element={<List />} />
                <Route path="/counter" element={<Contador />} />               
              
              </Routes>
            </Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Layout>
      </Flex>
    </div>
  );
}

export default DashboardRouter
