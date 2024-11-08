function addNumber(num) {
    document.getElementById("result").value += num;
}
  

function addOperator(operator) {
    document.getElementById("result").value += operator;
}
  


function clearResult() {
    document.getElementById("result").value = "";
}


function calculate() {
    var result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}