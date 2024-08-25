import React from "react";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Nav from "../pages/Nav";
import Footer from "./Footer";

const AdminLayout = () => {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default AdminLayout;
