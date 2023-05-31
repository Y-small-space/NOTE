import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import "./index.css";

function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/notes")
      .then((response) => {
        const data = response.data.chapters;
        console.log(data)
        setData(data);
      })
      .catch((error) => {
        console.error("Failed to fetch notes:", error);
      });
  }, []);

  return (
    <div className="ajaxbar">
      <ul>
        {
        data.map((m) => {
          return (
            <li key={m.id}>
              <Link className="link" to={'detail'} state={{id:m.id,title:m.title,contents:m.contents}}>{m.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function PageAjax() {
  return (
    <div className="page">
      <div className="page-head">
        <h1>AJAX笔记</h1>
      </div>
      <hr />
      <Content />
      <Outlet />
    </div>
  );
}
