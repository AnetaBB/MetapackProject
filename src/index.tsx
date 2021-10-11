import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
