import PublicLayout from 'layouts/PublicLayout';
import Admin from 'pages/Admin';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Regristro from 'pages/Regristro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/registro'>
          <Regristro/>
        </Route>
        <Route path='/admin'>
          <Admin/>
        </Route>
        <Route path='/'>
          <PublicLayout>
          <Index/>
          </PublicLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
