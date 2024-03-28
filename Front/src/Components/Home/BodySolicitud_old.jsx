import { useNavigate,} from 'react-router-dom'
import { Box, Button, TextField, Collapse,Select,InputLabel, MenuItem, Alert, Stack, 
        Autocomplete, Grid, Typography, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl, IconButton, Fab  } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AxiosGet,AxiosPost, AxiosPostSolicitud } from '../../Helpers/FetchAxios/FetchAxios'
import axios from 'axios'
import Swal from 'sweetalert2'
// notificaciones
import { ToastContainer, toast } from 'react-toastify';

import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import '../../assets/Css/FormStep.css'

import { nextformstep,beforeformstep } from '../../assets/JS/FormStep'
import '../../assets/Css/EstructuraForm.css'
import './viewhome.css'
// helpers
import PadStartCiudadano from '../../Helpers/Ciudadano/PadStartCiudadano'
import { convertLength } from '@mui/material/styles/cssUtils'

// import '../assets/Css/NavLink.css'
const styleCampos ={
    width:'100%',

}
const styleFormCiudadano ={
    display:'flex',
    alignItems:'center',
    justifyContent:'center'

}

 // ---------usuairo en localstorage:

//  let obtenerlocalstorage = localStorage.getItem('user')
//  let usarioempresa = JSON.parse(obtenerlocalstorage)
//  console.log('usarioempresa:', usarioempresa.pk_empresa)
//  -------------------------------------



