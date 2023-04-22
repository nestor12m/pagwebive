

// variables

const input_cedula = document.querySelector("#input_cedula");
const bnt_consultar = document.querySelector(".bnt_consultar");
const divHTML = document.querySelector(".resultado");

//addeventliseners

bnt_consultar.addEventListener("click", (e)=>{
    e.preventDefault();
    buscarDatos();
    filtrarDatos();
    
})


// funciones

async function buscarDatos(element){
    console.log("realizando click desde la fncion");

    try {
        

    const datos = await fetch("./computadores.json");
     // se crea variable para  decile que es un json
    const bd = await datos.json();
    console.log(bd);
    // se destructura el array de abjetos
    const { computadores } = bd;

 // genrerar el html  iterando cada uno de los elementos para cojer el valor e insertarlo en html
 computadores.forEach(element => {
    const {DEPARTAMENTO, SECCIONAL, MUNICIPIO, DIRECCION, SEDE, JUZGADO, CEDULA, RESPONSABLE, TIPO_ELEMENTO, NOMBRE_CI
    ,MARCA,   MODELO, SERIAL, PLACA, CONTROL_DE_INVENTARIO_CPU, CONTROL_DE_MANTENIMIENTO_CPU, PROCESADOR
    ,MEMORIA, DISCO_DURO, ANTIVIRUS, SISTEMA_OPERATIVO, VERSION_SISTEMA_OPERATIVO, DIRECCION_IP, MARCA_TECLADO
     ,SERIAL_TECLADO, PLACA_TECLADO, CONTROL_INVENTARIO_ETB_TECLADO, MARCA_MOUSE, SERIAL_MOUSE, PLACA_MOUSE
    ,CONTROL_INVENTARIO_ETB_MOUSE,MARCA_MONITOR, SERIAL_MONITOR, PLACA_MONITOR, CONTROL_INVENTARIO_ETB_MONITOR} = element


     // genrerar dom scrpting

      // se crean los parrafos y se le agrega el  cntenido del arrray de objetos

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
   <div class="item_bd"><p class="parrafotitulo">CEDULA:</p> <span>${CEDULA}</span></div>
   <div class="item_bd"><p class="parrafotitulo">RESPONSABLE:</p>  <span>${RESPONSABLE}</span></div>
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
   
  </div>
   
   `

     

      const divhijo = document.createElement("div");
      divhijo.innerHTML= contenido;
     

      divHTML.appendChild(divhijo);

 });

    } catch (error) {
        
    }
}

function filtrarDatos(){
   const resultado = computadores.filter( filtrarCedula)
}

function filtrarCedula(element){

}