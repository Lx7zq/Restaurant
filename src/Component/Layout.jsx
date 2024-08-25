import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Nav from "./navbar";
import Footer from "./Footer";

const Layout = () => {
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

export default Layout;
