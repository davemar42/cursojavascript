let persona=new Object();
persona.nombre='carlos';
persona.apellido='lopex';
persona.telefono='6666666';
console.log(persona);
console.log(persona.nombre);
console.log(persona['apellido']);
//for in
for(nombrePropiedad in persona){
    console.log(nombrePropiedad)
    console.log(persona[nombrePropiedad])
}