import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

export default () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const container = document.getElementById('app');

export const mount = (Component) => {
  ReactDom.render(<Component />, container);
};

export const unmount = () => {
  container && ReactDom.unmountComponentAtNode(container);
};
