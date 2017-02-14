import React from "react";
import ReactDOM from "react-dom";
import loadTypekit from "typekit-shim";
import { AppContainer } from "react-hot-loader";

import App from "./App";

loadTypekit("zal0bho");

render(App);

if (module.hot) {
  module.hot.accept('./App', render.bind(null, App));
}

function render(RootComponent) {
  const root = (
    <AppContainer>
      <RootComponent />
    </AppContainer>
  );

  ReactDOM.render(root, document.getElementById("root"));
}
