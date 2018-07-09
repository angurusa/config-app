import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <App>
    <CssBaseline />
  </App>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
