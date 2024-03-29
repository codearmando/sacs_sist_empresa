import { Routes,Route, useNavigate,} from 'react-router-dom'


import { Container } from '@mui/material';
import '../assets/Css/Fondo.css'
// ? -------------------------- CONTEXT--------------------------
import { useContext, useEffect } from 'react'
import { Contextdatos } from '../Context/ContextAutenticacion'
import { PageError404, PageHome, PageLoging, PagePerfilUser, PageRecaudosSolicitud, PageSolicitud, PageTableSolicitud, PageWebportal } from '../Page/Index';
import { ProtectedRouters } from './ProtectedRouters';
import BodyCambioContrasena from '../Components/FormLogin/BodyCambioContrasena';
import BodyCambioPreguntaSeguridad from '../Components/FormLogin/BodyCambioPreguntaSeguridad';


function Rutas() {



  const {userLogin, decryptData} = useContext(Contextdatos) //? CONTEXT HOOK userLogin
  const navigate = useNavigate();

  // const storedUser = JSON.parse(sessionStorage.getItem('user'));
  const storedUser = decryptData(sessionStorage.getItem('user'));
  // console.log('storedUser en rutas.jsx',storedUser)

  const logear = () =>{

    if(!storedUser?.usuario ){
      console.log('no hay data')
      return false;
    } 
    else{
      // console.log('userLogin DESDE RUTAS: ',userLogin)
      navigate('/Home');
      //return <Navigate to='/Almacen' replace />
      //return <NavLink to='/Almacen' />

    }
    
  }

  useEffect(() =>{
    logear()
  },[userLogin])

  


  return (
    
    <>
      
      {/* barra lateral   */}
      
      {/* <Sidebar />  */}
          
      <Container maxWidth='sl' sx={{mt:'1rem'}}>
        
        <Routes>
          <Route index element={<PageWebportal/>} /> {/* ruta principal al logearse */}
          <Route path='/Login' element={<PageLoging />} />
          <Route path='/Portarweb' element={<PageWebportal />} />


          {/* ruta para acceder solo si tiene usuario */}
          <Route element={< ProtectedRouters user={storedUser}/>}>
            <Route path='/Home' element={< PageHome user={storedUser}/>} />
            <Route path='/Solicitud' element={< PageSolicitud user={storedUser}/>} />
            <Route path='/Solicitudes' element={< PageTableSolicitud user={storedUser}/>} />
            <Route path='/Recaudos' element={< PageRecaudosSolicitud user={storedUser}/>} />
            <Route path='/Perfil' element={< PagePerfilUser user={storedUser}/>} />
            {/* <Route path='/Estadisticas' element={< PageEstadistica user={userLogin}/>} /> */}
          </Route>

          <Route path='/CambioPassword' element={< BodyCambioContrasena />} />
          <Route path='/PreguntaSeguridad' element={< BodyCambioPreguntaSeguridad />} />
          
          {/* <Route path='/Home' element={< PageHome user={userLogin}/>} /> */}
          {/* <Route path='/Home' element={< PageHome/>} /> */}
          

          {/* cuando la ruta no exite*/}
          <Route path='*' element={<PageError404/> } />
        </Routes>
        
      </Container>

    </>
    
  )
}

export default Rutas