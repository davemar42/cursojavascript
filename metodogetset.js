let persona={
    nombre:"Juan",
    apellido:"lopex",
    email:"jperez@gmail.com",
    edad:32,
    idioma:'es',
    get lang(){
        return this.idioma.toUpperCase();

    },
    set lang(lang){
         this.idioma=lang.toUpperCase();
    },
    get name(){
        return this.nombre.toUpperCase();
    },
    set name(name){
        this.nombre=name.toUpperCase();
    },
    get nombrecompleto(){
        return this.nombre+' '+this.apellido;
    }
    
}
console.log(persona.nombrecompleto);
console.log(persona.lang);
persona.lang='mx';
console.log(persona.lang);
console.log(persona.name);
persona.name='umberto';
console.log(persona.name);
console.log(persona.nombrecompleto);