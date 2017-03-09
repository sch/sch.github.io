import React from "react";
import ReactDOM from "react-dom";
import loadTypekit from "typekit-shim";
import { AppContainer } from "react-hot-loader";

import App from "./App";

loadTypekit("zal0bho");

export function embed (node) {
  renderInto(node);

  if (module.hot) {
    module.hot.accept('./App', renderInto.bind(null, node));
  }
}

export {
  App as Component
}

function renderInto (node) {
  const root = (
    <AppContainer>
      <App />
    </AppContainer>
  );

  ReactDOM.render(root, node)
}