function BodySolicitud({user}) {
  // redirir a pagina una vez enviado el formulairo. Defino la ruta en Formulario Formas Product
  const navigate = useNavigate();

  // collapse event
  const [CollapseCatgoria, setCollapseCatgoria] = useState(false);
  const [CollapseCatgoria2, setCollapseCatgoria2] = useState(false);
  const [CollapseOperaciones, setCollapseOperaciones] = useState(false);
  const [CollapseOperaciones2, setCollapseOperaciones2] = useState(false);
  const [CollapseProductos, setCollapseProductos] = useState(false);
  const [CollapseProductos2, setCollapseProductos2] = useState(false);
  const [CollapseEstablecimiento, setCollapseEstablecimiento] = useState(false);
  const [CollapseclouseEstablecimiento, setCollapseclouseEstablecimiento] = useState(false);
  const [CollapseEstablecimiento2, setCollapseEstablecimiento2] = useState(false);
  const [CollapseclouseEstablecimiento2, setCollapseclouseEstablecimiento2] = useState(false);
  const [CollapsePresentProductImport, setCollapsePresentProductImport] = useState(false);
  const [CollapseForma, setCollapseForma] = useState(false);
  const [CollapseForma2, setCollapseForma2] = useState(false);
  

  // ------------Establecimiento nr1--------------------

  const [selectEstablecimiento,setSelectEstablecimiento] = useState([])
  const [selectDominio,setSelectDominio] = useState([])
  const [selectEstatus,setSelectEstatus] = useState([])
  const [selectEstadoEstablecimiento,setSelectEstadoEstablecimiento] = useState([])
  const [selectMunicipioEstablecimiento,setSelectMunicipioEstablecimiento] = useState([])
  const [selectParroquiaEstablecimiento,setSelectParroquiaEstablecimiento] = useState([])
  const [direccionEstablecimiento, setEDireccionEstablecimiento] = useState("");
  const [tlfFirstEstablecimiento, setTlfFirstEstablecimiento] = useState("");
  const [tlfSecondEstablecimiento, setTlfSecondEstablecimiento] = useState("");
  const [emailFirstEstablecimiento, setEmailFirstEstablecimiento] = useState("");
  const [emailsecondEstablecimiento, setemailsecondEstablecimiento] = useState("");
  const [observacionEstablecimiento, setObservacionEstablecimiento] = useState("");
  const [ZonaEstablecimiento , setZonaEstablecimiento] = useState("")
  const [RutasEstablecimiento , setRutasEstablecimiento] = useState("")
  const [EspacioEstablecimiento , setEspacioEstablecimiento] = useState("")
  const [NivelEstablecimiento , setNivelEstablecimiento] = useState("")
  const [ReferenciaEstablecimiento , setReferenciaEstablecimiento] = useState("")
  const [CodigoPostalEstablecimiento , setCodigoPostalEstablecimiento] = useState("")
  const [MetrosCuadradosEstablecimiento , setMetrosCuadradosEstablecimiento] = useState("")
  // ------------Establecimiento nr2--------------------

  const [selectEstablecimiento2,setSelectEstablecimiento2] = useState([])
  const [selectDominio2,setSelectDominio2] = useState([])
  const [selectEstatus2,setSelectEstatus2] = useState([])
  const [selectEstadoEstablecimiento2,setSelectEstadoEstablecimiento2] = useState([])
  const [selectMunicipioEstablecimiento2,setSelectMunicipioEstablecimiento2] = useState([])
  const [selectParroquiaEstablecimiento2,setSelectParroquiaEstablecimiento2] = useState([])
  const [direccionEstablecimiento2, setEDireccionEstablecimiento2] = useState("");
  const [tlfFirstEstablecimiento2, setTlfFirstEstablecimiento2] = useState("");
  const [tlfSecondEstablecimiento2, setTlfSecondEstablecimiento2] = useState("");
  const [emailFirstEstablecimiento2, setEmailFirstEstablecimiento2] = useState("");
  const [emailsecondEstablecimiento2, setemailsecondEstablecimiento2] = useState("");
  const [observacionEstablecimiento2, setObservacionEstablecimiento2] = useState("");
  const [ZonaEstablecimiento2 , setZonaEstablecimiento2] = useState("")
  const [RutasEstablecimiento2 , setRutasEstablecimiento2] = useState("")
  const [EspacioEstablecimiento2 , setEspacioEstablecimiento2] = useState("")
  const [NivelEstablecimiento2 , setNivelEstablecimiento2] = useState("")
  const [ReferenciaEstablecimiento2 , setReferenciaEstablecimiento2] = useState("")
  const [CodigoPostalEstablecimiento2 , setCodigoPostalEstablecimiento2] = useState("")
  const [MetrosCuadradosEstablecimiento2 , setMetrosCuadradosEstablecimiento2] = useState("")
  // ------------Establecimiento nr3--------------------

  const [selectEstablecimiento3,setSelectEstablecimiento3] = useState([])
  const [selectDominio3,setSelectDominio3] = useState([])
  const [selectEstatus3,setSelectEstatus3] = useState([])
  const [selectEstadoEstablecimiento3,setSelectEstadoEstablecimiento3] = useState([])
  const [selectMunicipioEstablecimiento3,setSelectMunicipioEstablecimiento3] = useState([])
  const [selectParroquiaEstablecimiento3,setSelectParroquiaEstablecimiento3] = useState([])
  const [direccionEstablecimiento3, setEDireccionEstablecimiento3] = useState("");
  const [tlfFirstEstablecimiento3, setTlfFirstEstablecimiento3] = useState("");
  const [tlfSecondEstablecimiento3, setTlfSecondEstablecimiento3] = useState("");
  const [emailFirstEstablecimiento3, setEmailFirstEstablecimiento3] = useState("");
  const [emailsecondEstablecimiento3, setemailsecondEstablecimiento3] = useState("");
  const [observacionEstablecimiento3, setObservacionEstablecimiento3] = useState("");
  const [ZonaEstablecimiento3 , setZonaEstablecimiento3] = useState("")
  const [RutasEstablecimiento3 , setRutasEstablecimiento3] = useState("")
  const [EspacioEstablecimiento3 , setEspacioEstablecimiento3] = useState("")
  const [NivelEstablecimiento3 , setNivelEstablecimiento3] = useState("")
  const [ReferenciaEstablecimiento3 , setReferenciaEstablecimiento3] = useState("")
  const [CodigoPostalEstablecimiento3 , setCodigoPostalEstablecimiento3] = useState("")
  const [MetrosCuadradosEstablecimiento3 , setMetrosCuadradosEstablecimiento3] = useState("")
  // productos importados 
  const [NombreProductoimportado , setNombreProductoimportado] = useState("")
  const [PresentacionProductoimportado , setPresentacionProductoimportado] = useState("")
  const [registroSanitarioProductImport , setregistroSanitarioProductImport] = useState("")
  const [LaboratorioFabricanteproductimport , setLaboratorioFabricanteproductimport] = useState("")
  const [PaisProcedenteProductImport , setPaisProcedenteProductImport] = useState("")
  const [NacpropietarioProductImport , setNacpropietarioProductImport] = useState("")
  const [propietarioProductImport , setpropietarioProductImport] = useState("")
  const [FarmaceuticoProductImport , setFarmaceuticoProductImport] = useState("")
  const [NombrePropietairoProductImport , setNombrePropietairoProductImport] = useState("")
  const [ApellidoPropietairoProductImport , setApellidoPropietairoProductImport] = useState("")
  const [OtraPresentacionProductImport , setOtraPresentacionProductImport] = useState("")

  // --------------------------------------------------------------------------

   // hook ubicaicon general 
   const [lisEstado,setLisEstado] = useState([])
   const [lisMunicipio,setLisMunicipio] = useState([])
   const [lisParroquia,setLisParroquia] = useState([])
  // primer establecimiento
   const [listMunicipioEstadoEstablecimiento,setListMunicipioEstadoEstablecimiento] = useState([])
   const [listParroquiaMunicipioEstablecimiento,setListParroquiaMunicipioEstablecimiento] = useState([])
  // segundo establecimiento
   const [listMunicipioEstadoEstablecimiento2,setListMunicipioEstadoEstablecimiento2] = useState([])
   const [listParroquiaMunicipioEstablecimiento2,setListParroquiaMunicipioEstablecimiento2] = useState([])
  // tercer establecimiento
   const [listMunicipioEstadoEstablecimiento3,setListMunicipioEstadoEstablecimiento3] = useState([])
   const [listParroquiaMunicipioEstablecimiento3,setListParroquiaMunicipioEstablecimiento3] = useState([])

  // -----------------------------

  // tipo de solicitud
  const [listTipSolicitud,setListTipSolicitud] = useState([]);
  const [listnombreSolicitud,setListnombreSolicitud] = useState([]);
  const [listAreasEmpresa,setListAreasEmpresa] = useState([])
  const [listActividadEmpresa,setListActividadEmpresa] = useState([])
  const [lisCategoriaEmpresa,setLisCategoriaEmpresa] = useState([])
  const [lisOperaiconesEmpresa,setLisOperaiconesEmpresa] = useState([])
  const [lisProductosEmpresa,setLisProductosEmpresa] = useState([])
  const [lisPresentaiconProductImportadosEmpresa,setLisPresentaiconProductImportadosEmpresa] = useState([])
  const [lisPaisesProductosimportadosEmpresa,setLisPaisesProductosimportadosEmpresa] = useState([])
  const [diseabledTipSolicitud,setDiseabledTipSolicitud] = useState(true)
  // establecimiento
  const [listEstablecimiento, setListEstablecimiento] = useState([]);
  const [listSolicitudEstablecimiento, setListSolicitudEstablecimiento] = useState([]);
  const [listDominio, setListDominio] = useState([]);
  const [listEstatus, setListEstatus] = useState([]);
  // formas producto
  const [listFormasProduct, setListFormasProduct] = useState([]);

  // select solicitud
  const [selectTipSolicitud, setSelectTipSolicitud] = useState([]);
  const [selectNombreSolicitud, setSelectNombreSolicitud] = useState([]);
  // select area y actividad de empresa
  const [selectAreaEmpresa, setSelectAreaEmpresa] = useState([]);
  const [selectActivEmpresa, setSelectActivEmpresa] = useState([]);
  // select categoria segun la actividad de empresa
  const [selectCategoriaEmpresa, setSelectCategoriaEmpresa] = useState([]);
  // select operaicon segun la categoria de empresa
  const [selecOperaiconEmpresa, setSelecOperaiconEmpresa] = useState([]);
  // select productos segun la actividad de empresa
  const [selectProductosEmpresa, setSelectProductosEmpresa] = useState([]);
  // select productos formas de productos
  const [selectFormasProductosEmpresa, setSelectFormasProductosEmpresa] = useState([]);

  // select de varias operaicones:
  const [inputsdomOperaciones, setInputsDomOperaciones] = useState([]);
  const [disabledSubmitoperaciones, setDisabledSubmitoperaciones] = useState(true); //desabilitar bton register producto
  // select de varias productos:
  const [inputsdomProductos, setInputsDomProductos] = useState([]);
  const [disabledSubmitProductos, setDisabledSubmitProductos] = useState(true); //desabilitar bton register producto
  // ------------------------
  // select de varias formas del productos:
  const [inputsdomFormasProduct, setInputsDomFormasProduct] = useState([]);
  const [disabledSubmitFormasProduct, setDisabledSubmitFormasProduct] = useState(true); //desabilitar bton register producto
  // ingreso de varios productos importados:
  const [inputsdomProductImportados, setInputsDomProductImportados] = useState([]);
  const [disabledSubmitProductImportados, setDisabledSubmitProductImportados] = useState(true); //desabilitar bton register producto
  // ------------------------
  // -----------FILTRADO PARA LA SOLICITUD-------------
  // ----------------------------------------
  // filtrado segun el tipo de solicitud
  const [FilterlistnombreSolicitud, setFilterListnombreSolicitud] = useState([]);
  // filtrado de actividad sugun el area
  const [FilterlistActivEmpresa, setFilterListActivEmpresa] = useState([]);
  // filtrado de categoria sugun el area
  const [FilterlistCategoriaEmpresa, setFilterListCategoriaEmpresa] = useState([]);
  // filtrado de operaciones sugun la categoria
  const [FilterlistOperacionesEmpresa, setFilterListOperacionesEmpresa] = useState([]);
  // filtrado de productos sugun la actividad
  const [FilterlistProductosEmpresa, setFilterListProductosEmpresa] = useState([]);
  // filtrado de establecimiento sugun el tipo de solicitud
  const [FilterlistSolicitudEstablecimiento, setFilterListSolicitudEstablecimiento] = useState([]);
  // filtrado de formas sugun el area de la empresa
  const [FilterlistFormaProductArea, setFilterListFormaProdAreauct] = useState([]);

  
   //   ----------------------------------------------
   // ------------------LIST ESTADO-MUNICIPIO - PARROQUIA---------------


   const ListEstado = () =>{
    const url =`${servidor}Ciudadanos/ListEstado/Table`
    AxiosGet(url,setLisEstado)
  }
  const ListMunicipio = () =>{
      const url =`${servidor}Ciudadanos/ListMunicipio/Table`
      AxiosGet(url,setLisMunicipio)
  }
  const ListParroquia = () =>{
      const url =`${servidor}Ciudadanos/ListParroquia/Table`
      AxiosGet(url,setLisParroquia)
  }

  useEffect(() =>{
      ListEstado()
      ListMunicipio()
      ListParroquia()

  },[])

  // municipio-parroquia de los establecimientos segun su estado y municipio
  const municipioestadoEmpresaEstablecimiento = () => {
    setListMunicipioEstadoEstablecimiento(lisMunicipio.filter((item) => item.fk_estado == selectEstadoEstablecimiento.pk_estado))
  }
  const parroquiamunicipioEmpresaEstablecimiento = () => {
      setListParroquiaMunicipioEstablecimiento(lisParroquia.filter((item) => item.fk_municipio == selectMunicipioEstablecimiento.pk_municipio))
  }
  const municipioestadoEmpresaEstablecimiento2 = () => {
    setListMunicipioEstadoEstablecimiento2(lisMunicipio.filter((item) => item.fk_estado == selectEstadoEstablecimiento2.pk_estado))
  }
  const parroquiamunicipioEmpresaEstablecimiento2 = () => {
      setListParroquiaMunicipioEstablecimiento2(lisParroquia.filter((item) => item.fk_municipio == selectMunicipioEstablecimiento2.pk_municipio))
  }
  const municipioestadoEmpresaEstablecimiento3 = () => {
    setListMunicipioEstadoEstablecimiento3(lisMunicipio.filter((item) => item.fk_estado == selectEstadoEstablecimiento3.pk_estado))
  }
  const parroquiamunicipioEmpresaEstablecimiento3 = () => {
      setListParroquiaMunicipioEstablecimiento3(lisParroquia.filter((item) => item.fk_municipio == selectMunicipioEstablecimiento3.pk_municipio))
  }


  useEffect(() =>{
    municipioestadoEmpresaEstablecimiento()
  },[selectEstadoEstablecimiento])
  useEffect(() =>{
    parroquiamunicipioEmpresaEstablecimiento()
  },[selectMunicipioEstablecimiento])
  useEffect(() =>{
    municipioestadoEmpresaEstablecimiento2()
  },[selectEstadoEstablecimiento2])
  useEffect(() =>{
    parroquiamunicipioEmpresaEstablecimiento2()
  },[selectMunicipioEstablecimiento2])
  useEffect(() =>{
    municipioestadoEmpresaEstablecimiento3()
  },[selectEstadoEstablecimiento3])
  useEffect(() =>{
    parroquiamunicipioEmpresaEstablecimiento3()
  },[selectMunicipioEstablecimiento3])

  // ------------------vaciar campos de ubicaicon 

   // vaciar estado municipio y parroquia de establecimientos
   const vaciarmunicipio_empresestablecimiento = document.getElementById('municipio_empresa_establecimiento')
   const vaciarparroquia_empresaestablecimiento = document.getElementById('parroquia_empresa_establecimiento')
   const vaciarmunicipio_empresestablecimiento2 = document.getElementById('municipio_empresa_establecimiento2')
   const vaciarparroquia_empresaestablecimiento2 = document.getElementById('parroquia_empresa_establecimiento2')
   const vaciarmunicipio_empresestablecimiento3 = document.getElementById('municipio_empresa_establecimiento3')
   const vaciarparroquia_empresaestablecimiento3 = document.getElementById('parroquia_empresa_establecimiento3')


   // vaciar campos estado municipio y parroquia de establecimineto
   const vaciar_municipio_empresa_establecimineto = () =>{
       // campos a vaciar 
       vaciarmunicipio_empresestablecimiento.value = null
       // Disparar el evento de cambio en el campo Autocomplete
       const event = new Event('change', { bubbles: true });
       vaciarmunicipio_empresestablecimiento.dispatchEvent(event);
       
     }
     const vaciar_parroquia_empresa_establecimiento = () =>{
       // campos a vaciar 
       vaciarparroquia_empresaestablecimiento.value = null
       // Disparar el evento de cambio en el campo Autocomplete
       const event = new Event('change', { bubbles: true });
       vaciarparroquia_empresaestablecimiento.dispatchEvent(event);
       
     }
   // vaciar campos estado municipio y parroquia de establecimineto2
   const vaciar_municipio_empresa_establecimineto2 = () =>{
       // campos a vaciar 
       vaciarmunicipio_empresestablecimiento2.value = null
       // Disparar el evento de cambio en el campo Autocomplete
       const event = new Event('change', { bubbles: true });
       vaciarmunicipio_empresestablecimiento2.dispatchEvent(event);
       
     }
     const vaciar_parroquia_empresa_establecimiento2 = () =>{
       // campos a vaciar 
       vaciarparroquia_empresaestablecimiento2.value = null
       // Disparar el evento de cambio en el campo Autocomplete
       const event = new Event('change', { bubbles: true });
       vaciarparroquia_empresaestablecimiento2.dispatchEvent(event);
       
     }
   // vaciar campos estado municipio y parroquia de establecimineto3
   const vaciar_municipio_empresa_establecimineto3 = () =>{
       // campos a vaciar 
       vaciarmunicipio_empresestablecimiento3.value = null
       // Disparar el evento de cambio en el campo Autocomplete
       const event = new Event('change', { bubbles: true });
       vaciarmunicipio_empresestablecimiento3.dispatchEvent(event);
       
     }
     const vaciar_parroquia_empresa_establecimiento3 = () =>{
       // campos a vaciar 
       vaciarparroquia_empresaestablecimiento3.value = null
       // Disparar el evento de cambio en el campo Autocomplete
       const event = new Event('change', { bubbles: true });
       vaciarparroquia_empresaestablecimiento3.dispatchEvent(event);
       
     }

   

    //  useEffect(() =>{
    //    municipioestadoEmpresaEstablecimiento()
    //  },[selectEstadoEstablecimiento])


  // ----------------------------------------------
   // ------------------SOLICITUD----------------------------

  const List_TipSolicitud=  () => {
    const url = `${servidor}Empresa/ListTipoSolicitud/Table`;
    AxiosGet(url,setListTipSolicitud)
 };
  const List_NombreSolicitud=  () => {
    const url = `${servidor}Empresa/ListNombreSolicitud/Table`;
    AxiosGet(url,setListnombreSolicitud)
  };

  // area y actividad de la empresa
  const ListAreaEmpresa = () =>{
    const url =`${servidor}Empresa/ListAreasEmpresa/Table`
    AxiosGet(url,setListAreasEmpresa)
  }
  const ListActivAreaEmpresa = () =>{
    const url =`${servidor}Empresa/ListActivArea/Table`
    AxiosGet(url,setListActividadEmpresa)
  }
  // LISTA DE CATEGORIA DE EMPRESA
  const ListActivCategoriaEmpresa = () =>{
    const url =`${servidor}Empresa/ListActivCategoria/Table`
    AxiosGet(url,setLisCategoriaEmpresa)
  }
  // LISTA DE OPERACIONES DE EMPRESA
  const ListActivoperacionesEmpresa = () =>{
    const url =`${servidor}Empresa/ListOperacionesActiv/Table`
    AxiosGet(url,setLisOperaiconesEmpresa)
  }
  
  // LISTA DE PRODUCTOS DE EMPRESA
  const ListActivproductosEmpresa = () =>{
    const url =`${servidor}Empresa/ListActivProductos/Table`
    AxiosGet(url,setLisProductosEmpresa)
  }
  
  

  // ESTABLECIMIENTO

  const List_Establecimientos=  () => {
    const url = `${servidor}Empresa/ListTipEstablecimiento/Table`;
    AxiosGet(url,setListEstablecimiento)
  };
  const List_Solicitud_Establecimientos=  () => {
    const url = `${servidor}Empresa/ListSolicitudEstablecimiento/Table`;
    AxiosGet(url,setListSolicitudEstablecimiento)
  };
  const List_Dominio=  () => {
      const url = `${servidor}Empresa/ListTipoDominio/Table`;
      AxiosGet(url,setListDominio)
  };
  const List_Estatus=  () => {
      const url = `${servidor}Empresa/ListEstatus/Table`;
      AxiosGet(url,setListEstatus)
  };

  // FORMAS PRODUCTOS
  const List_FormasProduct=  () => {
      const url = `${servidor}Empresa/ListFormasProduct/Table`;
      AxiosGet(url,setListFormasProduct)
  };
  // LISTA DE PRESENTACION PRODUCTOS IMPORTADOS 
  const ListPresentacionproductosImportadosEmpresa = () =>{
    const url =`${servidor}Empresa/ListPresentacionProductImport/Table`
    AxiosGet(url,setLisPresentaiconProductImportadosEmpresa)
  }
  // LISTA DE PAISES PRODUCTOS IMPORTADOS 
  const ListPaisesproductosImportadosEmpresa = () =>{
    const url =`${servidor}Paises/Paises/Table`
    AxiosGet(url,setLisPaisesProductosimportadosEmpresa)
  }
  

  useEffect(() => {
    List_TipSolicitud();
  }, []);
  useEffect(() => {
      List_NombreSolicitud();
  }, []);
  // area y actividad de la empresa 
  useEffect(() =>{
    ListAreaEmpresa()
    ListActivAreaEmpresa()
    ListActivCategoriaEmpresa()
    ListActivoperacionesEmpresa()
    ListActivproductosEmpresa()
  },[])
  // LISTADO DE DATA PARA ESTABLECIMIENTO
  useEffect(() =>{
    List_Establecimientos()
    List_Dominio()
    List_Estatus()
    List_FormasProduct()
    List_Solicitud_Establecimientos()
    ListPresentacionproductosImportadosEmpresa()
    ListPaisesproductosImportadosEmpresa()
  },[])

  
  const List_FilterNombreSolicitud=  () => {
    setFilterListnombreSolicitud(listnombreSolicitud.filter((item) => item.fk_tipo_solicitud == selectTipSolicitud.pk_tipo_solicitud))
  };
  // FILTRAR ESTABLECIMIENTO SEGUN NOMBRE DE LA SOLICITUD
  const List_FilternombreSolicitud_Establecimiento=  () => {
    setFilterListSolicitudEstablecimiento(listSolicitudEstablecimiento.filter((item) => item.fk_nombre_solicitud == selectNombreSolicitud.pk_nombre_solicitud))
  };
  // FILTRAR ACTIVIDAD SEGUN SU AREA 
  const List_FilterActivEmpresa=  () => {
    setFilterListActivEmpresa(listActividadEmpresa.filter((item) => item.fk_area == selectAreaEmpresa.pk_area))
    console.log('actividad del area: ',listActividadEmpresa.filter((item) => item.fk_area == selectAreaEmpresa.pk_area))
  };

  useEffect(() => {
    List_FilterNombreSolicitud();
  }, [selectTipSolicitud]);
  useEffect(() => {
    List_FilternombreSolicitud_Establecimiento();
  }, [selectNombreSolicitud]);

  useEffect(() => {
    List_FilterActivEmpresa();
  }, [selectAreaEmpresa]);

  // FILTRAR CATEGORIA SEGUN SI ESA ACTIVIDAD TIENE CATEGORIA
  const List_FilterCategoriaEmpresa=  () => {
    let filter_categorias = lisCategoriaEmpresa.filter((item) => item.pk_activ_economic == selectActivEmpresa.fk_activ_economic)
    if (filter_categorias.length > 0) {
      // setCollapseProductos(false)
      // setCollapseProductos2(true)
      setCollapseCatgoria2(false)
      setCollapseCatgoria(true)
      setFilterListCategoriaEmpresa(filter_categorias)
      
    }else{
      // filtrar productos segun la actividad economica 
      // let filter_productos = 
      setCollapseCatgoria2(true)
      // setCollapseProductos(true)
      setCollapseCatgoria(false)
    }
  };
  // FILTRAR OPERACIONES SEGUN SI HAY CATEGORIA
  const List_FilterOperaiconesEmpresa=  () => {
    let filter_operaicones = lisOperaiconesEmpresa.filter((item) => item.fk_activ_area == selectActivEmpresa.pk_activ_area && 
                                                           item.fk_activ_economic == selectActivEmpresa.fk_activ_economic)
    if (filter_operaicones.length > 0) {
      console.log('filter_operaicones segun la actividad: ',filter_operaicones)
      // setInputsDomOperaciones([])
      setCollapseOperaciones(true)
      setCollapseOperaciones2(false)
      setFilterListOperacionesEmpresa(filter_operaicones)
      
    }else{
      // filtrar productos segun la actividad economica 
      // let filter_productos = 
      setInputsDomOperaciones([])
      setCollapseOperaciones(false)
      setCollapseOperaciones2(true)

    }
  };
  // FILTRAR PRODUCTOS SEGUN SI HAY ACTIVIIDAD 
  const List_FilterProductoEmpresa=  () => {
    let filter_productos = lisProductosEmpresa.filter((item) => item.fk_area == selectAreaEmpresa.pk_area &&
                                                                item.pk_activ_economic == selectActivEmpresa.fk_activ_economic)
    if (filter_productos.length > 0) {
      console.log('filter_productos: ',filter_productos)
      setCollapseProductos(true)
      setCollapseProductos2(false)
      setFilterListProductosEmpresa(filter_productos)
      console.log('filter_productos',filter_productos)
      
    }else{
      // filtrar productos segun la actividad economica 
      // let filter_productos = 
      setCollapseProductos(false)
      setCollapseProductos2(true)
    }
  };
  // FILTRAR ESTABLECIMIENTO SEGUN NOMBRE DE LA SOLICITUD
  const List_FilterFormaAreaEmpresa=  () => {
    let filter_formas = listFormasProduct.filter((item) => item.fk_area == selectAreaEmpresa.pk_area)

    if (filter_formas.length > 0) {
      console.log('filter formas del area seleccionada: ',filter_formas)
      setCollapseForma(true)
      setCollapseForma2(false)
      setFilterListFormaProdAreauct(filter_formas)
      
    }else{
      // filtrar productos segun la actividad economica 
      // let filter_formas = 
      setCollapseForma(false)
      setCollapseForma2(true)
    }

  };

  useEffect(() => {
    List_FilterCategoriaEmpresa();
  }, [selectActivEmpresa]);
  useEffect(() => {
    List_FilterOperaiconesEmpresa();
  }, [selectCategoriaEmpresa]);
  useEffect(() => {
    List_FilterProductoEmpresa();
  }, [selectActivEmpresa]);
  useEffect(() => {
    List_FilterFormaAreaEmpresa();
  }, [selectAreaEmpresa]);


  // Evento para vaciar campos de solicitud :
  const vaciarnombreSolciitud = document.getElementById('select_nombre_solicitud')
  const vaciaractividadEmpresa = document.getElementById('selectActividadempresa')
  const vaciarcategoriaEmpresa = document.getElementById('select_tipo_categoria')
  const vaciaroperacionEmpresa = document.getElementById('select_tipo_operaciones')
  const vaciarproductosEmpresa = document.getElementById('select_tipo_productos')

  // vaciar campos 
  const vaciar_nombre_solcitud = () =>{
    // campos a vaciar 
    vaciarnombreSolciitud.value = null
    // Disparar el evento de cambio en el campo Autocomplete
    const event = new Event('change', { bubbles: true });
    vaciarnombreSolciitud.dispatchEvent(event);
    
  }
  const vaciar_activ_empresa = () =>{
    // campos a vaciar 
    vaciaractividadEmpresa.value = null
    // Disparar el evento de cambio en el campo Autocomplete
    const event = new Event('change', { bubbles: true });
    vaciaractividadEmpresa.dispatchEvent(event);
    
  }
  const vaciar_categoria_empresa = () =>{
    // campos a vaciar 
    vaciarcategoriaEmpresa.value = null
    // Disparar el evento de cambio en el campo Autocomplete
    const event = new Event('change', { bubbles: true });
    vaciarcategoriaEmpresa.dispatchEvent(event);
    
  }
  const vaciar_operacion_empresa = () =>{
    // campos a vaciar 
    vaciaroperacionEmpresa.value = null
    // Disparar el evento de cambio en el campo Autocomplete
    const event = new Event('change', { bubbles: true });
    vaciaroperacionEmpresa.dispatchEvent(event);
    
  }
  const vaciar_productos_empresa = () =>{
    // campos a vaciar 
    vaciarproductosEmpresa.value = null
    // Disparar el evento de cambio en el campo Autocomplete
    const event = new Event('change', { bubbles: true });
    vaciarproductosEmpresa.dispatchEvent(event);
    
  }

  
  // *---------------------------------------------------
  // *-----------------------CREACION DE INPUTS OPERACIONES-------------------------
  // *---------------------------------------------------

  //  CADA VEZ QUE SE ACTUALICE EL ESTADO inputsdomOperaciones SE EJECUTA LA FUNCION DEL HOOK useEffect
  useEffect(()=>{
    if(inputsdomOperaciones.length > 0 ){
      setDisabledSubmitoperaciones(false)
    }else{
      setDisabledSubmitoperaciones(true)
    }
    setInputsDomOperaciones(inputsdomOperaciones)
  },[inputsdomOperaciones])
  
  const addInputoperaciones = () => {
    setInputsDomOperaciones([...inputsdomOperaciones,{
      rifempresa:user.pk_empresa,
      pkcategoria: selectCategoriaEmpresa.pk_categoria,
      categoria: selectCategoriaEmpresa.nombre,
      pk_operaciones : selecOperaiconEmpresa.pk_operaciones,
      nombre_operaciones: selecOperaiconEmpresa.nombre_operaciones,
      
    }]);

  
  };
  // ELEMINIAR INPUTS CREADOS 
  const DeleteInputoperaciones = (pk) => {
    // const indexInput = [inputsdomOperaciones[index]]
    setInputsDomOperaciones(inputsdomOperaciones.filter((item) => item.pk_operaciones !== pk ));
    console.log('eliminar inputs: ',inputsdomOperaciones.filter((item) => item.pk_operaciones !== pk ))
    
  };
  
  // *---------------------------------------------------
  // *-----------------------CREACION DE INPUTS PRODUCTOS-------------------------
  // *---------------------------------------------------

  // CADA VEZ QUE SE ACTUALICE EL ESTADO inputsdomOperaciones SE EJECUTA LA FUNCION DEL HOOK useEffect
  useEffect(()=>{
    if(inputsdomProductos.length > 0 ){
      setDisabledSubmitProductos(false)
    }else{
      setDisabledSubmitProductos(true)
    }
    setInputsDomProductos(inputsdomProductos)
  },[inputsdomProductos])
  
  const addInputProductos = () => {
    setInputsDomProductos([...inputsdomProductos,{
      rifempresa:user.pk_empresa,
      pk_activ_economic : selectActivEmpresa.fk_activ_economic,
      activ_economica : selectActivEmpresa.activ_economica, 
      // pk_activ_economic : selectProductosEmpresa.pk_activ_economic,
      pk_tip_producto : selectProductosEmpresa.pk_tip_producto,
      nombre_tip_producto: selectProductosEmpresa.nombre_tip_producto
    }]);

  
  };
  // ELEMINIAR INPUTS CREADOS 
  const DeleteInputProductos = (pk) => {
    // const indexInput = [inputsdomProductos[index]]
    setInputsDomProductos(inputsdomProductos.filter((item) => item.pk_tip_producto !== pk ));
    console.log('eliminar inputs: ',inputsdomProductos.filter((item) => item.pk_tip_producto !== pk ))
    
  };
  
  // *---------------------------------------------------
  // *-----------------------CREACION DE INPUTS FORMAS PRODUCTOS-------------------------
  // *---------------------------------------------------

  // CADA VEZ QUE SE ACTUALICE EL ESTADO inputsdomOperaciones SE EJECUTA LA FUNCION DEL HOOK useEffect
  useEffect(()=>{
    if(inputsdomFormasProduct.length > 0 ){
      setDisabledSubmitFormasProduct(false)
    }else{
      setDisabledSubmitFormasProduct(true)
    }
    setInputsDomFormasProduct(inputsdomFormasProduct)
  },[inputsdomFormasProduct])
  
  const addInputFormaProductos = () => {
    setInputsDomFormasProduct([...inputsdomFormasProduct,{
      rifempresa:user.pk_empresa,
      pk_forma_product: selectFormasProductosEmpresa.pk_forma_product,
      forma_producto: selectFormasProductosEmpresa.forma_producto,
    }]);

  
  };
  // ELEMINIAR INPUTS CREADOS 
  const DeleteInputFormaProductos = (pk) => {
    // const indexInput = [inputsdomFormasProduct[index]]
    setInputsDomFormasProduct(inputsdomFormasProduct.filter((item) => item.pk_forma_product !== pk ));
    console.log('eliminar inputs: ',inputsdomFormasProduct.filter((item) => item.pk_forma_product !== pk ))
    
  };
  // *---------------------------------------------------
  // *-----------------------CREACION DE INPUTS PRODUCTOS IMPORTADOS-------------------------
  // *---------------------------------------------------

  // CADA VEZ QUE SE ACTUALICE EL ESTADO inputsdomOperaciones SE EJECUTA LA FUNCION DEL HOOK useEffect
  useEffect(()=>{
    if(inputsdomProductImportados .length > 0 ){
      setDisabledSubmitProductImportados(false)
    }else{
      setDisabledSubmitProductImportados(true)
    }
    setInputsDomProductImportados(inputsdomProductImportados )
  },[inputsdomProductImportados ])

  // CADA VEZ QUE SE ACTUALICE EL ESTADO CollapsePresentProductImport SE EJECUTARA LA FUNCION
  //  Y SI MI PRESENTACION DE PRODUCTO ES "OTRO" ENTONCES MOSTRAR CAMPO INPUT 
  useEffect(()=>{
    if(PresentacionProductoimportado.pk_present_product_import == "17" ){
      setCollapsePresentProductImport(true)
      // ! validar que el nuevo campo no este vacio
      
    }else{
      setCollapsePresentProductImport(false)
      setOtraPresentacionProductImport("")
      // setDisabledSubmitProductImportados(true)
    }
  },[PresentacionProductoimportado ])
  
  
 const addInputProductosImportados = () => {

  let datacedulapropietario = `${NacpropietarioProductImport  + PadStartCiudadano(propietarioProductImport  )}`
  console.log('datacedulapropietario. ',datacedulapropietario)

  // si es nueva presentacion cambiar el valor de presentacionProductImport por el hook otraNuevapresentaicon
  if (PresentacionProductoimportado.pk_present_product_import == "17") {
    setInputsDomProductImportados([...inputsdomProductImportados ,{
      rifempresa:user.pk_empresa,
      NombreProductoimportado :NombreProductoimportado ,
      PresentacionProductImport :OtraPresentacionProductImport , //cambiamos la presentacion por la nueva hecha por el usuario
      registroSanitarioProductImport :registroSanitarioProductImport ,
      LaboratorioFabricanteproductimport :LaboratorioFabricanteproductimport ,
      PaisProcedenteProductImport :PaisProcedenteProductImport.nombre_pais ,
      datacedulapropietario:NombrePropietairoProductImport +' '+ ApellidoPropietairoProductImport ,
      // datacedulapropietario:datacedulapropietario,
      FarmaceuticoProductImport :FarmaceuticoProductImport ,
      // propietarioProductImport :NacpropietarioProductImport + propietarioProductImport , //solo la cedula para mostrarla
    }]);

    
    // vaciar hook de establecimiento para reutilizarlos 
    setNombreProductoimportado('')
    setregistroSanitarioProductImport('')
    setLaboratorioFabricanteproductimport('')
    setFarmaceuticoProductImport('')
    
  }else{

    setInputsDomProductImportados([...inputsdomProductImportados ,{
      rifempresa:user.pk_empresa,
      NombreProductoimportado :NombreProductoimportado ,
      PresentacionProductImport :PresentacionProductoimportado.presentacion_product_import ,
      registroSanitarioProductImport :registroSanitarioProductImport ,
      LaboratorioFabricanteproductimport :LaboratorioFabricanteproductimport ,
      PaisProcedenteProductImport :PaisProcedenteProductImport.nombre_pais ,
      datacedulapropietario:NombrePropietairoProductImport +' '+ ApellidoPropietairoProductImport ,
      // datacedulapropietario:datacedulapropietario,
      FarmaceuticoProductImport :FarmaceuticoProductImport ,
      // propietarioProductImport :NacpropietarioProductImport + propietarioProductImport , //solo la cedula para mostrarla
    }]);

    
  // vaciar hook de establecimiento para reutilizarlos 
  setNombreProductoimportado('')
  setregistroSanitarioProductImport('')
  setLaboratorioFabricanteproductimport('')
  setFarmaceuticoProductImport('')
  }



};
// ELEMINIAR INPUTS CREADOS 
const DeleteInputProductImportados = (producto) => {
  // const indexInput = [inputsdomProductImportados [index]]
  setInputsDomProductImportados(inputsdomProductImportados .filter((item) => item.NombreProductoimportado !== producto ));
  console.log('eliminar inputs: ',inputsdomProductImportados .filter((item) => item.NombreProductoimportado !== producto ))
  
};

  // -----------------------------------
  // REGISTRO DE TIPO DE SOLICITUD 
  // --------------------------------------

  const DataTip_Solicitud = () =>{
    const objtipSolicitud = {
      
      rifempresa:user.pk_empresa,
      tiposolicitud: selectTipSolicitud.pk_tipo_solicitud,
      nombresolicitud : selectNombreSolicitud.pk_nombre_solicitud ,
      areaempresa : selectAreaEmpresa.pk_area ,
      activempresa : selectActivEmpresa.fk_activ_economic ,
    }
    console.log('objtipSolicitud: ',objtipSolicitud)
    List_FilterCategoriaEmpresa()
    const url =`${servidor}Empresa/SolicitudEmpresa/InsertTipSolicitud`
    AxiosPostSolicitud(url,objtipSolicitud,` ${selectTipSolicitud.descripcion}`,null)

    // AxiosPost(url,objtipSolicitud,` ${selectTipSolicitud.descripcion}`,null)
  }
  const DataCategoria_Solicitud = () =>{
    const objCategoriaSolicitud = {
      rifempresa:user.pk_empresa,
      categoria:selectCategoriaEmpresa.pk_categoria,
    }
    console.log('objtipSolicitud: ',objCategoriaSolicitud)
    List_FilterOperaiconesEmpresa()
    const url =`${servidor}Empresa/SolicitudEmpresa/InsertCategoriaSolicitud`
    AxiosPostSolicitud(url,objCategoriaSolicitud,` ${selectCategoriaEmpresa.nombre} Registrado`,null)

    // AxiosPost(url,objtipSolicitud,` ${selectTipSolicitud.descripcion}`,null)
  }

  const Dataoperaciones_Solicitud = () =>{
    
    console.log('inputsdomOperaciones submit:',inputsdomOperaciones)
    const url =`${servidor}Empresa/SolicitudEmpresa/InsertOperacionesSolicitud`
    AxiosPostSolicitud(url,inputsdomOperaciones,` Productos de su Empresa Registrados`,null)
  }
  const DataProductos_Solicitud = () =>{
    
    console.log('inputsdomProductos submit:',inputsdomProductos)
    const url =`${servidor}Empresa/SolicitudEmpresa/InsertProductosSolicitud`
    AxiosPostSolicitud(url,inputsdomProductos,` Productos de su Empresa Registrados`,null)
  }
  const DataEstablecimiento_Solicitud = () =>{

    const objEstablecimiento = {
      rifempresa:user.pk_empresa,
      tipestablecimiento :selectEstablecimiento.pk_tip_establecimiento,
      dominio :selectDominio.pk_dominio,
      parroquia :selectParroquiaEstablecimiento.pk_parroquia,
      tlf :tlfFirstEstablecimiento,
      tfldos  :tlfSecondEstablecimiento,
      email :emailFirstEstablecimiento,
      emaildos :emailsecondEstablecimiento,
      observacion :observacionEstablecimiento,
      estatus :selectEstatus.pk_estatus,
      zonaestablecimiento  :ZonaEstablecimiento ,
      rutaestablecimiento  :RutasEstablecimiento ,
      espacioestablecimiento  :EspacioEstablecimiento ,
      nivelestablecimiento  :NivelEstablecimiento ,
      codigoestablecimiento  :CodigoPostalEstablecimiento ,
      metroscuadradosestablecimiento  :MetrosCuadradosEstablecimiento ,
      referenciaestablecimiento  :ReferenciaEstablecimiento ,
  
    } 
    
    console.log('objEstablecimiento submit:',objEstablecimiento)
    const url =`${servidor}Empresa/SolicitudEmpresa/InsertPrimerEstablecimientoSolicitud`
    AxiosPostSolicitud(url,objEstablecimiento,` ${selectEstablecimiento.descripcion} Registrado`,null)
  }
  const DataEstablecimiento2_Solicitud = () =>{

    const objEstablecimiento = {
      rifempresa:user.pk_empresa,
      tipestablecimiento :selectEstablecimiento2.pk_tip_establecimiento,
      dominio :selectDominio2.pk_dominio,
      parroquia :selectParroquiaEstablecimiento2.pk_parroquia,
      direstablecimiento :direccionEstablecimiento2,
      tlf :tlfFirstEstablecimiento2,
      tfldos  :tlfSecondEstablecimiento2,
      email :emailFirstEstablecimiento2,
      emaildos :emailsecondEstablecimiento2,
      observacion :observacionEstablecimiento2,
      estatus :selectEstatus2.pk_estatus,
      zonaestablecimiento  :ZonaEstablecimiento2 ,
      rutaestablecimiento  :RutasEstablecimiento2 ,
      espacioestablecimiento  :EspacioEstablecimiento2 ,
      nivelestablecimiento  :NivelEstablecimiento2 ,
      codigoestablecimiento  :CodigoPostalEstablecimiento2 ,
      metroscuadradosestablecimiento  :MetrosCuadradosEstablecimiento2 ,
      referenciaestablecimiento  :ReferenciaEstablecimiento2 ,
  
    } 
    
    console.log('objEstablecimiento2 submit:',objEstablecimiento)
    const url =`${servidor}Empresa/SolicitudEmpresa/InsertPrimerEstablecimientoSolicitud`
    AxiosPostSolicitud(url,objEstablecimiento,` ${selectEstablecimiento2.descripcion} Registrado`,null)

    // vaciar hook de establecimiento para reutilizarlos 
  }
  const DataEstablecimiento3_Solicitud = () =>{

    const objEstablecimiento = {
      rifempresa:user.pk_empresa,
      tipestablecimiento :selectEstablecimiento3.pk_tip_establecimiento,
      dominio :selectDominio3.pk_dominio,
      parroquia :selectParroquiaEstablecimiento3.pk_parroquia,
      tlf :tlfFirstEstablecimiento3,
      tfldos  :tlfSecondEstablecimiento3,
      email :emailFirstEstablecimiento3,
      emaildos :emailsecondEstablecimiento3,
      observacion :observacionEstablecimiento3,
      estatus :selectEstatus3.pk_estatus,
      zonaestablecimiento  :ZonaEstablecimiento3 ,
      rutaestablecimiento  :RutasEstablecimiento3 ,
      espacioestablecimiento  :EspacioEstablecimiento3 ,
      nivelestablecimiento  :NivelEstablecimiento3 ,
      codigoestablecimiento  :CodigoPostalEstablecimiento3 ,
      metroscuadradosestablecimiento  :MetrosCuadradosEstablecimiento3 ,
      referenciaestablecimiento  :ReferenciaEstablecimiento3 ,
  
    } 
    
    console.log('objEstablecimiento3 submit:',objEstablecimiento)
    const url =`${servidor}Empresa/SolicitudEmpresa/InsertPrimerEstablecimientoSolicitud`
    AxiosPostSolicitud(url,objEstablecimiento,` ${selectEstablecimiento3.descripcion} Registrado`,null)

  }
  const Dataproductimportados_Solicitud = () =>{
    
    console.log('inputsdomProductImportados  submit:',inputsdomProductImportados )
    const url =`${servidor}Empresa/SolicitudEmpresa/InsertProductImportSolicitud`
    AxiosPostSolicitud(url,inputsdomProductImportados ,` Productos Importados Registrados`,null)
    
  }
  const DataFormasproduct_Solicitud = () =>{

    if (inputsdomFormasProduct.length > 0) {
      
      console.log('inputsdomFormasProduct submit:',inputsdomFormasProduct)
      const url =`${servidor}Empresa/SolicitudEmpresa/InsertFormasProductSolicitud`
      AxiosPostSolicitud(url,inputsdomFormasProduct,` Formas de sus Productos Registrados`,null)
      Swal.fire(
        'Finalizado!',
        `Registro culminado` ,
        'success'
      )
      // setTimeout para redirigir después de dos segundos
      setTimeout(() => {
        navigate('/Home');
      }, 1000);
    }else{
      console.log('inputsdomFormasProduct submit:',inputsdomFormasProduct)
      Swal.fire(
        'Finalizado!',
        `Registro culminado` ,
        'success'
      )
      // setTimeout para redirigir después de dos segundos
      setTimeout(() => {
        navigate('/Home');
      }, 1000);
    }
    

  }
  

  // PDF RECAUDOS DE SOLICITUD 

  const GenerarPdfRecaudosSolicitud = async () =>{

    const solicitud = {
      solicitud : nrosolicitud,
    }

    const rutapdf = 'http://localhost/Sistema_Empresa/solicitudes/pdf/'
    try {
      const response = await axios.post(rutapdf, JSON.stringify(solicitud), {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'blob', // Set the responseType to 'blob' to handle binary data
      });
  
      // Create a Blob URL for the PDF content
      const url = URL.createObjectURL(new Blob([response.data]));
      // Create a link element and trigger a click to force download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Solicitud_Sanitaria.pdf';
      a.click();
  
      // Cleanup: revoke the Blob URL
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error sending data to PHP:', error);
    }
  

    //   axios.post('http://localhost/sistema_empresa/solicitudes/pdf/',JSON.stringify(solicitud))
    // .then(response => {
    //   const blob = new Blob([response.data], { type: 'application/pdf' });
    //   const url = URL.createObjectURL(blob);
    //   console.log(url)
    //   // window.open(url, '_blank');
    // })
    // .catch(error => console.error('Error:', error));
    // Abrir el PDF en una nueva ventana o pestaña
    // console.log('resp_data',resp_data)
    // console.log(nrosolicitud)
  
    
  }
  const HandelSubmitRecaudosPDF = (e) =>{
    e.preventDefault()
    GenerarPdfRecaudosSolicitud()
    onClose()
  }

 
  
  const HandleSubmitTipSolicitud = (e) =>{
    e.preventDefault()
    DataTip_Solicitud()
    nextformstep()
    
  }
  const HandleSubmitCategoriaSolicitud = (e) =>{
    e.preventDefault()
    DataCategoria_Solicitud()
    nextformstep()
  
  }
  const HandleSubmitOperaiconesSolicitud = (e) =>{
    e.preventDefault()
    Dataoperaciones_Solicitud()
    nextformstep()
  
  }
  const HandleSubmitProductosSolicitud = (e) =>{
    e.preventDefault()
    DataProductos_Solicitud()
    nextformstep()
  
  }
  const HandleSubmitEstablecimientoSolicitud = (e) =>{
    e.preventDefault()
    DataEstablecimiento_Solicitud()
    nextformstep()
  
  }
  const HandleSubmitEstablecimiento2Solicitud = (e) =>{
    e.preventDefault()
    DataEstablecimiento2_Solicitud()
    nextformstep()
  
  }
  const HandleSubmitEstablecimiento3Solicitud = (e) =>{
    e.preventDefault()
    DataEstablecimiento3_Solicitud()
    nextformstep()
  
  }
  const HandleSubmitProductImportadosSolicitud = (e) =>{
    e.preventDefault()
    Dataproductimportados_Solicitud()
    nextformstep()
  
  }
  const HandleSubmitFormasProductSolicitud = (e) =>{
    e.preventDefault()
    DataFormasproduct_Solicitud()
    nextformstep()
  
  }


  // -----------------------------------------------------------
  // -----------------------------------------------------------
  // ------------------VALIDACIONES DE CAMPOS VACIOS EN TODA LA SOLICITUD -----------------------------------------
  // -----------------------------------------------------------
  // -----------------------------------------------------------

  //  // VALIDACION TIPO SOLICITUD
  //  let select_tipo_solicitud = document.getElementById('select_tipo_solicitud')
  //  let select_nombre_solicitud = document.getElementById('select_nombre_solicitud')
  //  let selectarea = document.getElementById('selectarea')
  //  let selectActividadempresa = document.getElementById('selectActividadempresa')
  // const [actividadEmpresa,setActividadEmpresa] = useState(selectActividadempresa)

  //  useEffect(() =>{
  //   if(listTipSolicitud.length == 0 || listTipSolicitud == '' || listTipSolicitud == null ||
  //     listnombreSolicitud.length == 0 || listnombreSolicitud == '' || listnombreSolicitud == null||
  //     listAreasEmpresa.length == 0 || listAreasEmpresa == '' || listAreasEmpresa == null||
  //     listActividadEmpresa.length == 0 || listActividadEmpresa == '' || listActividadEmpresa == null || listActividadEmpresa == undefined ||
  //     // select_tipo_solicitud.value.length == 0 ||
  //     // select_nombre_solicitud.value.length == 0 ||
  //     // selectarea.value.length == 0 ||
  //     selectActividadempresa.value.length == 0  
  //     ){
  //     setDiseabledTipSolicitud(true)
  //   }else
  //         {
  //     setDiseabledTipSolicitud(false)
  //   }
  // },[listTipSolicitud,listnombreSolicitud,listAreasEmpresa,listActividadEmpresa,actividadEmpresa])




  return (
    <>
     {/* recaudos de solicitud  */}

     <Box component='form' className='form_ciudadano' id='form_step'  onSubmit={HandelSubmitRecaudosPDF}>
        {/* <Box 
          sx={{my:2}}
          >
          <Button type="submit" variant="contained" color="success" sx={{mr:2}}>
              Recaudos para la Solicitud
          </Button>
                  
        </Box> */}
      </Box>
      <Box component='div' 

          sx={{width:'90%', margin:'auto',boxShadow:'2px 2px 6px #12265f71',borderRadius:'7px', p:'1rem', marginBottom:'2rem'}}
        >

         
          {/* ---------------------------- */}
          <Box component='div' className='container_encabezado' sx={{mb:'1rem'}}>
            <Box component='div' className='encabezado_tit_solicitud_form' >
              <center>
                <Typography variant="h6" sx={{color:'#fff',p:'1rem'}}>Realice su Solicitud</Typography>
              </center>
            </Box>
            {/* <Box component='div' >
              <center>
                indicadores
              </center>
            </Box> */}
            <Box component='center'>
              <center>
                <Alert severity="warning">Se le Informa que por cada paso que complete se estara <strong>registrando su informacion!</strong>.
                 Una vez que empieze <strong>abstengase de salirse del proceso.</strong> <strong>LLENE LOS CAMPOS ANTES DE AVANZAR</strong>
                 </Alert>
              </center>
            </Box>
          </Box>

          <Box component='div' sx={{ml:'0.5rem'}}>
            {/* <TextField
              id="rifempresa"
              label="Rif de Empresa storage"
              defaultValue={usarioempresa.pk_empresa}
              InputProps={{
                readOnly: true,
              }}
              color="success" focused
            /> */}
            <TextField
              id="rifempresa"
              label="Rif de Empresa"
              defaultValue={user.pk_empresa}
              InputProps={{
                readOnly: true,
              }}
              color="success" focused
            />
          </Box>

        <Box className = 'Cont_form_step' sx={{mt:'1rem'}}>

          <Box className='slider_form'>
              {/* slider 1 TIPO Y NOMBRE DE SOLICITUD */}
              <Box component='form' className='form_ciudadano' id='form_step'  onSubmit={HandleSubmitTipSolicitud}>

                  {/*--------------------  */}
                  {/* Tipo de solicitud  */}
                  {/*--------------------  */}
                  <Box>
                  <Grid container spacing={2} sx={{py:1}}>

                    <Grid item xs={12} md={6}>
                        <Autocomplete sx={styleCampos}
                                id="select_tipo_solicitud" 
                                options={listTipSolicitud}
                                onChange={(e, newValue) => {
                                    vaciar_nombre_solcitud()
                                    setSelectTipSolicitud({
                                        pk_tipo_solicitud : newValue.pk_tipo_solicitud,
                                        descripcion: newValue.descripcion,
                                    });
                                }}
                                getOptionLabel={(option) => option.descripcion}
                                renderInput={(params) => <TextField {...params} label="Tipo de Solicitud" variant="outlined" />}
                                freeSolo
                                required={true}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                            <Autocomplete
                                sx={styleCampos}
                                id="select_nombre_solicitud" 
                                options={FilterlistnombreSolicitud}
                                onChange={(e, newValue) => {
                                    
                                    setSelectNombreSolicitud({
                                        pk_nombre_solicitud : newValue.pk_nombre_solicitud,
                                        fk_tipo_solicitud: newValue.fk_tipo_solicitud,
                                        fk_coordinacion: newValue.fk_coordinacion,
                                        descripcion: newValue.descripcion,
                                    });
                                }}
                                getOptionLabel={(option) => option.descripcion}
                                renderInput={(params) => <TextField {...params} label="Nombre Solicitud" variant="outlined" />}
                                freeSolo
                                required={true}
                            />
                    </Grid>
                    <Grid item xs={12} md={6}>
                            <Autocomplete
                                sx={styleCampos}
                                id="selectarea" 
                                options={listAreasEmpresa}
                                onChange={(e, newValue) => {
                                  vaciar_activ_empresa()
                                  setSelectAreaEmpresa({
                                        pk_area : newValue.pk_area,
                                        descripcion: newValue.descripcion,
                                    });
                                }}
                                getOptionLabel={(option) => option.descripcion}
                                renderInput={(params) => <TextField {...params} label="área de Empresa" variant="outlined" />}
                                freeSolo
                                required={true}
                            />
                    </Grid>
                    <Grid item xs={12} md={6}>
                            <Autocomplete
                                sx={styleCampos}
                                id="selectActividadempresa" 
                                options={FilterlistActivEmpresa}
                                onChange={(e, newValue) => {
                                  vaciar_categoria_empresa()
                                  vaciar_productos_empresa()
                                  setSelectActivEmpresa({
                                        pk_activ_area : newValue.pk_activ_area,
                                        fk_activ_economic : newValue.fk_activ_economic,
                                        fk_area : newValue.fk_area,
                                        activ_economica: newValue.activ_economica,
                                    });
                                }}
                                getOptionLabel={(option) => option.activ_economica}
                                renderInput={(params) => <TextField {...params} label="Actividad de Empresa" variant="outlined" />}
                                freeSolo
                                required={true}
                            />
                    </Grid>



                  </Grid> 
                  </Box>


                  <Box 
                      sx={{mt:2,float:'right'}}
                    >
                    
                    <Button type='submit' variant="contained" id='btn_next' color="success">
                                          
                      Registrar
                    </Button>
                    {/* <Button type='submit' variant="contained" id='btn_next' color="success" disabled={diseabledTipSolicitud} >
                                          
                      Registrar
                    </Button> */}

                    <ToastContainer />
                  </Box> 
              </Box>
              {/* slider 2 CATEGORIA DE EMPRESA */}
              <Box component='form' className='form_ciudadano' id='form_step' onSubmit={HandleSubmitCategoriaSolicitud} >
                  
                   {/*--------------------  */}
                  {/* categoria de actividad de la solicitud  */}
                  {/*--------------------  */}
                  <Box>
                    <Collapse in={CollapseCatgoria} >
                      
                      <Box component='div'>
                        <Typography variant="p" color="error">Actividad: <strong>{selectActivEmpresa.activ_economica}</strong> seleccionada anteriormente:</Typography>
                      </Box>
                      <Box component='div'>
                        <Grid container spacing={2} sx={{py:1}}>
                          {/* <Grid item xs={12} md={6}>
                            <TextField sx={styleCampos}
                              id="activempresa"
                              label="Actividad de Empresa"
                              defaultValue={selectActivEmpresa.activ_economica}
                              InputProps={{
                                readOnly: true,
                              }}
                              color="success" focused
                            />
                          </Grid> */}
                          <Grid item xs={12} md={6}>
                              <Autocomplete sx={styleCampos}
                                      id="select_tipo_categoria" 
                                      options={FilterlistCategoriaEmpresa}
                                      onChange={(e, newValue) => {
                                        vaciar_operacion_empresa()
                                          setSelectCategoriaEmpresa({
                                              pk_categoria : newValue.pk_categoria,
                                              nombre: newValue.nombre,
                                          });
                                      }}
                                      getOptionLabel={(option) => option.nombre}
                                      renderInput={(params) => <TextField {...params} label="Seleccionar Tipo de Categoria" variant="outlined" />}
                                      freeSolo
                              />
                          </Grid>
                          



                        </Grid> 

                      </Box>

                      
                      <Box 
                          sx={{mt:2,float:'right'}}
                        >
                        {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button> */}
                        <Button type='submit' variant="contained" id='btn_next' color="success" >
                                              
                          Registrar
                        </Button>

                        <ToastContainer />
                      </Box> 

                    </Collapse>
                  </Box>
                  <Box>
                    <Collapse in={CollapseCatgoria2} >
                      
                      <Box component='div'>
                        <Typography variant="p" color="secondary">
                          La actividad <strong>{selectActivEmpresa.activ_economica}</strong> seleccionada anteriormente no tiene categoria. Puede continuar.
                        </Typography>
                      </Box>
                      <Box 
                        sx={{mt:2,float:'right'}}
                        >
                        <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button>
                        <Button variant="contained" id='btn_next' color="info" onClick={() => nextformstep()}>
                                              
                          Siguiente
                        </Button>

                      </Box> 
                    </Collapse>
                  </Box>

              </Box>
  
              {/* slider 2 OPERACIONES DE EMPRESA */}
              <Box component='form' className='form_ciudadano' id='form_step' onSubmit={HandleSubmitOperaiconesSolicitud} 
                  sx={{minHeight:'auto',maxHeight:'300px',overflow:'auto'}}>
                  
                   {/*--------------------  */}
                  {/* operaciones de categoria de la solicitud  */}
                  {/*--------------------  */}
                  
                  <Box>
                    <Collapse in={CollapseOperaciones} >
                      
                      <Box component='div'>
                        <Typography variant="p" color="error">Actividad: <strong>{selectActivEmpresa.activ_economica}</strong> seleccionada anteriormente</Typography>
                      </Box>
                      <Box component='div'>
                        <Grid container spacing={2} sx={{py:1}}>
                          {/* <Grid item xs={12} md={6}>
                            <TextField sx={styleCampos}
                              id="activempresa"
                              label="Actividad de Empresa"
                              defaultValue={selectActivEmpresa.activ_economica}
                              InputProps={{
                                readOnly: true,
                              }}
                              color="success" focused
                            />
                          </Grid> */}
                          <Grid item xs={12} md={6}>
                              <Autocomplete sx={styleCampos}
                                      id="select_tipo_operaciones" 
                                      options={FilterlistOperacionesEmpresa}
                                      onChange={(e, newValue) => {
                                          
                                        setSelecOperaiconEmpresa({
                                              fk_activ_area : newValue.fk_activ_area,
                                              fk_activ_economic : newValue.fk_activ_economic,
                                              pk_operaciones : newValue.pk_operaciones,
                                              area : newValue.area,
                                              activ_economica : newValue.activ_economica,
                                              nombre_operaciones: newValue.nombre_operaciones,
                                          });
                                      }}
                                      getOptionLabel={(option) => option.nombre_operaciones}
                                      renderInput={(params) => <TextField {...params} label="Seleccionar Tipo de Opraciones" variant="outlined" />}
                                      freeSolo
                              />
                          </Grid>
                          

                          <Grid item xs={12} md={3}>
                            <Fab color="success" aria-label="add" onClick={addInputoperaciones} >
                              <AddIcon />
                            </Fab>
                            {/* <Button variant="outlined" color="error" startIcon={<ControlPointTwoToneIcon />} onClick={addInputoperaciones}>
                              Agregar a Lista
                            </Button> */}
                          </Grid>            

                        </Grid> 

                      </Box>

                      {/* --------------------------------------- */}
                            {/* //? CREACION DE CAMPOS DOM */}
                      {/* --------------------------------------- */}
                      <Box>
                        <Typography variant="h6" color="primary">Listado a Registrar: </Typography>
                        {inputsdomOperaciones.map((item) =>(
                          <Box component='div' className="Container_DOM_Inputs" id={item.pk_operaciones} sx={{mt:2}} key={item.pk_operaciones} >
                              <Grid container spacing={2}>
                                  <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                      id="nombrecategoria"
                                      label="Categoria Seleciconada"
                                      type="text"
                                      defaultValue={item.categoria}
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                      id="nombreoperacion"
                                      label="Operacion"
                                      type="text"
                                      defaultValue={item.nombre_operaciones}
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  
                                  {/* Evento remover campo */}
                                  <Grid item xs={12} md={3}>
                                    
                                    <Fab color="error" aria-label="add" onClick={() => DeleteInputoperaciones(item.pk_operaciones)}>
                                      <ClearIcon />
                                    </Fab>
                                    {/* <Button variant="outlined" color="warning" startIcon={<HighlightOffTwoToneIcon />} onClick={() => DeleteInputoperaciones(item.pk_operaciones)}>
                                      Eliminar Operación
                                    </Button> */}
                                  </Grid>
                                
                                </Grid>
                            </Box>

                          ))}
                      </Box>

                      
                      <Box 
                          sx={{mt:2,float:'right'}}
                        >
                        {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button> */}
                        <Button type='submit' variant="contained" id='btn_next' color="success" disabled={disabledSubmitoperaciones} >
                                              
                          Registrar
                        </Button>

                        <ToastContainer />
                      </Box> 

                    </Collapse>
                  </Box>

                  {/* SINO HAY CATEGORIA  */}
                  <Box>
                    <Collapse in={CollapseOperaciones2} >
                      
                      <Box component='div'>
                        <Typography variant="p" color="secondary">
                          La Actividad <strong>{selectActivEmpresa.activ_economica}</strong> seleccionada anteriormente no tiene operaciones. Puede continuar.
                        </Typography>
                      </Box>
                      <Box 
                        sx={{mt:2,float:'right'}}
                        >
                        <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button>
                        <Button variant="contained" id='btn_next' color="info" onClick={() => nextformstep()}>
                                              
                          Siguiente
                        </Button>

                      </Box> 
                    </Collapse>
                  </Box>




              </Box>
  
              {/* slider 2 PRODUCTOS ALTAMENTE SENCIBILIZANTES DE EMPRESA */}
              <Box component='form' className='form_ciudadano' id='form_step' onSubmit={HandleSubmitProductosSolicitud} 
                  sx={{minHeight:'auto',maxHeight:'600px',overflow:'auto'}}>
                  
                   {/*--------------------  */}
                  {/* PRODUCTOS de categoria de la solicitud  */}
                  {/*--------------------  */}
                  
                  <Box>
                    <Collapse in={CollapseProductos} >
                      
                      <Box component='div'>
                        <Typography variant="p" color="error">Actividad: <strong>{selectActivEmpresa.activ_economica}</strong> seleccionada anteriormente</Typography>
                      </Box>
                      <Box component='div'>
                        <Grid container spacing={2} sx={{py:1}}>
                          {/* <Grid item xs={12} md={6}>
                            <TextField sx={styleCampos}
                              id="activempresa"
                              label="Actividad de Empresa"
                              defaultValue={selectActivEmpresa.activ_economica}
                              InputProps={{
                                readOnly: true,
                              }}
                              color="success" focused
                            />
                          </Grid> */}
                          <Grid item xs={12} md={6}>
                              <Autocomplete sx={styleCampos}
                                      id="select_tipo_productos" 
                                      options={FilterlistProductosEmpresa}
                                      onChange={(e, newValue) => {
                                          
                                        setSelectProductosEmpresa({
                                              pk_activ_economic : newValue.pk_activ_economic,
                                              activ_economica : newValue.activ_economica,
                                              pk_tip_producto : newValue.pk_tip_producto,
                                              nombre_tip_producto: newValue.nombre_tip_producto,
                                          });
                                      }}
                                      getOptionLabel={(option) => option.nombre_tip_producto}
                                      renderInput={(params) => <TextField {...params} label="Seleccionar Tipo de Productos" variant="outlined" />}
                                      freeSolo
                              />
                          </Grid>
                          

                          <Grid item xs={12} md={3}>
                            <Fab color="success" aria-label="add" onClick={addInputProductos} >
                              <AddIcon />
                            </Fab>
                            {/* <Button variant="outlined" color="error" startIcon={<ControlPointTwoToneIcon />} onClick={addInputProductos}>
                              Agregar a Lista
                            </Button>   */}
                            {/* <IconButton aria-label="circle" color='error' sx={{fontSize:'4rem'}} onClick={addInputProductos}>
                              <AddCircleIcon/>
                            </IconButton> */}
                            
                          </Grid>            

                        </Grid> 

                      </Box>

                      {/* --------------------------------------- */}
                            {/* //? CREACION DE CAMPOS DOM PRODUCTOS */}
                      {/* --------------------------------------- */}
                      <Box>
                        <Typography variant="h6" color="primary">Listado a Registrar: </Typography>
                        {inputsdomProductos.map((item) =>(
                          <Box component='div' className="Container_DOM_Inputs" id={item.pk_tip_producto} sx={{mt:2}} key={item.pk_tip_producto} >
                              <Grid container spacing={2}>
                                  <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                      id="actividad"
                                      label="Actividad seleccionada"
                                      type="text"
                                      defaultValue={item.activ_economica}
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                      id="nombreoperacion"
                                      label="Nombre de Operación"
                                      type="text"
                                      defaultValue={item.nombre_tip_producto}
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  

                                  <Grid item xs={12} md={3}>
                                    
                                    <Fab color="error" aria-label="add" onClick={() => DeleteInputProductos(item.pk_tip_producto)}>
                                      <ClearIcon />
                                    </Fab>  
                                    {/* <Button variant="outlined" color="warning" startIcon={<HighlightOffTwoToneIcon />} onClick={() => DeleteInputProductos(item.pk_tip_producto)}>
                                      Eliminar Producto
                                    </Button> */}
                                  </Grid>
                                
                                </Grid>
                            </Box>

                          ))}
                      </Box>

                      
                      <Box 
                          sx={{mt:2,float:'right'}}
                        >
                        {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button> */}
                        <Button type='submit' variant="contained" id='btn_next' color="success" disabled={disabledSubmitProductos} >
                                              
                          Registrar
                        </Button>

                        <ToastContainer />
                      </Box> 

                    </Collapse>
                  </Box>
                  
                  {/* SINO HAY PRODUCTOS SENSIBILIZANTE */}
                  <Box>
                    <Collapse in={CollapseProductos2} >
                      
                      <Box component='div'>
                        <Typography variant="p" color="secondary">
                        La Actividad <strong>{selectActivEmpresa.activ_economica}</strong> seleccionada anteriormente no tiene Productos Altamente Sensibilizantes. Puede continuar.
                        </Typography>
                      </Box>
                      <Box 
                        sx={{mt:2,float:'right'}}
                        >
                        <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button>
                        <Button variant="contained" id='btn_next' color="info" onClick={() => nextformstep()}>
                                              
                          Siguiente
                        </Button>

                      </Box> 
                    </Collapse>
                  </Box>




              </Box>
              

              {/* establecimiento de la empresa */}

              <Box component='form' className='form_ciudadano' id='form_step' onSubmit={HandleSubmitEstablecimientoSolicitud} >

                  <Box component='div'>
                    <Typography variant="p" color="primary">Datos de Establecimiento y su Dominio:</Typography>
                  </Box>

                           <Box className='establecimiento_dominio'>
                               <Grid container spacing={2} sx={{my:2}}>
                                   <Grid item  md={4} >
                                       <Autocomplete sx={styleCampos} 
                                       id="establecimiento" 
                                       options={FilterlistSolicitudEstablecimiento }
                                       onChange={(e,newValue) => {
                                           setSelectEstablecimiento({
                                               pk_tip_establecimiento: newValue ? newValue.fk_tip_establecimiento : null,
                                               descripcion: newValue ? newValue.tipo_estableicmiento : null
                                           })
                                       }}
                                       getOptionLabel={(option) => option.tipo_estableicmiento}
                                       renderInput={(params) => <TextField {...params} label="Tipo de Establecimiento" variant="outlined" />}
                                       />
                                   </Grid>       
                                   <Grid item  md={4} >
                                       <Autocomplete sx={styleCampos} 
                                       id="dominio" 
                                       options={listDominio}
                                       onChange={(e,newValue) => {
                                           setSelectDominio({
                                               pk_dominio: newValue ? newValue.pk_dominio : null,
                                               tip_dominio: newValue ? newValue.tip_dominio : null
                                           })
                                       }}
                                       getOptionLabel={(option) => option.tip_dominio}
                                       renderInput={(params) => <TextField {...params} label="Tipo de Dominio" variant="outlined" />}
                                       />
                                   </Grid>       
                                   <Grid item  md={4} >
                                       <Autocomplete sx={styleCampos} 
                                       id="estatus" 
                                       options={listEstatus}
                                       onChange={(e,newValue) => {
                                            setSelectEstatus({
                                               pk_estatus: newValue ? newValue.pk_estatus : null,
                                               tipo_estatus: newValue ? newValue.tipo_estatus : null
                                           })
                                       }}
                                       getOptionLabel={(option) => option.tipo_estatus}
                                       renderInput={(params) => <TextField {...params} label="Estatus" variant="outlined" />}
                                       />
                                   </Grid>       
                               </Grid>
                           </Box>
                    
                  <Box component='div'>
                    <Typography variant="p" color="primary">Contactos y Ubicación:</Typography>
                  </Box>

                    {/* contacto */}
                  <Box>
                               
                    <Grid container spacing={2} sx={{my:2}}>
                                   <Grid item  md={3} >
                                        <TextField sx={styleCampos}
                                                id="tlfempresapropietario"
                                                label="Tlf Principal "
                                                type="text"
                                                value={tlfFirstEstablecimiento}
                                                onChange={(e) => setTlfFirstEstablecimiento(e.target.value)}
                                                // color="success" focused
                                                
                                        />
                                   </Grid>
                                   <Grid item  md={3} >
                                   <TextField sx={styleCampos}
                                           id="tlf2empresapropietario"
                                           label="Tlf Segundario"
                                           type="text"
                                           value={tlfSecondEstablecimiento}
                                           onChange={(e) => setTlfSecondEstablecimiento(e.target.value)}
                                           // color="success" focused
                                   />
                                   </Grid>
                                   <Grid item  md={3} >
                                   <TextField sx={styleCampos}
                                           id="emailempresa"
                                           label="Correo Principal"
                                           type="text"
                                           placeholder="correomiempresagmail.com"
                                           value={emailFirstEstablecimiento}
                                           onChange={(e) => setEmailFirstEstablecimiento(e.target.value)}
                                           // color="success" focused
                                           />
                                   </Grid>
                                   <Grid item  md={3} >
                                    <TextField sx={styleCampos}
                                            id="email2empresa"
                                            label="Correo Segundario"
                                            type="text"
                                            placeholder="correosegundarioempresa@.."
                                            value={emailsecondEstablecimiento}
                                            onChange={(e) => setemailsecondEstablecimiento(e.target.value)}
                                            // color="success" focused
                                    />
                                   </Grid>
                              
                                                   
                    </Grid>
                  </Box>

                           {/* ubicaicon */}

                           <Box component='div' >
                               <Box component='div'>
                                   <Typography variant="p" color='primary'>Ubicación del Propietario: </Typography>
                               </Box>
                               <Grid container spacing={2} sx={{my:2}}>
                                   <Grid item  md={3.} >
                                       <Autocomplete sx={styleCampos} 
                                       id="estado_empresa_establecimiento" 
                                       options={lisEstado}
                                       onChange={(e,newValue) => {
                                           vaciar_municipio_empresa_establecimineto() //vacio el campo municipio al cambiar el estado
                                           setSelectEstadoEstablecimiento({
                                               pk_estado: newValue ? newValue.pk_estado : null,
                                               nombre_estado: newValue ? newValue.nombre_estado : null
                                           })
                                       }}
                                       getOptionLabel={(option) => option.nombre_estado}
                                       renderInput={(params) => <TextField {...params} label="Estado" variant="outlined" />}
                                       />
                                   </Grid>
                                   <Grid item  md={4.5} >
                                       <Autocomplete sx={styleCampos} 
                                       id="municipio_empresa_establecimiento" 
                                       options={listMunicipioEstadoEstablecimiento}
                                       onChange={(e,newValue) => {
                                           vaciar_parroquia_empresa_establecimiento() //vacio el campo parroquia al cambiar municipio
                                           setSelectMunicipioEstablecimiento({
                                               pk_municipio: newValue ? newValue.pk_municipio : null,
                                               fk_estado: newValue ? newValue.fk_estado : null,
                                               nombre_municipio: newValue ? newValue.nombre_municipio : null
                                           })
                                       }}
                                       getOptionLabel={(option) => option.nombre_municipio}
                                       renderInput={(params) => <TextField {...params} label="Municipio" variant="outlined" />}
                                       />
                                   </Grid>
                                   <Grid item  md={4.5} >
                                       <Autocomplete sx={styleCampos} 
                                       id="parroquia_empresa_establecimiento" 
                                       options={listParroquiaMunicipioEstablecimiento}
                                       onChange={(e,newValue) => {
                                           setSelectParroquiaEstablecimiento({
                                               pk_parroquia: newValue ? newValue.pk_parroquia : null,
                                               pk_municipio: newValue ? newValue.pk_municipio : null,
                                               nombre_parroquia: newValue ? newValue.nombre_parroquia : null
                                           })
                                       }}
                                       getOptionLabel={(option) => option.nombre_parroquia}
                                       renderInput={(params) => <TextField {...params} label="Parroquia" variant="outlined" />}
                                       />
                                   </Grid>
                                   
                                   {/* <Grid item  md={6} >
                                       <TextField sx={styleCampos}
                                       id="dirpropietario"
                                       label="Dirección Exacta"
                                       placeholder='Direccion exacta del Establecimiento'
                                       multiline
                                       minRows={5}
                                       maxRows={10}
                                       value={direccionEstablecimiento}
                                       onChange={(e) => setEDireccionEstablecimiento(e.target.value)}
                                       
                                       />
                                   </Grid> */}
                                   
                                               
                               </Grid>
                               {/* ubicacion detallada del establecimineto */}
                               <Box component='div'>
                                   <Typography variant="p" color='primary'>Especificación: </Typography>
                               </Box>
                               <Grid container spacing={2} sx={{my:2}}>
                                  <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                        id="zonaestablecimiento"
                                        label="Urbanización/Sector/Zona Industrial"
                                        type="text"
                                        value={ZonaEstablecimiento}
                                        onChange={(e) => setZonaEstablecimiento(e.target.value)}
                                        // color="success" focused
                                                
                                      />
                                    </Grid>
                                   <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                        id="rutaestablecimiento"
                                        label="Avenida/Carrera/Calle/Esquina"
                                        type="text"
                                        value={RutasEstablecimiento}
                                        onChange={(e) => setRutasEstablecimiento(e.target.value)}
                                        // color="success" focused
                                                
                                      />
                                    </Grid>
                                   <Grid item xs={12} md={4}>
                                      <TextField sx={styleCampos}
                                          id="zonaestablecimiento"
                                          label="Edificio/Galpón"
                                          type="text"
                                          value={EspacioEstablecimiento}
                                          onChange={(e) => setEspacioEstablecimiento(e.target.value)}
                                          // color="success" focused
                                                  
                                        />
                                    </Grid>
                                   <Grid item xs={12} md={4}>
                                      <TextField sx={styleCampos}
                                          id="nivelestablecimiento"
                                          label="Piso/Planta/Local"
                                          type="text"
                                          value={NivelEstablecimiento}
                                          onChange={(e) => setNivelEstablecimiento(e.target.value)}
                                          // color="success" focused
                                                  
                                        />
                                    </Grid>
                                    <Grid item  md={4} >
                                      <TextField sx={styleCampos}
                                              id="codigoestablecimineto"
                                              label="Código Postal"
                                              type="number"
                                              value={CodigoPostalEstablecimiento }
                                              onChange={(e) => setCodigoPostalEstablecimiento(e.target.value)}
                                              // color="success" focused
                                      />
                                   </Grid>
                                    <Grid item  md={4} >
                                      <TextField sx={styleCampos}
                                              id="metrosestablecimiento"
                                              label="metros Cuadrados"
                                              type="number"
                                              placeholder='ejemplo: 125,89'
                                              value={MetrosCuadradosEstablecimiento }
                                              onChange={(e) => setMetrosCuadradosEstablecimiento(e.target.value)}
                                              // color="success" focused
                                      />
                                   </Grid>
                                   
                               </Grid>
                               <Grid container spacing={2}>

                                <Grid item  md={6} >
                                       <TextField sx={styleCampos}
                                       id="referenciaestablecimiento"
                                       label="Punto de referencia"
                                       placeholder='Punto de Referencia del establecimineto'
                                       multiline
                                       minRows={5}
                                       maxRows={10}
                                       value={ReferenciaEstablecimiento}
                                       onChange={(e) => setReferenciaEstablecimiento(e.target.value)}
                                       
                                       />
                                   </Grid>
                                   <Grid item  md={6} >
                                        <TextField sx={styleCampos}
                                        id="dirpropietario"
                                        label="Observacion"
                                        placeholder='Nota: puede ingresar una breve descripcion o dejar el campo vacio'
                                        multiline
                                        minRows={5}
                                        maxRows={10}
                                        value={observacionEstablecimiento}
                                        onChange={(e) => setObservacionEstablecimiento(e.target.value)}
                                        
                                        />
                                    </Grid>
                               </Grid>
                           </Box>

                  <Box 
                      sx={{mt:2,float:'right'}}
                    >

                    {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                      Volver
                    </Button> */}
                    
                    <Button type='submit' variant="contained" id='btn_next' color="success" >
                                          
                      Registrar
                    </Button>

                    <ToastContainer />
                  </Box> 
              </Box>

              {/* establecimiento nro 2 de la empresa */}

              <Box component='form' className='form_ciudadano' id='form_step' sx={{ml:'0.5rem'}} onSubmit={HandleSubmitEstablecimiento2Solicitud} >

                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">¿Tiene Segundo Establecimineto? </FormLabel>
                  <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                  >
                      <FormControlLabel value="female" control={<Radio />} label="Si" onClick={() =>{ setCollapseEstablecimiento(true); setCollapseclouseEstablecimiento(false) }} />
                      <FormControlLabel value="male" control={<Radio />} label="No" onClick={ () => { setCollapseEstablecimiento(false); setCollapseclouseEstablecimiento(true)} } />
                                        
                  </RadioGroup>
                </FormControl>
                  
                  <Collapse in={CollapseEstablecimiento}>
                  
                    <Box component='div'>
                      <Typography variant="p" color="primary">Datos de Establecimiento y su Dominio:</Typography>
                    </Box>

                            <Box className='establecimiento_dominio'>
                                <Grid container spacing={2} sx={{my:2}}>
                                    <Grid item  md={4} >
                                        <Autocomplete sx={styleCampos} 
                                        id="establecimiento" 
                                        options={FilterlistSolicitudEstablecimiento }
                                        onChange={(e,newValue) => {
                                          setSelectEstablecimiento2({
                                                pk_tip_establecimiento: newValue ? newValue.fk_tip_establecimiento : null,
                                                descripcion: newValue ? newValue.tipo_estableicmiento : null
                                            })
                                        }}
                                        getOptionLabel={(option) => option.tipo_estableicmiento}
                                        renderInput={(params) => <TextField {...params} label="Tipo de Establecimiento" variant="outlined" />}
                                        />
                                    </Grid>       
                                    <Grid item  md={4} >
                                        <Autocomplete sx={styleCampos} 
                                        id="dominio" 
                                        options={listDominio}
                                        onChange={(e,newValue) => {
                                          setSelectDominio2({
                                                pk_dominio: newValue ? newValue.pk_dominio : null,
                                                tip_dominio: newValue ? newValue.tip_dominio : null
                                            })
                                        }}
                                        getOptionLabel={(option) => option.tip_dominio}
                                        renderInput={(params) => <TextField {...params} label="Tipo de Dominio" variant="outlined" />}
                                        />
                                    </Grid>       
                                    <Grid item  md={4} >
                                        <Autocomplete sx={styleCampos} 
                                        id="estatus" 
                                        options={listEstatus}
                                        onChange={(e,newValue) => {
                                          setSelectEstatus2({
                                                pk_estatus: newValue ? newValue.pk_estatus : null,
                                                tipo_estatus: newValue ? newValue.tipo_estatus : null
                                            })
                                        }}
                                        getOptionLabel={(option) => option.tipo_estatus}
                                        renderInput={(params) => <TextField {...params} label="Estatus" variant="outlined" />}
                                        />
                                    </Grid>       
                                </Grid>
                            </Box>
                      
                    <Box component='div'>
                      <Typography variant="p" color="primary">Contactos y Ubicación:</Typography>
                    </Box>

                      {/* contacto */}
                    <Box>
                                
                      <Grid container spacing={2} sx={{my:2}}>
                                    <Grid item  md={3} >
                                          <TextField sx={styleCampos}
                                                  id="tlfempresapropietario"
                                                  label="Tlf Principal "
                                                  type="text"
                                                  value={tlfFirstEstablecimiento2 }
                                                  onChange={(e) => setTlfFirstEstablecimiento2(e.target.value)}
                                                  // color="success" focused
                                                  
                                          />
                                    </Grid>
                                    <Grid item  md={3} >
                                    <TextField sx={styleCampos}
                                            id="tlf2empresapropietario"
                                            label="Tlf Segundario"
                                            type="text"
                                            value={tlfSecondEstablecimiento2 }
                                            onChange={(e) => setTlfSecondEstablecimiento2(e.target.value)}
                                            // color="success" focused
                                    />
                                    </Grid>
                                    <Grid item  md={3} >
                                    <TextField sx={styleCampos}
                                            id="emailempresa"
                                            label="Correo Principal"
                                            type="text"
                                            placeholder="correomiempresagmail.com"
                                            value={emailFirstEstablecimiento2 }
                                            onChange={(e) => setEmailFirstEstablecimiento2(e.target.value)}
                                            // color="success" focused
                                            />
                                    </Grid>
                                    <Grid item  md={3} >
                                    <TextField sx={styleCampos}
                                            id="email2empresa"
                                            label="Correo Segundario"
                                            type="text"
                                            placeholder="correosegundario@.."
                                            value={emailsecondEstablecimiento2 }
                                            onChange={(e) => setemailsecondEstablecimiento2(e.target.value)}
                                            // color="success" focused
                                    />
                                    </Grid>
                                    
                                                    
                      </Grid>
                    </Box>

                            {/* ubicaicon */}

                            <Box component='div' >
                                <Box component='div'>
                                    <Typography variant="p" color='primary'>Ubicación del Propietario: </Typography>
                                </Box>
                                <Grid container spacing={2} sx={{my:2}}>
                                    <Grid item  md={3} >
                                        <Autocomplete sx={styleCampos} 
                                        id="estado_empresa_establecimiento2" 
                                        options={lisEstado}
                                        onChange={(e,newValue) => {
                                            vaciar_municipio_empresa_establecimineto2() //vacio el campo municipio al cambiar el estado
                                            setSelectEstadoEstablecimiento2({
                                                pk_estado: newValue ? newValue.pk_estado : null,
                                                nombre_estado: newValue ? newValue.nombre_estado : null
                                            })
                                        }}
                                        getOptionLabel={(option) => option.nombre_estado}
                                        renderInput={(params) => <TextField {...params} label="Estado" variant="outlined" />}
                                        />
                                    </Grid>
                                    <Grid item  md={4.5} >
                                        <Autocomplete sx={styleCampos} 
                                        id="municipio_empresa_establecimiento2" 
                                        options={listMunicipioEstadoEstablecimiento2}
                                        onChange={(e,newValue) => {
                                            vaciar_parroquia_empresa_establecimiento2() //vacio el campo parroquia al cambiar municipio
                                            setSelectMunicipioEstablecimiento2({
                                                pk_municipio: newValue ? newValue.pk_municipio : null,
                                                fk_estado: newValue ? newValue.fk_estado : null,
                                                nombre_municipio: newValue ? newValue.nombre_municipio : null
                                            })
                                        }}
                                        getOptionLabel={(option) => option.nombre_municipio}
                                        renderInput={(params) => <TextField {...params} label="Municipio" variant="outlined" />}
                                        />
                                    </Grid>
                                    <Grid item  md={4.5} >
                                        <Autocomplete sx={styleCampos} 
                                        id="parroquia_empresa_establecimiento2" 
                                        options={listParroquiaMunicipioEstablecimiento2}
                                        onChange={(e,newValue) => {
                                            setSelectParroquiaEstablecimiento2({
                                                pk_parroquia: newValue ? newValue.pk_parroquia : null,
                                                pk_municipio: newValue ? newValue.pk_municipio : null,
                                                nombre_parroquia: newValue ? newValue.nombre_parroquia : null
                                            })
                                        }}
                                        getOptionLabel={(option) => option.nombre_parroquia}
                                        renderInput={(params) => <TextField {...params} label="Parroquia" variant="outlined" />}
                                        />
                                    </Grid>
                                    {/* <Grid item  md={6} >
                                        <TextField sx={styleCampos}
                                        id="dirpropietario"
                                        label="Dirección Exacta"
                                        placeholder='Direccion exacta del Establecimiento'
                                        multiline
                                        minRows={5}
                                        maxRows={10}
                                        value={direccionEstablecimiento2}
                                        onChange={(e) => setEDireccionEstablecimiento2(e.target.value)}
                                        
                                        />
                                    </Grid> */}
                                    
                                                
                                </Grid>

                                {/* ubicacion detallada del establecimineto2 */}
                               <Box component='div'>
                                   <Typography variant="p" color='primary'>Especificación: </Typography>
                               </Box>
                               <Grid container spacing={2} sx={{my:2}}>
                                  <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                        id="zonaestablecimiento"
                                        label="urbanización/Sector/Zona Industrial"
                                        type="text"
                                        value={ZonaEstablecimiento2 }
                                        onChange={(e) => setZonaEstablecimiento2(e.target.value)}
                                        // color="success" focused
                                      />
                                    </Grid>
                                   <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                        id="rutaestablecimiento"
                                        label="Avenida/Carrera/Calle/Esquina"
                                        type="text"
                                        value={RutasEstablecimiento2 }
                                        onChange={(e) => setRutasEstablecimiento2(e.target.value)}
                                        // color="success" focused
                                    />
                                    </Grid>
                                   <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                          id="espacioestablecimiento"
                                          label="Edificio/Galpón"
                                          type="text"
                                          value={EspacioEstablecimiento2 }
                                          onChange={(e) => setEspacioEstablecimiento2(e.target.value)}
                                          // color="success" focused
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                      <TextField sx={styleCampos}
                                              id="nivelestablecimiento"
                                              label="Piso/Planta/Local"
                                              type="text"
                                              value={NivelEstablecimiento2 }
                                              onChange={(e) => setNivelEstablecimiento2(e.target.value)}
                                              // color="success" focused
                                          />
                                    </Grid>
                                    
                                    <Grid item  md={4} >
                                      <TextField sx={styleCampos}
                                              id="email2empresa"
                                              label="Código Postal"
                                              type="number"
                                              value={CodigoPostalEstablecimiento2 }
                                              onChange={(e) => setCodigoPostalEstablecimiento2(e.target.value)}
                                              // color="success" focused
                                      />
                                   </Grid>
                                   <Grid item  md={4} >
                                      <TextField sx={styleCampos}
                                              id="email2empresa"
                                              label="metros Cuadrados"
                                              type="number"
                                              placeholder='ejemplo: 125,89'
                                              value={MetrosCuadradosEstablecimiento2}
                                              onChange={(e) => setMetrosCuadradosEstablecimiento2(e.target.value)}
                                              // color="success" focused
                                      />
                                   </Grid>
                                   
                               </Grid>
                               <Grid container spacing={2} sx={{my:2}}>
                                  <Grid item  md={6} >
                                       <TextField sx={styleCampos}
                                       id="referenciaestablecimiento"
                                       label="Punto de referencia"
                                       placeholder='Punto de Referencia del establecimineto'
                                       multiline
                                       minRows={5}
                                       maxRows={10}
                                       value={ReferenciaEstablecimiento2}
                                       onChange={(e) => setReferenciaEstablecimiento2(e.target.value)}
                                       
                                       />
                                   </Grid>
                                   <Grid item  md={6} >
                                        <TextField sx={styleCampos}
                                        id="dirpropietario"
                                        label="Observacion"
                                        placeholder='Nota: puede ingresar una breve descripcion o dejar el campo vacio'
                                        multiline
                                        minRows={5}
                                        maxRows={10}
                                        value={observacionEstablecimiento2}
                                        onChange={(e) => setObservacionEstablecimiento2(e.target.value)}
                                        
                                        />
                                    </Grid>
                               </Grid>
                            </Box>

                    <Box 
                        sx={{mt:2,float:'right'}}
                      >

                      {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                        Volver
                      </Button> */}
                      
                      <Button type='submit' variant="contained" id='btn_next' color="success" >
                                            
                        Registrar
                      </Button>

                      <ToastContainer />
                    </Box> 
                  </Collapse>

                  <Box>
                    <Collapse in={CollapseclouseEstablecimiento} >
                      
                      <Box component='div'>
                        <Typography variant="h6" color="primary">
                          No tiene Segundo Establezamiento. Por favor dar en Siguiente.
                        </Typography>
                      </Box>
                      <Box 
                        sx={{mt:2,float:'right'}}
                        >
                        {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button> */}
                        <Button variant="contained" id='btn_next' color="info" onClick={() => nextformstep()}>
                                              
                          Siguiente
                        </Button>

                      </Box> 
                    </Collapse>
                  </Box>
              </Box>
              {/* establecimiento nro 3 de la empresa */}

              <Box component='form' className='form_ciudadano' id='form_step' onSubmit={HandleSubmitEstablecimiento3Solicitud} >

                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">¿Tiene Tercer Establecimineto? </FormLabel>
                  <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                  >
                      <FormControlLabel value="female" control={<Radio />} label="Si" onClick={() =>{ setCollapseEstablecimiento2(true); setCollapseclouseEstablecimiento2(false) }} />
                      <FormControlLabel value="male" control={<Radio />} label="No" onClick={ () => { setCollapseEstablecimiento2(false); setCollapseclouseEstablecimiento2(true)} } />
                                        
                  </RadioGroup>
                </FormControl>
                  
                  <Collapse in={CollapseEstablecimiento2}>
                   <Alert severity="info">
                      Ya falta Poco
                    </Alert>
                    <Box component='div'>
                      <Typography variant="p" color="primary">Datos de Establecimiento y su Dominio:</Typography>
                    </Box>

                            <Box className='establecimiento_dominio'>
                                <Grid container spacing={2} sx={{my:2}}>
                                    <Grid item  md={4} >
                                        <Autocomplete sx={styleCampos} 
                                        id="establecimiento" 
                                        options={FilterlistSolicitudEstablecimiento}
                                        onChange={(e,newValue) => {
                                          setSelectEstablecimiento3({
                                                pk_tip_establecimiento: newValue ? newValue.fk_tip_establecimiento : null,
                                                descripcion: newValue ? newValue.tipo_estableicmiento : null
                                            })
                                        }}
                                        getOptionLabel={(option) => option.tipo_estableicmiento}
                                        renderInput={(params) => <TextField {...params} label="Tipo de Establecimiento" variant="outlined" />}
                                        />
                                    </Grid>       
                                    <Grid item  md={4} >
                                        <Autocomplete sx={styleCampos} 
                                        id="dominio" 
                                        options={listDominio}
                                        onChange={(e,newValue) => {
                                          setSelectDominio3({
                                                pk_dominio: newValue ? newValue.pk_dominio : null,
                                                tip_dominio: newValue ? newValue.tip_dominio : null
                                            })
                                        }}
                                        getOptionLabel={(option) => option.tip_dominio}
                                        renderInput={(params) => <TextField {...params} label="Tipo de Dominio" variant="outlined" />}
                                        />
                                    </Grid>       
                                    <Grid item  md={4} >
                                        <Autocomplete sx={styleCampos} 
                                        id="estatus" 
                                        options={listEstatus}
                                        onChange={(e,newValue) => {
                                          setSelectEstatus3({
                                                pk_estatus: newValue ? newValue.pk_estatus : null,
                                                tipo_estatus: newValue ? newValue.tipo_estatus : null
                                            })
                                        }}
                                        getOptionLabel={(option) => option.tipo_estatus}
                                        renderInput={(params) => <TextField {...params} label="Estatus" variant="outlined" />}
                                        />
                                    </Grid>       
                                </Grid>
                            </Box>
                      
                    <Box component='div'>
                      <Typography variant="p" color="primary">Contactos y Ubicación:</Typography>
                    </Box>

                      {/* contacto */}
                    <Box>
                                
                      <Grid container spacing={2} sx={{my:2}}>
                                    <Grid item  md={3} >
                                          <TextField sx={styleCampos}
                                                  id="tlfempresapropietario"
                                                  label="Tlf Principal "
                                                  type="text"
                                                  value={tlfFirstEstablecimiento3 }
                                                  onChange={(e) => setTlfFirstEstablecimiento3(e.target.value)}
                                                  // color="success" focused
                                                  
                                          />
                                    </Grid>
                                    <Grid item  md={3} >
                                    <TextField sx={styleCampos}
                                            id="tlf2empresapropietario"
                                            label="Tlf Segundario"
                                            type="text"
                                            value={tlfSecondEstablecimiento3 }
                                            onChange={(e) => setTlfSecondEstablecimiento3(e.target.value)}
                                            // color="success" focused
                                    />
                                    </Grid>
                                    <Grid item  md={3} >
                                    <TextField sx={styleCampos}
                                            id="emailempresa"
                                            label="Correo Principal"
                                            type="text"
                                            placeholder="correomiempresagmail.com"
                                            value={emailFirstEstablecimiento3 }
                                            onChange={(e) => setEmailFirstEstablecimiento3(e.target.value)}
                                            // color="success" focused
                                            />
                                    </Grid>
                                    <Grid item  md={3} >
                                    <TextField sx={styleCampos}
                                            id="email2empresa"
                                            label="Correo Segundario"
                                            type="text"
                                            placeholder="correosegundario@.."
                                            value={emailsecondEstablecimiento3 }
                                            onChange={(e) => setemailsecondEstablecimiento3(e.target.value)}
                                            // color="success" focused
                                    />
                                    </Grid>
                                    
                                                    
                      </Grid>
                    </Box>

                            {/* ubicaicon */}

                            <Box component='div' >
                                <Box component='div'>
                                    <Typography variant="p" color='primary'>Ubicación del Propietario: </Typography>
                                </Box>
                                <Grid container spacing={2} sx={{my:2}}>
                                    <Grid item  md={3} >
                                        <Autocomplete sx={styleCampos} 
                                        id="estado_empresa_establecimiento3" 
                                        options={lisEstado}
                                        onChange={(e,newValue) => {
                                            vaciar_municipio_empresa_establecimineto3() //vacio el campo municipio al cambiar el estado
                                            setSelectEstadoEstablecimiento3({
                                                pk_estado: newValue ? newValue.pk_estado : null,
                                                nombre_estado: newValue ? newValue.nombre_estado : null
                                            })
                                        }}
                                        getOptionLabel={(option) => option.nombre_estado}
                                        renderInput={(params) => <TextField {...params} label="Estado" variant="outlined" />}
                                        />
                                    </Grid>
                                    <Grid item  md={4.5} >
                                        <Autocomplete sx={styleCampos} 
                                        id="municipio_empresa_establecimiento3" 
                                        options={listMunicipioEstadoEstablecimiento3}
                                        onChange={(e,newValue) => {
                                            vaciar_parroquia_empresa_establecimiento3() //vacio el campo parroquia al cambiar municipio
                                            setSelectMunicipioEstablecimiento3({
                                                pk_municipio: newValue ? newValue.pk_municipio : null,
                                                fk_estado: newValue ? newValue.fk_estado : null,
                                                nombre_municipio: newValue ? newValue.nombre_municipio : null
                                            })
                                        }}
                                        getOptionLabel={(option) => option.nombre_municipio}
                                        renderInput={(params) => <TextField {...params} label="Municipio" variant="outlined" />}
                                        />
                                    </Grid>
                                    <Grid item  md={4.5} >
                                        <Autocomplete sx={styleCampos} 
                                        id="parroquia_empresa_establecimiento3" 
                                        options={listParroquiaMunicipioEstablecimiento3}
                                        onChange={(e,newValue) => {
                                            setSelectParroquiaEstablecimiento3({
                                                pk_parroquia: newValue ? newValue.pk_parroquia : null,
                                                pk_municipio: newValue ? newValue.pk_municipio : null,
                                                nombre_parroquia: newValue ? newValue.nombre_parroquia : null
                                            })
                                        }}
                                        getOptionLabel={(option) => option.nombre_parroquia}
                                        renderInput={(params) => <TextField {...params} label="Parroquia" variant="outlined" />}
                                        />
                                    </Grid>
                                    
                                </Grid>

                                {/* ubicacion detallada del establecimineto 3 */}
                               <Box component='div'>
                                   <Typography variant="p" color='primary'>Especificación: </Typography>
                               </Box>
                               <Grid container spacing={2} sx={{my:2}}>
                                  <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                        id="zonaestablecimiento"
                                        label="urbanización/Sector/Zona Industrial"
                                        type="text"
                                        value={ZonaEstablecimiento3 }
                                        onChange={(e) => setZonaEstablecimiento3(e.target.value)}
                                        // color="success" focused
                                      />
                                    </Grid>
                                   <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                        id="rutaestablecimiento"
                                        label="Avenida/Carrera/Calle/Esquina"
                                        type="text"
                                        value={RutasEstablecimiento3 }
                                        onChange={(e) => setRutasEstablecimiento3(e.target.value)}
                                        // color="success" focused
                                    />
                                    </Grid>
                                   <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                          id="espacioestablecimiento"
                                          label="Edificio/Galpón"
                                          type="text"
                                          value={EspacioEstablecimiento3 }
                                          onChange={(e) => setEspacioEstablecimiento3(e.target.value)}
                                          // color="success" focused
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                      <TextField sx={styleCampos}
                                              id="nivelestablecimiento"
                                              label="Piso/Planta/Local"
                                              type="text"
                                              value={NivelEstablecimiento3 }
                                              onChange={(e) => setNivelEstablecimiento3(e.target.value)}
                                              // color="success" focused
                                          />
                                    </Grid>
                                    
                                    <Grid item  md={4} >
                                      <TextField sx={styleCampos}
                                              id="email2empresa"
                                              label="Código Postal"
                                              type="number"
                                              value={CodigoPostalEstablecimiento3 }
                                              onChange={(e) => setCodigoPostalEstablecimiento3(e.target.value)}
                                              // color="success" focused
                                      />
                                   </Grid>
                                   <Grid item  md={4} >
                                      <TextField sx={styleCampos}
                                              id="email2empresa"
                                              label="metros Cuadrados"
                                              type="number"
                                              placeholder='ejemplo: 125,89'
                                              value={MetrosCuadradosEstablecimiento3}
                                              onChange={(e) => setMetrosCuadradosEstablecimiento3(e.target.value)}
                                              // color="success" focused
                                      />
                                   </Grid>
                               </Grid>

                               <Grid container spacing={2} sx={{my:2}}>
                                <Grid item  md={6} >
                                        <TextField sx={styleCampos}
                                        id="referenciaestablecimiento"
                                        label="Punto de referencia"
                                        placeholder='Punto de Referencia del establecimineto'
                                        multiline
                                        minRows={5}
                                        maxRows={10}
                                        value={ReferenciaEstablecimiento3}
                                        onChange={(e) => setReferenciaEstablecimiento3(e.target.value)}
                                        
                                        />
                                    </Grid>
                                    <Grid item  md={6} >
                                          <TextField sx={styleCampos}
                                          id="dirpropietario"
                                          label="Observacion"
                                          placeholder='Nota: puede ingresar una breve descripcion o dejar el campo vacio'
                                          multiline
                                          minRows={5}
                                          maxRows={10}
                                          value={observacionEstablecimiento3}
                                          onChange={(e) => setObservacionEstablecimiento3(e.target.value)}
                                          
                                          />
                                    </Grid>
                               </Grid>
                            </Box>

                    <Box 
                        sx={{mt:2,float:'right'}}
                      >

                      {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                        Volver
                      </Button> */}
                      
                      <Button type='submit' variant="contained" id='btn_next' color="success" >
                                            
                        Registrar
                      </Button>

                      <ToastContainer />
                    </Box> 
                  </Collapse>

                  <Box>
                    <Collapse in={CollapseclouseEstablecimiento2} >
                      
                      <Box component='div'>
                        <Typography variant="h6" color="primary">
                          No tiene Tercer Establezamiento. Por favor dar en Siguiente.
                          <Alert severity="info">
                            Ya falta Poco
                          </Alert>
                        </Typography>
                      </Box>
                      <Box 
                        sx={{mt:2,float:'right'}}
                        >
                        {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button> */}
                        <Button variant="contained" id='btn_next' color="info" onClick={() => nextformstep()}>
                                              
                          Siguiente
                        </Button>

                      </Box> 
                    </Collapse>
                  </Box>
              </Box>

              {/*  productos inportados  */}
              
              <Box component='form'  className='form_ciudadano' id='form_step' onSubmit={HandleSubmitProductImportadosSolicitud}
                sx={{minHeight:'auto',maxHeight:'600px',overflow:'auto'}}>
                  
                      <Box component='div'>
                        <Typography variant="h6" color="primary">ingrese sus productos Importados :</Typography>
                      </Box>
                      <Box component='div'>
                        <Grid container spacing={2} sx={{py:1,ml:'1px',mr:'1px'}}>

                          {/* <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Nacionalidad</InputLabel>
                                <Select sx={styleCampos}
                                    labelId="demo-simple-select-label"
                                    id="select_nac"
                                    value={NacpropietarioProductImport  }
                                    label="Nacionalidad"
                                    onChange={(e) => setNacpropietarioProductImport(e.target.value)}
                                    >
                                    <MenuItem value='V'>V</MenuItem>
                                    <MenuItem value='E'>E</MenuItem>
                                                  
                                </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField sx={styleCampos}
                                id="propietarioProductImport   "
                                label="Cedula propietario"
                                placeholder='ejemplo: 1234567'
                                value={propietarioProductImport}
                                onChange={(e) => setpropietarioProductImport(e.target.value)}
                                                                                            
                            />
                          </Grid> */}

                          <Grid item xs={12} md={2.9}>
                            <TextField sx={styleCampos}
                                id="NombrePropietarioimportado"
                                label="Nombre del propietario"
                                value={NombrePropietairoProductImport }
                                onChange={(e) => setNombrePropietairoProductImport(e.target.value)}
                                                                                            
                            />
                          </Grid>
                          <Grid item xs={12} md={2.9}>
                            <TextField sx={styleCampos}
                                id="ApellidoPropietarioimportado"
                                label="Apellido del propietario"
                                value={ApellidoPropietairoProductImport  }
                                onChange={(e) => setApellidoPropietairoProductImport(e.target.value)}
                                                                                            
                            />
                          </Grid>
                          <Grid item xs={12} md={2.9}>
                            <TextField sx={styleCampos}
                                id="registroSanitarioProductImport"
                                label="Registro Sanitario"
                                value={registroSanitarioProductImport }
                                onChange={(e) => setregistroSanitarioProductImport(e.target.value)}
                                                                                            
                            />
                          </Grid>
                          <Grid item xs={12} md={2.9}>
                            <TextField sx={styleCampos}
                                id="LaboratorioFabricanteproductimport "
                                label="Laboratio Fabricante"
                                value={LaboratorioFabricanteproductimport  }
                                onChange={(e) => setLaboratorioFabricanteproductimport(e.target.value)}
                                                                                            
                            />
                          </Grid>
                          <Grid item xs={12} md={2.9}>
                            <TextField sx={styleCampos}
                                id="FarmaceuticoProductImport    "
                                label="Farmaceútico patrocinante"
                                value={FarmaceuticoProductImport }
                                onChange={(e) => setFarmaceuticoProductImport(e.target.value)}
                                                                                            
                            />
                          </Grid>
                          <Grid item xs={12} md={2.9}>
                            <TextField sx={styleCampos}
                                id="NombreProductoimportado"
                                label="nombre del producto"
                                value={NombreProductoimportado}
                                onChange={(e) => setNombreProductoimportado(e.target.value)}
                                                                                            
                            />
                          </Grid>
                          {/* <Grid item xs={12} md={2.9}>
                            <TextField sx={styleCampos}
                                id="PresentaiconProductoimportado"
                                label="Presentación del producto"
                                value={PresentacionProductoimportado}
                                onChange={(e) => setPresentacionProductoimportado(e.target.value)}
                                                                                            
                            />
                          </Grid> */}

                          <Grid item  md={2.9} >
                            <Autocomplete sx={styleCampos} 
                            id="paisproductimport" 
                            options={lisPaisesProductosimportadosEmpresa}
                            onChange={(e,newValue) => {
                              setPaisProcedenteProductImport({
                                    pk_pais: newValue ? newValue.pk_pais : null,
                                    nombre_pais: newValue ? newValue.nombre_pais : null
                                })
                            }}
                            getOptionLabel={(option) => option.nombre_pais}
                            renderInput={(params) => <TextField {...params} label="País Procedente" variant="outlined" />}
                            />
                          </Grid>

                          <Grid item  md={2.9} >
                            <Autocomplete sx={styleCampos} 
                            id="presentacionproductimport" 
                            options={lisPresentaiconProductImportadosEmpresa}
                            onChange={(e,newValue) => {
                              setPresentacionProductoimportado({
                                    pk_present_product_import: newValue ? newValue.pk_present_product_import : null,
                                    presentacion_product_import: newValue ? newValue.presentacion_product_import : null
                                })
                            }}
                            getOptionLabel={(option) => option.presentacion_product_import}
                            renderInput={(params) => <TextField {...params} label="Presentacion del Producto" variant="outlined" />}
                            />
                          </Grid>
                            <Grid item xs={12} md={2.9}>
                          <Collapse in={CollapsePresentProductImport}>
                              <TextField sx={styleCampos}
                                  id="otraPresentProductImport"
                                  label="Nueva Presentación"
                                  value={OtraPresentacionProductImport }
                                  onChange={(e) => setOtraPresentacionProductImport(e.target.value)}
                                                                                              
                              />
                          </Collapse>
                            </Grid>
                          
                          
                          {/* <Grid item xs={12} md={5}>
                            <TextField sx={styleCampos}
                                id="PaisProcedenteProductImport  "
                                label="País Procedente"
                                placeholder='País donde proviene el producto'
                                value={PaisProcedenteProductImport }
                                onChange={(e) => setPaisProcedenteProductImport(e.target.value)}
                                                                                            
                            />
                          </Grid> */}

                          


                          <Grid item xs={12} md={3}>
                            <Fab color="success" aria-label="add" onClick={addInputProductosImportados}>
                              <AddIcon />
                            </Fab>
                            {/* <Button variant="outlined" color="error" startIcon={<ControlPointTwoToneIcon />} onClick={addInputProductosImportados}>
                              Agregar a Lista
                            </Button>                     */}
                          </Grid>            

                        </Grid> 

                      </Box>

                      {/* --------------------------------------- */}
                            {/* //? CREACION DE CAMPOS DOM PRODUCTOS IMPORTADOS*/}
                      {/* --------------------------------------- */}
                      <Box component='div' sx={{ml:'1rem'}}>
                        <Typography variant="h6" color="primary">Listado a Registrar: </Typography>
                        {inputsdomProductImportados .map((item) =>(
                          <Box component='div' className="Container_DOM_Inputs" id={item.NombreProductoimportado} sx={{mt:2}} key={item.NombreProductoimportado} >
                              <Grid container spacing={2}>

                                <Grid item xs={12} md={4}>
                                    {/* <TextField sx={styleCampos}
                                      id="cedulapropietario"
                                      label="Cédula propietario"
                                      type="text"
                                      defaultValue={item.propietarioProductImport }
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    /> */}
                                    <TextField sx={styleCampos}
                                      id="datospropietario"
                                      label="Datos del propietario"
                                      type="text"
                                      defaultValue={item.datacedulapropietario }
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  
                                  <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                      id="nombreproducto"
                                      label="Nombre de Producto"
                                      type="text"
                                      defaultValue={item.NombreProductoimportado}
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  
                                  <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                      id="presentacionproducto"
                                      label="Presentancion del Producto"
                                      type="text"
                                      defaultValue={item.PresentacionProductImport}
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                      id="registrosaniatario"
                                      label="Registro Sanitario"
                                      type="text"
                                      defaultValue={item.registroSanitarioProductImport }
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                      id="paisprocedente"
                                      label="País Procedente del Producto"
                                      type="text"
                                      defaultValue={item.PaisProcedenteProductImport  }
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                      id="labfabricante"
                                      label="Laboratorio Fabricante"
                                      type="text"
                                      defaultValue={item.LaboratorioFabricanteproductimport  }
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                      id="farmaceuticopatrocinante"
                                      label="Farmaceútico Patrocinante"
                                      type="text"
                                      defaultValue={item.FarmaceuticoProductImport  }
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  
                                  
                                  {/* Evento remover campo */}
                                  <Grid item xs={12} md={3}>
                                  <Fab color="error" aria-label="add" onClick={() => DeleteInputProductImportados(item.NombreProductoimportado)}>
                                    <ClearIcon />
                                  </Fab>
                                    {/* <Button variant="outlined" color="warning" startIcon={<HighlightOffTwoToneIcon />} onClick={() => DeleteInputProductImportados(item.NombreProductoimportado)}>
                                      Eliminar de lista
                                    </Button> */}
                                  </Grid>
                                
                                </Grid>
                            </Box>

                          ))}
                      </Box>

                      
                      <Box 
                          sx={{mt:2,float:'right'}}
                        >
                        {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button> */}
                        <Button type='submit' variant="contained" id='btn_next' color="success" disabled={disabledSubmitProductImportados } >
                                              
                          Registrar
                        </Button>

                        <ToastContainer />
                      </Box> 
              </Box>

              {/* formas del producto */}
              
              <Box component='form' className='form_ciudadano' id='form_step' onSubmit={HandleSubmitFormasProductSolicitud}
                sx={{minHeight:'auto',maxHeight:'600px',overflow:'auto'}}>

                  <Box>
                    <Collapse in={CollapseForma}>
                    
                      <Box component='div'>
                        <Typography variant="h6" color="primary">Seleccionar las Formas de Producto de su empresa:</Typography>
                      </Box>
                      <Box component='div'>
                        <Grid container spacing={2} sx={{py:1}}>
                          {/* <Grid item xs={12} md={6}>
                            <TextField sx={styleCampos}
                              id="activempresa"
                              label="Actividad de Empresa"
                              defaultValue={selectActivEmpresa.activ_economica}
                              InputProps={{
                                readOnly: true,
                              }}
                              color="success" focused
                            />
                          </Grid> */}
                          <Grid item xs={12} md={6}>
                              <Autocomplete sx={styleCampos}
                                      id="select_tipo_formas" 
                                      options={FilterlistFormaProductArea}
                                      onChange={(e, newValue) => {
                                          
                                        setSelectFormasProductosEmpresa({
                                              pk_area_forma : newValue.pk_area_forma,
                                              fk_area : newValue.fk_area,
                                              area : newValue.area,
                                              pk_forma_product : newValue.pk_forma_product,
                                              forma_producto: newValue.forma_producto,
                                          });
                                      }}
                                      getOptionLabel={(option) => option.forma_producto}
                                      renderInput={(params) => <TextField {...params} label="Formas del Producto" variant="outlined" />}
                                      freeSolo
                              />
                          </Grid>
                          

                          <Grid item xs={12} md={3}>
                            <Fab color="success" aria-label="add" onClick={addInputFormaProductos}>
                              <AddIcon />
                            </Fab>
                            {/* <Button variant="outlined" color="error" startIcon={<ControlPointTwoToneIcon />} onClick={addInputFormaProductos}>
                              Agregar a Lista
                            </Button>                     */}
                          </Grid>            

                        </Grid> 

                      </Box>

                      {/* --------------------------------------- */}
                            {/* //? CREACION DE CAMPOS DOM FORMAS*/}
                      {/* --------------------------------------- */}
                      <Box>
                        <Typography variant="h6" color="primary">Listado a Registrar: </Typography>
                        {inputsdomFormasProduct.map((item) =>(
                          <Box component='div' className="Container_DOM_Inputs" id={item.pk_forma_product} sx={{mt:2}} key={item.pk_forma_product} >
                              <Grid container spacing={2}>
                                  
                                  <Grid item xs={12} md={4}>
                                    <TextField sx={styleCampos}
                                      id="nombreoperacion"
                                      label="Nombre de Operación"
                                      type="text"
                                      defaultValue={item.forma_producto}
                                      InputProps={{
                                        readOnly: true,
                                      }}
                                      color="success" focused
                                    />
                                  </Grid>
                                  
                                  {/* Evento remover campo */}
                                  <Grid item xs={12} md={3}>
                                    <Fab color="error" aria-label="add" onClick={() => DeleteInputFormaProductos(item.pk_forma_product)}>
                                      <ClearIcon />
                                    </Fab>
                                    {/* <Button variant="outlined" color="warning" startIcon={<HighlightOffTwoToneIcon />} onClick={() => DeleteInputFormaProductos(item.pk_forma_product)}>
                                      Eliminar de lista
                                    </Button> */}
                                  </Grid>
                                
                                </Grid>
                            </Box>

                          ))}
                      </Box>

                      
                      <Box 
                          sx={{mt:2,float:'right'}}
                        >
                        {/* <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                          Volver
                        </Button> */}
                        <Button type='submit' variant="contained" id='btn_next' color="success" disabled={disabledSubmitFormasProduct} >
                                              
                          Registrar
                        </Button>

                        <ToastContainer />
                      </Box> 
                    </Collapse>
                  </Box>
                  
                  {/* SINO HAY FORMA POR EL AREA SELECCIONADA */}

                  <Box>
                        <Collapse in={CollapseForma2} >
                          
                          <Box component='div'>
                            <Typography variant="p" color="secondary">
                              El Área <strong>{selectAreaEmpresa.descripcion}</strong> seleccionada anteriormente no tiene para seleccionar Formas de Productos. Puede continuar.
                            </Typography>
                          </Box>
                          <Box 
                            sx={{mt:2,float:'right'}}
                            >
                            <Button variant="contained" id='btn_next' color="warning" sx={{mr:2}} onClick={() => beforeformstep()} >
                              Volver
                            </Button>
                            <Button type='submit' variant="contained" id='btn_next' color="success">
                                                  
                              Culminar
                            </Button>

                          </Box> 
                        </Collapse>
                      </Box>
              </Box>
                  
              
              

          </Box>

        
        </Box>
      </Box>
    </>
  )
}

export default BodySolicitud