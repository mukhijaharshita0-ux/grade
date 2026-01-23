let result=document.getElementById("result");
document.getElementById("clear").addEventListener("click", function(){
    result.value = "";
});
document.getElementById("remove").addEventListener("click", function(){
    result.value = result.value.slice(0, -1);
});
document.getElementById("divide").addEventListener("click", function(){
    result.value += "/";
});
document.getElementById("multiply").addEventListener("click", function(){
    result.value += "*";
});
document.getElementById("minus").addEventListener("click", function(){
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
document.getElementById("five").addEventListener("click", function () {
    result.value += "5";
});
document.getElementById("six").addEventListener("click", function () {
    result.value += "6";
});
document.getElementById("one").addEventListener("click", function () {
    result.value += "1";
});
document.getElementById("two").addEventListener("click", function () {
    result.value += "2";
});
document.getElementById("three").addEventListener("click", function () {
    result.value += "3";
});
document.getElementById("zero").addEventListener("click", function () {
    result.value += "0";
});
document.getElementById("dot").addEventListener("click", function () {
    result.value += ".";
});

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}