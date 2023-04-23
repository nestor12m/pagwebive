
// VARIABLES
const formulario = document.querySelector(".formulario2");
const selecionrOpcion = document.querySelector("#Tipo_elemento");
const elementoComputador = document.querySelector("#Contenedor_computador");
// const elementoMonitor = document.querySelector("#Contenedor_Monitor");
// const elementoTeclado = document.querySelector("#Contenedor_teclado");
// const elementoMouse = document.querySelector("#Contenedor_mouse");
const elementoImpresoras = document.querySelector("#Contenedor_impresora");
const elementoScanner = document.querySelector("#Contenedor_scanner");
const botonenviarpc = document.querySelector("#bnt_envirdts_pc");

const cedulaFuncionario = document.querySelector("#Cedula");
const nombreFuncionario = document.querySelector("#nombre_Funcionario");
const despachoFuncionario = document.querySelector("#Despacho");
const Departamento = document.querySelector("#Departamento");
const Seccional = document.querySelector("#Seccional");
const Municipio = document.querySelector("#Municipio");
const Sede = document.querySelector("#Sede");
const direccionFuncionario = document.querySelector("#direccion");

const opcioElementoComputador = document.querySelector("#Opcion_elemento_computador");
const tipoMarcaComputador = document.querySelector("#tipo_marca_computador");
const tipoSerialComputador = document.querySelector("#tipoSerialComputador");
const tipoModeloComputador = document.querySelector("#tipoModeloComputador");
const tipoplacaComputador = document.querySelector("#tipoplacaComputador");
const controlinvetariocpu = document.querySelector("#controlinvetariocpu");
const mantenimientocpu = document.querySelector("#mantenimientocpu");
const Procesadorcpu = document.querySelector("#Procesadorcpu");
const memoria = document.querySelector("#memoria");
const discoduro = document.querySelector("#discoduro");
const antivirus = document.querySelector("#antivirus");
const sistemaoperativo = document.querySelector("#sistemaoperativo");
const versionsistemaoperativo = document.querySelector("#versionsistemaoperativo");
const direccionip = document.querySelector("#direccionip");
const marcateclado = document.querySelector("#marcateclado");
const Serialteclado = document.querySelector("#Serialteclado");
const placateclado = document.querySelector("#placateclado");
const controlinventarioteclado = document.querySelector("#controlinventarioteclado");
const marcamouse = document.querySelector("#marcamouse");
const serialmouse = document.querySelector("#serialmouse");
const placamouse = document.querySelector("#placamouse");
const controlinventariomouse = document.querySelector("#controlinventariomouse");
const marcamonitor= document.querySelector("#marcamonitor");
const serialmonitor = document.querySelector("#serialmonitor");
const placamonitor = document.querySelector("#placamonitor");
const controlinventariomonitor = document.querySelector("#controlinventariomonitor");

const divHTML = document.querySelector(".resultado");



let datos = [

     funcionario = {
        DEPARTAMENTO:"",
        MUNICIPIO:"",
        SECCIONAL:"",
        SEDE:"",
        JUZGADO:"",
        DIRECCION:"",
        CEDULA: "",
        RESPONSABLE:"",
    
    },
    
     computador ={
      TIPO_ELEMENTO:"",
      NOMBRE_CI:"",
      MARCA:"",
      MODELO:"",
      SERIAL:"",
      PLACA:"",
      CONTROL_DE_INVENTARIO_CPU:"",
      CONTROL_DE_MANTENIMIENTO_CPU:"",
      PROCESADOR:"",
      MEMORIA:"",
      DISCO_DURO:"",
      ANTIVIRUS:"",
      SISTEMA_OPERATIVO:"",
      VERSION_SISTEMA_OPERATIVO:"",
      DIRECCION_IP:"",
      MARCA_TECLADO:"",
      SERIAL_TECLADO:"",
      PLACA_TECLADO:"",
      CONTROL_INVENTARIO_ETB_TECLADO:"",
      MARCA_MOUSE:"",
      SERIAL_MOUSE:"",
      PLACA_MOUSE:"",
      CONTROL_INVENTARIO_ETB_MOUSE:"",
      MARCA_MONITOR:"",
      SERIAL_MONITOR:"",
      PLACA_MONITOR:"",
      CONTROL_INVENTARIO_ETB_MONITOR:"",
     }
    
];


 datoGeneral = {
    id: Date.now(),
    datos

 }



 datos = [...datos, datoGeneral ];

 formulario.reset();
console.log(datos)

// ADDEVENTLISENER

selecionrOpcion.addEventListener("change", (e) =>{
 
    console.log("cambiando opcion..........")
    console.log(e.target.value)
    opcionSelecionada = e.target.value;
    cambiarTipoElemento(opcionSelecionada);
});


botonenviarpc.addEventListener("click",(e)=>{
    e.preventDefault();
    
    obtenerDatosPc();
    mostrarDatosHtml();
    formulario.reset();
});


 // cuando el documento esta listo
