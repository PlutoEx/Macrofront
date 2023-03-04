import React from "react";
import ReactDom from "react-dom";

import App from "./app";

export default () => <App />;

const container = document.getElementById("app");
export const mount = (Component) => {
  ReactDom.render(<Component />, document.getElementById("app"));
};

export const unmount = () => {
  ReactDom.unmountComponentAtNode(document.getElementById("app"));
};
