let numerito="34";
let edad=Number(numerito)
if(isNaN(edad)){
    console.log("no es un puto numero")
}else{
    let resultado= (edad>18)? "puede votar":"muy joven para votar"
    console.log(resultado)
}
