import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store';
import GithubUsers from './GithubUsers';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
      <GithubUsers />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
