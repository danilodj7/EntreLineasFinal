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
import {DarkModeContext } from 'context/darkMode'
import { useEffect, useState } from 'react/cjs/react.development';
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  const [darkMode,setDarkMode] =useState(false)
  useEffect(()=>{
    console.log('Modo dark',darkMode)
  },[darkMode])
  return (
    <Auth0Provider
    domain="ventas-productoscar.us.auth0.com"
    clientId="aERvZLjUzLbmGLTwhJcc8YG35arE42tH"
    redirectUri={window.location.origin}
    >
    <div className='App'>
      <DarkModeContext.Provider value={{darkMode,setDarkMode}}> 
      <Router>  
     
     <Switch> 
     
       <Route path={['/admin','/admin/productos','/admin/clientes','/admin/perfil','/admin/usuarios','/admin/ventas']}>
          
          <PrivateLayout>
        
            <Switch> 
           
            <Route path='/admin/ventas'>
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
      </DarkModeContext.Provider>
    
    </div>
    </Auth0Provider>
  );
}

export default App;
