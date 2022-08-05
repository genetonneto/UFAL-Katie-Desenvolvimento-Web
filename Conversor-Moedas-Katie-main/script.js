function Converter() {
    let input = parseFloat(document.getElementById("valor_inicial").value);
    let output = document.getElementById("resultado");
    let de = document.getElementById("moedasde");
    let para = document.getElementById("moedaspara");
    
    console.log(de.value)
  
    //Reais
    let valorEmReais = input;
    let valor;
    if (de.value == "BRL" && para.value != "Moeda 2") {
      if (para.value == "BRL") {
        valor = "O valor em reais é: R$" + valorEmReais.toFixed(2);
      } else if (para.value == "EUR") {
        valor = "O valor em euros é: €" + (valorEmReais * 0.16).toFixed(2);
      } else if (para.value == "USD") {
        valor = "O valor em dólar é: $" + (valorEmReais * 0.19).toFixed(2);
      }
      output.innerHTML = valor;
      //Dolar
    } else {
      if (de.value == "USD" && para.value!= "Moeda 2"){
        let valorEmDolar = input;
        let valor;
        if(para.value == "USD"){
          valor = "O valor em dolar é: $" + valorEmDolar.toFixed(2);
        } else if (para.value == "EUR"){
          valor = "O valor em euros é: €" + (valorEmDolar * 0.97).toFixed(2); 
        } else if (para.value == "BRL"){
          valor = "O valor em real é: R$" + (valorEmDolar * 5.18).toFixed(2);
        }
        output.innerHTML = valor;
        //Euro
      } else {
        if (de.value == "EUR" && para.value!= "Moeda 2"){
          let valorEmEuro = input;
          let valor;
          if(para.value == "EUR"){
            valor = "O valor em euro é: €" + valorEmEuro.toFixed(2);
          } else if (para.value == "USD"){
            valor = "O valor em DOLAR é: $" + (valorEmEuro * 1.03).toFixed(2); 
          } else if (para.value == "BRL"){
            valor = "O valor em real é: R$" + (valorEmEuro * 5.32).toFixed(2);
          }
          output.innerHTML = valor;
        }
      }
    }
  }
   
