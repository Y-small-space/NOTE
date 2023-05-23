import { NavLink } from "react-router-dom";
import "./index.css";
import axios from "axios";

export default function Bar() {

  const contentajax = ()=>{
    axios.get('http://localhost:3000/api/notes')
      .then(response => {
        const data = response.data;
        // 处理从后端服务器获取的数据
        console.log(data); // 在控制台输出数据
        // 在页面上展示数据，可以使用 DOM 操作或 React 等前端框架
      })
      .catch(error => {
        console.error('Failed to fetch notes:', error);
        // 处理错误
      });
  }

  return (
    <div className="list-group">
      <NavLink className="list-item" activeClassName="active-link" to="/home">
        Home
      </NavLink>
      <NavLink className="list-item" activeClassName="active-link" to="/html">
        HTML
      </NavLink>
      <NavLink className="list-item" activeClassName="active-link" to="/css">
        CSS
      </NavLink>
      <NavLink className="list-item" activeClassName="active-link" to="/javascript">
        Javascript
      </NavLink>
      <NavLink className="list-item" activeClassName="active-link" to="/es6">
        ES6
      </NavLink>
      <NavLink className="list-item" activeClassName="active-link" to="/nodejs">
        Node.js
      </NavLink>
      <NavLink className="list-item" activeClassName="active-link" to="/react">
        React
      </NavLink>
      <NavLink className="list-item" activeClassName="active-link" to="/ajax" onClick={contentajax} >
        Ajax
      </NavLink>
    </div>
  );
}
