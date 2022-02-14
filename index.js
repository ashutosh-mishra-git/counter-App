let counter = document.getElementById("count-el");
let textSaver = document.getElementById("savePara");
let count = 0

function inc(){
    count+=1;
    counter.textContent = count
}

function save(){
    let countStr = count + " - "  
    textSaver.textContent+=countStr
    counter.innerText=0
    count=0
}
function refresh(){
    window.location.reload();
}