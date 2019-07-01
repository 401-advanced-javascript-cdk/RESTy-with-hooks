import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

import * as serviceWorker from './serviceWorker';

const Main = props => {
  return(
      <App />
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();