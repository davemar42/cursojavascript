const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}
function cambiovalorObjetc(p1){
    p1.nombre = 'Pedro';
}
//paso por referecia
cambiovalorObjetc(persona);
console.log(persona)