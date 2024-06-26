import './Perfil.css'
import { Box, Grid, } from '@mui/material'
import React from 'react'
import BodyCards from './BodyCards'
import Bodyusuario from './Bodyusuario'
import BodyEspecificaciones from './BodyEspecificaciones'

function BodyPerfil({user}) {
  return (
    <>
        
        {/* <Box component='div' className='container_membrete' sx={{width:'100%',height:'100%'}}>
          <BodyMembretePerfil user={user}/>
        </Box> */}
        <Box component='div' className='container_detalle_perfil' sx={{display:'flex',mb:'0.5rem'}}>
          {/* <Box component='div' className='caja_detalle_perfil' sx={{width:'30%',mr:'1rem'}}> */}
          <Grid container spacing={2} sx={{width:'100%'}}>
                        
                                
                                    
            <Grid item xs={12} md={12} sm={6}>
                    
            <Bodyusuario user={user}/>             
                    
            </Grid>          
            <Grid item xs={12} md={12} sm={6}>
                    
              <BodyCards user={user}/>
              <BodyEspecificaciones user={user}/>
            </Grid>          
            {/* <Grid item xs={12} md={4}>
                    
            </Grid>           */}


          </Grid>
          {/* </Box> */}
          {/* <Box component='div' className='container_cards' sx={{width:'100%',pl:'1rem'}}>
            <BodyCards user={user}/>
            <Box component='div' className='container_cards' sx={{width:'100%',mt:'0.5rem'}}>
              <BodyEspecificaciones user={user}/>
            </Box>
          </Box> */}
        </Box>
    </>
  )
}

export default BodyPerfil