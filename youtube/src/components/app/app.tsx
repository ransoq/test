import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import MainPage from '../../pages/mainPage/mainPage';
import './app.css';

const App = () => {

  return (
    <main className="container">

      <Router>
        <div className="app">
          <Switch>
            <Route path='/' exact component={MainPage} />
          </Switch>
        </div>
      </Router>
    </main>
  );
}

export default App;
