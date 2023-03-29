let valores = [ 2, 5, 4, 9, 0, 7];
console.log(valores);
valores.sort()
/*
for(i = 0; i < valores.length; i++){ //padrao
    console.log(`A posição ${i} tem o valor ${valores[i]}.`)
}
*/

for(let i in valores) { //simplificado
    console.log(`A posição ${i} tem o valor ${valores[i]}.`)
}