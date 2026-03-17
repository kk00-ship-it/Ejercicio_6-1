function rellenarTabla(tabla){

    
    const contenedor = document.getElementById("output")
    contenedor.innerHTML = "";

     for(let i = 0; i<=10; i++ ){
        contenedor.innerHTML += ` ${tabla} X ${i} = ${tabla * i}  <br> `;
      }    

}