//  document.addEventListener("DOMContentLoaded", () =>{
//     datos = JSON.parse(localStorage.getItem("datosg") || [])
//     console.log(datos);
    
        
//     })



// FUNCIONES


function cambiarTipoElemento(opcion){
  if(opcion ==="Computador"){
    elementoComputador.style.display = "flex";
    
  }
  // else if(opcion ==="Monitor"){
  //   elementoMonitor.style.display = "flex";
  // }
  // else if(opcion ==="Teclado"){
  //   elementoTeclado.style.display = "flex";
  // }
  // else if(opcion ==="Mouse"){
  //   elementoMouse.style.display = "flex";
  // }
  else if(opcion ==="Impresoras"){
    elementoImpresoras.style.display = "flex";
  }
  else if(opcion ==="Scanner"){
    elementoScanner.style.display = "flex";
  }
  else {
    console.log("falso")
  }
}

// funcion obtiene los datos delos input del computador y los guarda en el objeto

function obtenerDatosPc(){
    console.log("haciendo click desde la funcion...");

    // recoleccion de datos de funcionario

    funcionario.CEDULA= parseInt(cedulaFuncionario.value);
    funcionario.RESPONSABLE = nombreFuncionario.value;
    funcionario.JUZGADO = despachoFuncionario.value;
    funcionario.DIRECCION = direccionFuncionario.value;
    funcionario.DEPARTAMENTO = Departamento.value;
    funcionario.MUNICIPIO = Municipio.value;
    funcionario.SECCIONAL = Seccional.value;
    funcionario.SEDE = Sede.value;
   
  
    console.log(datos)

    // recoleccion de datos de computador

    computador.TIPO_ELEMENTO = opcioElementoComputador.value;
    computador.MARCA = tipoMarcaComputador.value;
    computador.MODELO = tipoModeloComputador.value;
    computador.SERIAL = tipoSerialComputador.value;
    computador.PLACA = tipoplacaComputador.value;
    computador. CONTROL_DE_INVENTARIO_CPU = controlinvetariocpu.value;
    computador.CONTROL_DE_MANTENIMIENTO_CPU = mantenimientocpu.value;
    computador.PROCESADOR = Procesadorcpu.value;
    computador.MEMORIA = memoria.value;
    computador.DISCO_DURO = discoduro.value;
    computador.ANTIVIRUS = antivirus.value;
    computador.SISTEMA_OPERATIVO =sistemaoperativo.value;
    computador.VERSION_SISTEMA_OPERATIVO = versionsistemaoperativo.value;
    computador.DIRECCION_IP = direccionip.value;
    computador.MARCA_TECLADO = marcateclado.value;
    computador.SERIAL_TECLADO = Serialteclado.value;
    computador.PLACA_TECLADO = placateclado.value;
    computador.CONTROL_INVENTARIO_ETB_TECLADO = controlinventarioteclado.value;
    computador.MARCA_MOUSE = marcamouse.value;
    computador.SERIAL_MOUSE = serialmouse.value;
    computador.PLACA_MOUSE = placamouse.value;
    computador.CONTROL_INVENTARIO_ETB_MOUSE = controlinventariomouse.value;
    computador.MARCA_MONITOR = marcamonitor.value;
    computador.SERIAL_MONITOR = serialmonitor.value;
    computador.PLACA_MONITOR = placamonitor.value;
    computador.CONTROL_INVENTARIO_ETB_MONITOR = controlinventariomonitor.value;

  

}

