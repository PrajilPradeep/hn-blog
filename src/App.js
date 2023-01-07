import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch path="/">
            <Home />
          </Switch>
          <Switch path="/create">
            <Create />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
