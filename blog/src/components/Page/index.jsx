import React from "react";
import "./index.css";
import routes from "../routes";
import { Outlet, useRoutes } from "react-router-dom";

export default function Page() {
  const element = useRoutes(routes)
  return (
    <div className="box">
      {element}
      <Outlet />
    </div>
  );
}