function mostrarDatosHtml(){

  const {DEPARTAMENTO, SECCIONAL, MUNICIPIO, DIRECCION, SEDE, JUZGADO, RESPONSABLE, CEDULA} = datos;
  const {TIPO_ELEMENTO, NOMBRE_CI, MARCA, MODELO,  SERIAL, PLACA, CONTROL_DE_INVENTARIO_CPU,
    CONTROL_DE_MANTENIMIENTO_CPU, PROCESADOR, MEMORIA , DISCO_DURO, ANTIVIRUS, SISTEMA_OPERATIVO, VERSION_SISTEMA_OPERATIVO, DIRECCION_IP, MARCA_TECLADO
    ,SERIAL_TECLADO, PLACA_TECLADO, CONTROL_INVENTARIO_ETB_TECLADO, MARCA_MOUSE, SERIAL_MOUSE, PLACA_MOUSE
   ,CONTROL_INVENTARIO_ETB_MOUSE,MARCA_MONITOR, SERIAL_MONITOR, PLACA_MONITOR, CONTROL_INVENTARIO_ETB_MONITOR} = funcionario;
  const contenido = `
    
  <div class="datos_bd">
  <div class="item_bd"><p class="parrafotitulo">DEPARTAMENTO:</p> <span>${DEPARTAMENTO}</span></div>
  <div class="item_bd"><p class="parrafotitulo">SECCIONAL:</p>  <span>${SECCIONAL}</span></div>
  <div class="item_bd"><p class="parrafotitulo">MUNICIPIO:</p><span>${MUNICIPIO}</span></div>
  <div class="item_bd"><p class="parrafotitulo">DIRECCION:</p><span>${DIRECCION}</span></div>
  <div class="item_bd"><p class="parrafotitulo">SEDE:</p><span>${SEDE}</span></div>
  <div class="item_bd"><p class="parrafotitulo">JUZGADO:</p><span>${JUZGADO}</span></div>
 </div>
<div class="linea"></div>
 <div class="datos_bd">
 <div class="item_bd"><p class="parrafotitulo">RESPONSABLE:</p>  <span>${RESPONSABLE}</span></div>
  <div class="item_bd"><p class="parrafotitulo">CEDULA:</p> <span>${CEDULA}</span></div>
 
 </div>

 <div class="linea"></div>
 <div class="datos_bd">

  <div class="item_bd"><p class="parrafotitulo">TIPO ELEMENTO:</p> <span>${TIPO_ELEMENTO}</span></div>
  <div class="item_bd"><p class="parrafotitulo">NOMBRE CI:</p>  <span>${NOMBRE_CI}</span></div>
  <div class="item_bd"><p class="parrafotitulo">MARCA:</p>  <span>${MARCA}</span></div>
  <div class="item_bd"><p class="parrafotitulo">MODELO:</p>  <span>${MODELO}</span></div>
  <div class="item_bd"><p class="parrafotitulo">SERIAL:</p>  <span>${SERIAL}</span></div>
  <div class="item_bd"><p class="parrafotitulo">PLACA:</p>  <span>${PLACA}</span></div>
  <div class="item_bd"><p class="parrafotitulo">INVENTARIO CPU ETB:</p>  <span>${CONTROL_DE_INVENTARIO_CPU}</span></div>
  <div class="item_bd"><p class="parrafotitulo">MANTENMIENTO CPU ETB:</p>  <span>${CONTROL_DE_MANTENIMIENTO_CPU}</span></div>
  <div class="item_bd"><p class="parrafotitulo">PROCESADOR:</p> <span>${PROCESADOR} </span></div>
  <div class="item_bd"><p class="parrafotitulo">MEMORIA:</p>  <span>${MEMORIA}</span></div>
  <div class="item_bd"><p class="parrafotitulo">DISCO DURO:</p>  <span>${DISCO_DURO}</span></div>
  <div class="item_bd"><p class="parrafotitulo">ANTIVIRUS:</p>  <span>${ANTIVIRUS}</span></div>
  <div class="item_bd"><p class="parrafotitulo">SISTEMA OPERATIVO:</p>  <span>${SISTEMA_OPERATIVO} </span></div>
  <div class="item_bd"><p class="parrafotitulo">VERSION SISTEMA OPERATIVO:</p>  <span>${VERSION_SISTEMA_OPERATIVO}</span></div>
  <div class="item_bd"><p class="parrafotitulo">IP:</p>  <span>${DIRECCION_IP}</span></div>
  <div class="item_bd"><p class="parrafotitulo">MARCA TECLADO:</p> <span>${MARCA_TECLADO}</span></div>
  <div class="item_bd"><p class="parrafotitulo">SERIAL TECLADO:</p>  <span>${SERIAL_TECLADO}</span></div>
  <div class="item_bd"><p class="parrafotitulo">PLACA TECLADO:</p>  <span>${PLACA_TECLADO}</span></div>
  <div class="item_bd"><p class="parrafotitulo">INVENTARIO TECLADO ETB:</p>  <span>${CONTROL_INVENTARIO_ETB_TECLADO}</span></div>
  <div class="item_bd"><p class="parrafotitulo">MARCA MOUSE:</p> <span>${MARCA_MOUSE}</span></div>
  <div class="item_bd"><p class="parrafotitulo">SERIAL MOUSE:</p>  <span>${SERIAL_MOUSE}</span></div>
  <div class="item_bd"><p class="parrafotitulo">PLACA MOUSE:</p>  <span>${PLACA_MOUSE}</span></div>
  <div class="item_bd"><p class="parrafotitulo">INVENTARIO MOUSE ETB:</p>  <span>${CONTROL_INVENTARIO_ETB_MOUSE}</span></div>
  <div class="item_bd"><p class="parrafotitulo">MARCA MONITOR:</p> <span>${MARCA_MONITOR}</span></div>
  <div class="item_bd"><p class="parrafotitulo">SERIAL MONITOR:</p>  <span>${SERIAL_MONITOR}</span></div>
  <div class="item_bd"><p class="parrafotitulo">PLACA MONITOR:</p>  <span>${PLACA_MONITOR}</span></div>
  <div class="item_bd"><p class="parrafotitulo">INVENTARIO MONITOR ETB:</p>  <span>${CONTROL_INVENTARIO_ETB_MONITOR}</span></div>
  <div class="linea1"></div>
  <div class="linea1"></div>
  <div class="linea1"></div>
 </div>
  
  `

    

     const divhijo = document.createElement("div");
     divhijo.innerHTML= contenido;
     divHTML.appendChild(divhijo);
}



// enviar datos al local storage
function sincronizarLocalStorage(){
    localStorage.setItem("datosg", JSON.stringify(datos));
}



