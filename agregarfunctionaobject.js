let coches={
    marca: 'audi',
    modelo: '330',
    color:'rojo',

    escribirdatos: function(){
        return this.marca + ' ' +this.modelo+ ' ' +this.color;
    }
}
cambiodatos();
console.log(coches.escribirdatos());
function cambiodatos(){
    coches.marca='renault',
    coches.modelo='laguna',
    coches.color='azul'
}

console.log(coches.escribirdatos())


