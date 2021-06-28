let coches={
    marca: 'audi',
    modelo: '330',
    color:'rojo',

    escribirdatos: function(){
        return this.marca + ' ' +this.modelo+ ' ' +this.color;
    }
}
coches.motor='AU400';
console.log(coches);
