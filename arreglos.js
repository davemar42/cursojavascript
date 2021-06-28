const autos= ['BMW','Mercedes','Volvo']

autos[1]='Opel'
console.log(autos[1])
autos.push("audi");
autos.push("ferrari")
for(var i = 0; i<autos.length;i++){
    console.log(autos)
}