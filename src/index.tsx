import React from 'react';
import ReactDom from 'react-dom';

import App from './app';

export default  `
    <div>
       <h1>Hello world</h1>
    </div>
`;
const container = document.getElementById('app');
export const mount = (component: string) => {
    
    container.innerHTML = component;
};

export const unmount = () => {
    container.innerHTML = '';
};

