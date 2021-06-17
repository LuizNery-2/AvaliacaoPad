
//Questão 1
var result = someFun({ someProperty: 'interview'}, function(value){
    
    console.log('This pointing to ' + value);

});

console.log('Result is', result);

function someFun(valor, valor2){
   
    valor2(valor.someProperty);
    return 1;
}

//Questão 2
var someFN = function(valor) 
    {
        var A = valor;

        return function (incremento)
        {
            A += incremento;
             return A;
        }
    }

    var counter  = someFN(1)

    console.log("First call", counter(3))
    console.log("second call", counter(1))
    console.log("Third call", counter(5))


//Q3 
function calculator(n1, n2) {
    return callback => callback(n1, n2)
  }
  
   //Q4
  
  var a  = 5
  var b = 10
  
  if(a == 5){
    let a = 4
    var b = 1
    console.log(a)
    console.log(b)
  }
  console.log(a)
  console.log(b)
  //R: 4,1,5,1
  
  
  
  
  //Q5
  
  function multiplicar(numero)
  {
       for(var i = 1; i <= 10; i++)
       {
          
           var multi = numero * i; 
           console.log(multi)
          
       }
  }
  multiplicar(2);