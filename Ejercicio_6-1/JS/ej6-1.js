function rellenarTabla(tabla){

    
    const contenedor = document.getElementById("output")
    contenedor.innerHTML = "";

    switch(tabla){

        case 0:
            for(let i = 0; i<=10; i++ ){
        
                contenedor.innerHTML += ` ${i} X 1 = ${i * 1}  <br> `;
        
            }
        break;

        case 1:
            for(let i = 0; i<=10; i++ ){
        
                contenedor.innerHTML += ` ${i} X 2 = ${i * 2}  <br> `;
        
            }
        break;

        case 2:
            for(let i = 0; i<=10; i++ ){
        
                contenedor.innerHTML += ` ${i} X 3 = ${i * 3}  <br> `;
        
            }
        break;

        case 3:
            for(let i = 0; i<=10; i++ ){
        
                contenedor.innerHTML += ` ${i} X 4 = ${i * 4}  <br> `;
        
            }
        break;

        case 4:
            for(let i = 0; i<=10; i++ ){
        
                contenedor.innerHTML += ` ${i} X 5 = ${i * 5}  <br> `;
        
            }
        break;

        case 5:
            for(let i = 0; i<=10; i++ ){
        
                contenedor.innerHTML += ` ${i} X 6 = ${i * 6}  <br> `;
        
            }
        break;

        case 6:
            for(let i = 0; i<=10; i++ ){
        
                contenedor.innerHTML += ` ${i} X 7 = ${i * 7}  <br> `;
        
            }
        break;

        case 7:
            for(let i = 0; i<=10; i++ ){
        
                contenedor.innerHTML += ` ${i} X 8 = ${i * 8}  <br> `;
        
            }
        break;

        case 8:
            for(let i = 0; i<=10; i++ ){
        
                contenedor.innerHTML += ` ${i} X 9 = ${i * 9}  <br> `;
        
            }
        break;

        case 9:
            for(let i = 0; i<=10; i++ ){
        
                contenedor.innerHTML += ` ${i} X 10 = ${i * 10}  <br> `;
        
            }
        break;
    }










    
    
    
    
    
}