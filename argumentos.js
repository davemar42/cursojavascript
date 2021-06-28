
let sumar = (a,b) => a+b;
resultado= sumar (3,2);


let sumar2 = function(a,b){
    console.log(arguments[0]);
    return a+b;
};
resultado2 = sumar2(4,5);
console.log(resultado2);