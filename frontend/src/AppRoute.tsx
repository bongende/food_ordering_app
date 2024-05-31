import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>HOME PAGE</Layout>} />
      <Route path="/user-profile" element={<span>User profile page</span>} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoute;