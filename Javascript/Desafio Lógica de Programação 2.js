/* Desafio Lógica de Programação 2

Considerando o seguinte array:

const fruits = ["Banana", "Orange", "Apple"];

1. Use o método correto para remover o último item do array
2. Adicione a fruta "Kiwi" ao array
3. Use o método splice() para remover "Orange" e "Apple" do array

*/ 

const fruits = ["Banana", "Orange", "Apple"];
console.log("Fruits antes de adicionar e remover:" + fruits);

	/* fruits.pop()  ==> QUANDO EU FOR USAR O METODO SPLICE NÃO VAI TER NECESSIDADE DE USAR O POP 
	COMO PEDE NA LINHA 7, JA QUE EU VOU REMOVER DUAS STRINGS DENTRO DO MEU ARRAY COM O METODO SPLICE E
	VOU ADICIONAR O KIWI COMO ULTIMO PARAMETRO, TAMBÉM USANDO O METODO SPLICE */

	//fruits.push('Kiwi');
	//console.log("Fruits depois de adicionar:" + fruits)

fruits.splice(1,2, 'Kiwi')
console.log("Fruits ao usar o metodo splice:" + fruits)