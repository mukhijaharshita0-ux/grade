let marks=0;
function demo(){
    marks = document.getElementById('obt_marks').value;
}
function grading(){
     let result=document.getElementById("value");
    if(marks>=0 && marks<=30){
        result.innerText="F";
}
        else if(marks>=31 && marks<=55){
     result.innerText="D";
 }
        else if(marks>=56 && marks<=70){
    result.innerText="C";
 }  
         else if(marks>=71 && marks<=85){
     result.innerText="B";
 }

    else if(marks>=86 && marks<=100){
     result.innerText="A";
 }
 else 
        result.innerText="Invalid";

//     // console.log(marks)
//     // console.log(result)  
       
}  


// function grading() {
//   let marks = document.getElementById("obt_marks").value;
//   let result = document.getElementById("value");

//   if (marks >= 0 && marks <= 30) {
//     result.innerText = "Your Grade is: F";
//   } else if (marks >= 31 && marks <= 55) {
//     result.innerText = "Your Grade is: D";
//   } else if (marks >= 56 && marks <= 70) {
//     result.innerText = "Your Grade is: C";
//   } else if (marks >= 71 && marks <= 85) {
//     result.innerText = "Your Grade is: B";
//   } else if (marks >= 86 && marks <= 100) {
//     result.innerText = "Your Grade is: A";
//   } else {
//     result.innerText = "Please enter valid marks (0–100)";
//   }
// }


