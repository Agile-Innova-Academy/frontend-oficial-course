import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../Containers/Home";
import Add from "../Containers/Add";
import Edit from "../Containers/Edit";
import List from "../Containers/List";
import NavBar from "../Components/NavBar";
import { Flex, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sidebar from "../Components/Sidebar";


const contentStyle = {
  textAlign: "center",
  // minHeight: 120,
  lineHeight: "120px",
  height: "100%",
  color: "#fff",
  // backgroundColor: "#0958d9",
};

// const footerStyle = {
//   textAlign: "center",
//   color: "#fff",
//   backgroundColor: "#4096ff",
// };

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
  // maxWidth: "calc(50% - 8px)",
};

function App() {
  return (
    <BrowserRouter>
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
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Content>
            {/* <Footer style={footerStyle}>Footer</Footer> */}
          </Layout>
        </Layout>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
