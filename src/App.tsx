import React from 'react';
import './App.css';
import configureStore from './store'
import { Provider } from 'react-redux'
import BookList from './components/BookList/BookList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookDetails from './components/BookDetails/BookDetails';
import ErrorBoundary from './common/ErrorBoundary';
import { PersistGate } from 'redux-persist/integration/react'
import OrdersList from './components/OrdersList/OrdersList';
import Cart from './components/Cart/Cart';
import NavBar from './components/Nav/Nav';
import TitleProvider from './common/TitleProvider';

type Props = {};

const App: React.FC<Props> = () => {

  const { store, persistor } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TitleProvider>
          <Router>
            <div className="app-container">
              <header className="header">
                <NavBar></NavBar>
              </header>
              <main className="main">
                <ErrorBoundary>
                  <Switch>
                    <Route exact path="/" component={BookList}></Route>
                    <Route exact path="/details/:book_id" component={BookDetails}></Route>
                    <Route exact path="/orders" component={OrdersList}></Route>
                    <Route exact path="/cart" component={Cart}></Route>
                  </Switch>
                </ErrorBoundary>
              </main>
            </div>
          </Router>
        </TitleProvider>
      </PersistGate>
    </Provider >
  );
}

export default App;
