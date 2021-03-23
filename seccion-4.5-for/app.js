 // tabla multiplicar

 let base = 10;
 let limite = 5;

 for(let i = 1; i <=limite; i++){

    let resultado = base * i;
        console.log(base +" x " + i + " = "+ resultado);
 }

 console.log("***********************************************")

 let base2 = 10;
 let limite2 = 100;

 for(let i2 = 1; i2 <=10; i2++){

    let resultado2 = base2 * i2;

    if(resultado2 <= limite2){
        console.log(base2 +" x " + i2 + " = "+ resultado2);
    } 
 }
