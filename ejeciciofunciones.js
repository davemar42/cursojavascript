let resultado = sumartodo(13, 20, 16, 22);
console.log(resultado)
function sumartodo(){
    let suma = 0;
    for( i = 0; i< arguments.length ;i++){
           suma += arguments[i];
    }
    return suma
}