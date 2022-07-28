/* De acordo com o que foi visto em aula (uso de variáveis e funções), faça um algoritmo com JavaScript que dado 
um número descubra qual o valor final quando: 

Subtraímos 2 dele.
Multiplicamos por 10.
Dividimos por 1.25.
Adicionamos 3.

*/


function algoritimo(numero){
	return ((((numero - subtraçao) * multiplicaçao) / divisor) + adicional)
}

var subtraçao = 2
var multiplicaçao = 10
var divisor = 1.25
var adicional = 3

var resultado = algoritimo(8)
console.log(resultado)
