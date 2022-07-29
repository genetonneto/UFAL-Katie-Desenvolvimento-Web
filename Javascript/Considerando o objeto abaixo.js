/*
Considerando o objeto abaixo:
const person = {
  firstName: "John",
  lastName: "Doe"
};

4. Imprima todas as informações do objeto
5. Adicione a seguinte propriedade e valor ao objeto
country: Norway

*/


const person = {
  firstName: "John",
  lastName: "Doe",
  country: "Norway"
}

let dados = ""

for (let info in person){
	dados += `
		${info} ==> ${person[info]}
	`
}
console.log(dados)