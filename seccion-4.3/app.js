
let dia = 7;  // dia = 1 lunes  dia = 2 martes  dia = 3 miercoles  dia = 4 jueves  dia = 5 viernes  dia = 6 sabado
              // dia = 0 domingo

switch (dia){

    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;
        
        default:
            console.log("Necesita un valor del 0-6")
}              

if(dia ===0){
    console.log("Domingo")
}else if(dia ===1){
    console.log("lunes")
}else if(dia ===2){
    console.log("Martes")
}else if(dia ===3){
    console.log("Miercoles")
}else if(dia ===4){
    console.log("Jueves")
}else if(dia ===5){
    console.log("Viernes")
}else if(dia ===6){
    console.log("Sabado")
}else{
    console.log("Necesita un valor del 0-6") 
}