
class Carro {

    constructor(marca1,tipo1,puertas1){

        this.marca = marca1;
        this.tipo = tipo1;
        this.puertas = puertas1;

        this.creadoEn = "hoy";
        this.encendido = false;
        this.gasolina = 100;

    }


encenderCarro(){

  

    if(this.encendido) {
console.error("El carro ya esta encendido NO LO PUEDES VOLVER A ENCENDER");

    }else{
        this.encendido = true;
        console.log("El carro esta encendido");
    }

    return this;
    
}

realizarViaje(consumo){



    if(!this.encendido){ return console.log("Carro apagado");

    if (consumo > this.gasolina) return console.log("No puede viajar sin gasolina " + this.gasolina);

            this.gasolina = this.gasolina - consumo;
            
            return "Le queda " + this.gasolina;
    
    

    }

   
}

}

let carro = new Carro("toyota","sedan",5);

console.log(carro);
carro.encenderCarro();
