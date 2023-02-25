
// VARIABLES
const formulario = document.querySelector(".formulario2");
const selecionrOpcion = document.querySelector("#Tipo_elemento");
const elementoComputador = document.querySelector("#Contenedor_computador");
const elementoMonitor = document.querySelector("#Contenedor_Monitor");
const elementoTeclado = document.querySelector("#Contenedor_teclado");
const elementoMouse = document.querySelector("#Contenedor_mouse");
const elementoImpresoras = document.querySelector("#Contenedor_impresora");
const elementoScanner = document.querySelector("#Contenedor_scanner");
const botonenviarpc = document.querySelector("#bnt_envirdts_pc");

const cedulaFuncionario = document.querySelector("#Cedula");
const nombreFuncionario = document.querySelector("#nombre_Funcionario");
const despachoFuncionario = document.querySelector("#Despacho_funcionario");
const direccionFuncionario = document.querySelector("#direccion");

const opcioElementoComputador = document.querySelector("#Opcion_elemento_computador");
const tipoMarcaComputador = document.querySelector("#tipo_marca_computador");
const tipoSerialComputador = document.querySelector("#tipoSerialComputador");
const tipoModeloComputador = document.querySelector("#tipoModeloComputador");
const tipoplacaComputador = document.querySelector("#tipoplacaComputador");

const tabla = document.querySelector(".default_tabla");



let datos = [

     funcionario = {
        cedula: "",
        nombre:"",
        despacho:"",
        direccion:"",
    
    },
    
     computador ={
        equipo:"",
        marca:"",
        modelo:"",
        serial:"",
        placa:""
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
  else if(opcion ==="Monitor"){
    elementoMonitor.style.display = "flex";
  }
  else if(opcion ==="Teclado"){
    elementoTeclado.style.display = "flex";
  }
  else if(opcion ==="Mouse"){
    elementoMouse.style.display = "flex";
  }
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

    funcionario.cedula = parseInt(cedulaFuncionario.value);
    funcionario.nombre = nombreFuncionario.value;
    funcionario.despacho = despachoFuncionario.value;
    funcionario.direccion = direccionFuncionario.value;
    console.log(cedulaFuncionario.value)

    // recoleccion de datos de computador

    computador.equipo = opcioElementoComputador.value;
    computador.marca = tipoMarcaComputador.value;
    computador.modelo = tipoModeloComputador.value;
    computador.serial = tipoSerialComputador.value;
    computador.placa = tipoplacaComputador.value;

    // console.log(funcionario);
    // console.log(computador)
    console.log( datoGeneral)

}

function mostrarDatosHtml(){

    // if (datos.length > 0){
    //     datos.forEach(   datos   => {

    //        console.log("son datos del locacl " + datos.datos) 
    contenido = `
    <tr>       
    <td>${funcionario.cedula}</td>
    <td>${computador.equipo}</td>
    <td>${ computador.marca}</td>
    <td>${computador.modelo}</td>
    <td>${computador.serial}</td>
    <td>${computador.placa}</td>
  </tr>
    
    `
    const tr = document.createElement("tr");
    tr.innerHTML = contenido;
    tabla.appendChild(tr);

    sincronizarLocalStorage();

    //     })
    // }
}



// enviar datos al local storage
function sincronizarLocalStorage(){
    localStorage.setItem("datosg", JSON.stringify(datos));
}



