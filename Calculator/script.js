function clr(){
    document.getElementById("result").value="";
}

function display(val){
    document.getElementById("result").value+=val;
}

function equate(){
    let equ=document.getElementById("result").value;
    let y=eval(equ);
    document.getElementById("result").value=y;
}
