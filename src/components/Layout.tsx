import { HomeIcon } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footter";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="w-full p-6 bg-primary-normal">
          <div className="w-[36%] min-w-[600px] bg-white mx-auto mt-[6%] rounded-xl px-3 py-[2rem] mb-8">
            <Link to={"/"}>
              <HomeIcon className="w-8 h-8 ml-2 hover:text-primary-normal transition-colors" />
            </Link>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
