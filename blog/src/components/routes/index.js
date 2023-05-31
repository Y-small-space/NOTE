import HtmlPage from "../Page/Page-HTML";
import HomePage from "../Page/Page-home";
import CssPage from "../Page/Page-CSS";
import ReactPage from "../Page/Page-React";
import Es6Page from "../Page/Page-es6";
import JavascriptPage from "../Page/Page-javascript";
import NodePage from "../Page/Page-nodejs";
import PageAjax from "../Page/Page-AJAX";
import Detail from "../Page/Page-AJAX/detail";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/html",
    element: <HtmlPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/css",
    element: <CssPage />,
  },
  {
    path: "/react",
    element: <ReactPage />,
  },
  {
    path: "/es6",
    element: <Es6Page />,
  },
  {
    path: "/javascript",
    element: <JavascriptPage />,
  },
  {
    path: "/nodejs",
    element: <NodePage />,
  },
  {
    path: "/ajax",
    element: <PageAjax />,
    children: [
      {
        path: "detail",
        element: <Detail />,
      }
    ]
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
];

export default routes;
