let num = [5, 8, 9, 4, 3];
num.push(1) //adiciona o valor "1" no final do vetor
num.sort(); //ordena os elementos do vetor
num.push(2)

console.log(`Nosso vetor tem os valores: ${num}.`);
console.log(`O vetor tem ${num.length} posições.`);
console.log(`O primeiro elemento do vetor é ${num[0]}.`);

let i = num.indexOf(2);

if(i == -1){
    console.log(`O valor não foi encontrado.`);
}else{
    console.log(`O valor está na posição ${i}.`);
}
