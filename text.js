let result=document.getElementById("result");

document.getElementById("clear").addEventListener("click", function(){
    result.value = "";
});
document.getElementById("divide").addEventListener("click", function(){
    result.value += "/";
});
document.getElementById("multiply").addEventListener("click", function(){
    result.value += "*";
});
document.getElementById("subtract").addEventListener("click", function(){
    result.value += "-";
});
document.getElementById("add").addEventListener("click", function(){
    result.value += "+";
});
document.getElementById("seven").addEventListener("click", function () {
    result.value += "7";
  });
document.getElementById("eight").addEventListener("click", function () {
    result.value += "8";
  });
document.getElementById("nine").addEventListener("click", function () {
    result.value += "9";
  });
document.getElementById("four").addEventListener("click", function () {
    result.value += "4";
  });
document.getElementById("five").addEventListener("click",   function () {
    result.value += "5";
  console.log(result.value)
  
  });
document.getElementById("six").addEventListener("click", function () {
    result.value += "6";
  });
document.getElementById("one").addEventListener("click", function () {
    result.value += "1";
  });
document.getElementById("two").addEventListener("click",    function () {
    result.value += "2";
  });
document.getElementById("three").addEventListener("click", function () {
    result.value += "3";
  });
document.getElementById("zero").addEventListener("click",   function () {
    result.value += "0";
  });
document.getElementById("dot").addEventListener("click", function () {
    result.value += ".";
  });
  // document.getElementById("equal").addEventListener("click", function calculate() {
  //   result.value = "=";
  // });




// function add () {
// let c = a + b;
// document.getElementById("result").value = c;
// return c;
// }
// + = 0
// - = 1
// / = 2
// * = 3
// % = 4
// var case = "+"

// if ( case === "x")
// function add(a, b) {
//   let c = a + b;
//   console.log(c)
//   document.getElementById("result").value = c;
//   return c;
// }



// function calculate() {
//   var x = result.value
//   var y = result.value
//   add(x,y);
// }





















  // function calculate(add){
  //   result.value = eval(result.value);
  // }     
  //     function calculate(divide){
  //       result.value = eval(result.value);
  //     }
  //   function calculate(minus){
  //       result.value = eval(result.value);
  //     }
  //   function calculate(plus){
  //       result.value = eval(result.value);
  //     }
   
  



















// function calculate() {
//     try {
//         result.value = eval(result.value);
//     } catch (error) {
//         result.value = "Error";
//     }
// }


// function calculate() {
//     if(result.value === ""){
//         result.value = "Please enter a value";
//     }

//   }