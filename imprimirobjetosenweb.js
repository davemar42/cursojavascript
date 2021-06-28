let coches={
    marca: 'audi',
    modelo: '330',
    color:'rojo',

    escribirdatos: function(){
        return this.marca + ' ' +this.modelo+ ' ' +this.color;
    }
}
console.log(coches);
//esta forma puede no funcionar en web
console.log(coches.color+' '+coches.marca);
//otra forma seria con for in
for(nombrepropiedad in coches){
    console.log(coches[nombrepropiedad])
}
let cochesarray=Object.values(coches);
console.log(cochesarray);
let cochesString=JSON.stringify(coches);
console.log(cochesString);