import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store , persistor} from './reduxStore/store.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={"loading"} persistor={persistor}>
    <App/>
    </PersistGate>
    </Provider>
)


