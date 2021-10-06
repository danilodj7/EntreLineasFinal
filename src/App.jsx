import AuthLayouth from 'layouts/AuthLayouth';
import PrivateLayout from 'layouts/PrivateLayout';
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
     <Switch> //*Swith maetro 
       <Route path={['/admin']}>
          <PrivateLayout>
            <Switch>
              <Route path='/admin'>
                <Admin/>
              </Route>
            </Switch>
          </PrivateLayout>
       </Route>
       <Route path={['/login','/registro']}>
         <AuthLayouth>
           <Switch>
              <Route path='/login'>
                <Login/>
              </Route>
              <Route path='/registro'>
                <Regristro/>
              </Route>
           </Switch>
         </AuthLayouth>
       </Route>
       <Route>
         <PublicLayout>
            <Switch>
              <Route path='/'>
                <Index />
              </Route>
            </Switch>
         </PublicLayout>
       </Route>
     </Switch>
    </Router>
  );
}

export default App;
