let x= 10; //tipo primitivo

function cambiovalor(a){
    a=20;
    return x+12;
}
cambiovalor(x);
console.log(x);//solo le paso una copia, no el original x sigue valiendo 10
console.log(cambiovalor(x)) //pero la operacion si se realizo con la copia