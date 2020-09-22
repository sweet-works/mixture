import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store, persistor } from './reducer'
import { PersistGate } from 'redux-persist/integration/react'
import App from './components/App'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
// serviceWorker.unregister();
