import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-screen p-6 bg-slate-600">
      <div className="w-[40%] min-w-[600px]  min-h-[74%] bg-white mx-auto mt-[10%] rounded-xl px-3 py-[1rem]">
        <Link to={"/"}>
          <button className="text-xl font-semibold">HOME</button>
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
