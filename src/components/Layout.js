import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Layout;
