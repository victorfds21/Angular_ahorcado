
let persona1 = {
    nombre: "victor",
    edad: 25
};

let persona2 = {
    nombre: "andreina",
    edad: 22
};
let persona3 = {
    nombre: "ricardo",
    edad: 31
};

let personas = [persona1, persona2,persona3];

for(let i = 0; i < personas.length; i++){

    let persona = personas[i];

    console.log(persona.nombre + " --- " + persona.edad);
}
