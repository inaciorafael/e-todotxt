import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store';

import Upcoming from './pages/Upcoming';
import All from './pages/All';
import Today from './pages/Today';

import { Header, Sidebar } from './components';

const { store, persistor } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <div className="d-flex flex-direction-row">
          <Router>
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Upcoming} />
              <Route exact path="/all" component={All} />
              <Route exact path="/today" component={Today} />
            </Switch>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}
