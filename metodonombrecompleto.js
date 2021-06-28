let x = 10;
console.log(x.lenght);

let persona={
    nombre:"Juan",
    apellido:"lopex",
    email:"jperez@gmail.com",
    edad:32,
    nombrecompleto: function(){
        return this.nombre+' '+this.apellido;
    }
    
}
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.nombrecompleto())