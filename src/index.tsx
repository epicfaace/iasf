import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import FormPage from './FormPage';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <FormPage />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
