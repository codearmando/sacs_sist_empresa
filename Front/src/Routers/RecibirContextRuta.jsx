import { useContext, useEffect } from 'react'
import { Contextdatos } from '../Context/ContextAutenticacion'

function RecibirContextRuta() {

    const {userLogin} = useContext(Contextdatos) //? CONTEXT HOOK userLogin

  const logear = () =>{
    if(!userLogin || Object.keys(userLogin).length === 0){
      // console.log('no hay data', userLogin)
      return <Navigate to='/Login' />;
    }else{

      // console.log('userLogin DESDE RUTAS: ',userLogin)
      // localStorage.setItem('user',JSON.stringify(userLogin))
      // return <NavLink to='/Home' />
      return <Navigate to='/Home' />;
    }
    
  }

  useEffect(() =>{
    logear()
  },[userLogin])

  return (
    <>


    
    </>
  )
}

export default RecibirContextRuta