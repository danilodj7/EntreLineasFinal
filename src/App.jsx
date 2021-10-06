import AuthLayouth from 'layouts/AuthLayouth';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Clientes from 'pages/admin/Clientes';
import Admin from 'pages/admin/Index';
import Perfil from 'pages/admin/Perfil';
import Productos from 'pages/admin/Productos';
import Usuarios from 'pages/admin/Usuarios';
import Ventas from 'pages/admin/Ventas';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Regristro from 'pages/Regristro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css'


function App() {
  return (
    <Router>  //*--------------------------------Router maestro
     <Switch> //*--------------------------------Swith maetro 
       <Route path={['/admin','/admin/productos','/admin/clientes','/admin/perfil','/admin/usuarios','/admin/ventas']}>//*-----------Route con las listas
          <PrivateLayout>//*---------------------El Layout
            <Switch> //*--------------------------Switch Anidado
            <Route path='/admin/ventas'>//*-------la primera referencia de raiz 
                <Ventas/>
              </Route>
              <Route path='/admin/usuarios'>
                  <Usuarios/>
              </Route>
              <Route path='/admin/perfil'>
                  <Perfil/>
              </Route>
              <Route path='/admin/clientes'>
                <Clientes/>
              </Route>
              <Route path='/admin/productos' >
                  <Productos/>
              </Route>
              <Route path='/admin'>//*-----------La ultima fuente de raizes el general 
                <Admin/>
              </Route>
            </Switch>//*-------------------------Cerro el swith Anidado
          </PrivateLayout>//*-------------------------Cerro el Layout
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
