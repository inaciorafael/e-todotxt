import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store';

import Upcoming from './pages/Upcoming';
import All from './pages/All';
import Today from './pages/Today';
import Done from './pages/Done';
import Search from './pages/Search';

import { Header, Sidebar, LoaderBackend } from './components';

const { store, persistor } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoaderBackend />
        <Router>
          <Redirect exact from="/today" to="today" />
          <Header />
          <div className="d-flex flex-direction-row">
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Upcoming} />
              <Route exact path="/all" component={All} />
              <Route exact path="/today" component={Today} />
              <Route exact path="/done" component={Done} />
              <Route exact path="/search" component={Search} />
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}
