import React from 'react';
import * as ReactDOMClient from 'react-dom/client'; 
import './index.scss';
import App from '../src/Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
ReactDOMClient.createRoot(rootElement).render(<BrowserRouter>
  <App />
</BrowserRouter>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
