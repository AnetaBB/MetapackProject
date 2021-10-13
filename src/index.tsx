/* eslint-disable @typescript-eslint/no-unused-vars */
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store';
import GithubUsers from './GithubUsers';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import UseEffectAPI from './components/UsersListPage/UseEffectAPI';
const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/GithubUsers' component={GithubUsers}></Route>
    </Provider>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
