import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-screen p-6 bg-slate-600">
      <div className="w-[36%] min-w-[600px]  min-h-[74%] bg-white mx-auto mt-[6%] rounded-xl px-3 py-[2rem]">
        <Link to={"/"}>
          <button className="text-xl font-semibold py-2 absolute">HOME</button>
        </Link>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
