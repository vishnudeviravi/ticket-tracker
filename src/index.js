import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import ReduxProvider from './configureRedux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <ReduxProvider>
      <App />
    </ReduxProvider>,
 
  document.getElementById('root')
);


serviceWorker.unregister();
