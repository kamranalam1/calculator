var inp = document.getElementById("input")
function getvalue(num){
    inp.value += num
}

function calc(){
    inp.value = eval(inp.value)
}
function clean (){
    inp.value = ""
}
function valueClear(){
    inp.value = inp.value.slice(0,-1) 
}
