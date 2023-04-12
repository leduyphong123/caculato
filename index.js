
function numberValue(key) {
    var a = document.getElementById("number");
    a.innerHTML = (document.getElementById("number").innerHTML + key).replace("0", "");
}

function operatorValue(key) {
    var a = document.getElementById("number");
    const arr = a.innerText.split(" ");
        a.innerHTML = (document.getElementById("number").innerHTML + " " + key + " ");       

    
}


function resultValue() {
    const arr = document.getElementById("number").innerText.split(" ");
    const oldResults = document.getElementById("number").innerText + " = ";

    for(let i=1;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            arr.splice(arr.indexOf(arr[i+1]),1);
            i--;
        }
    }
    do {
        if (arr.includes("x")) {
            checkCalculate("x", arr);
        } else if (arr.includes("/")) {
            checkCalculate("/", arr);
        }
    } while (arr.includes("x")==true || arr.includes("/")==true)

    do {
        if (arr.includes("+")) {
            checkCalculate("+", arr);
        } else {
            checkCalculate("-", arr);
        }
    } while (arr.length > 1)
    if (arr.length == 1) {
        document.getElementById("number").innerHTML = arr[0]
        document.getElementById("result").innerHTML = oldResults;
    }
}

function checkCalculate(operator, arr) {
   if(arr.length>1){
    var key = arr.indexOf(operator);
    let result = calculate(operator, arr[key - 1], arr[key + 1]);
    arr.splice(key - 1, 3, result);
   }else{
    return arr;
   }
}

function calculate(key, start, end) {
    switch (key) {
        case "x":
            return parseInt(start) * parseInt(end);
        case "/":
            return parseInt(start) / parseInt(end);
        case "+":
            return parseInt(start) + parseInt(end);
        case "-":
            return parseInt(start) - parseInt(end);
        default:
            break;
    }
}


function resetValue(){
    document.getElementById("number").innerHTML="0";
}
function deleteValue() {
    var number=document.getElementById("number").innerText;
    document.getElementById("number").innerHTML=number.substring(0,number.length-1);
}