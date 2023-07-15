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

function back()
{
    if(a.length!=1){
        a=a.slice(0,-1);
    document.getElementById("input").innerHTML=a;
    }
    else{
        a="";
        document.getElementById("input").innerHTML=a;
    }
    
}