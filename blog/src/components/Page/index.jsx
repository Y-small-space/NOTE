import React from "react";
import { Route, Switch ,Redirect} from "react-router-dom";
import HtmlPage from "./Page-HTML";
import CssPage from "./Page-CSS";
import JavascriptPage from "./Page-javascript";
import Es6Page from "./Page-es6";
import NodePage from "./Page-nodejs";
import ReactPage from "./Page-React";
import HomePage from "./Page-home";
import './index.css'

export default function Page() {
  return (
    <div className="box">
      <Switch>
        <Route path="/html" component={HtmlPage} />
        <Route path="/css" component={CssPage} />
        <Route path="/react" component={ReactPage} />
        <Route path="/es6" component={Es6Page} />
        <Route path="/home" component={HomePage} />
        <Route path="/javascript" component={JavascriptPage} />
        <Route path="/nodejs" component={NodePage} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}
