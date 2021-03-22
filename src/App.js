
import reducer from './reducer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Menu from "./Menu";
import Home from "./Home";
import Beans from "./Beans";
import Cart from "./Cart";

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>}
                    persistor={persistor}>
        <BrowserRouter>
            <Menu/>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/beans'>
                    <Beans/>
                </Route>
            </Switch>
            <Cart/>
        </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
