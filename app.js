var a="";
function clearScreen() {
    a="0";
    document.getElementById("input").innerHTML= "";
}
 

function display(value) {
    a+=value;
    document.getElementById("input").innerHTML=a;
}
 

function calculate() {
    var p = a;
    var q = eval(p);
    document.getElementById("input").innerHTML=q;
    a=q;
}

// function back(){
//     var len=document.getElementById('input');
//     var inner=len.innerHTML;
//     len="";
//     inner=inner.split("");
//     inner=inner.splice(inner.length-1,1)
//     inner=inner.join("");
//     len.value=inner;
//     }