import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
const container = document.getElementById('app');
// const root = createRoot(container); 
// root.render(
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
