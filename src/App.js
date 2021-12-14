import PropertyItemForm from './PropertyItemForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Success from './pages/Success';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PropertyItemForm />
        </Route>
        <Route path='/success'>
          <Success />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
