document.getElementById("subbut").value = "Press me";

document.getElementById("subbut").onclick = function(){
    let temp;
    if(document.getElementById("Cbut").checked){
        temp = document.getElementById("inputfield").value;
        temp = Number(temp);
        temp = toCel(temp);
        temp = Math.floor(temp);
        document.getElementById("result").innerHTML = temp + "°C";
    }
    else if(document.getElementById("Fbut").checked){
        temp = document.getElementById("inputfield").value;
        temp = Number(temp);
        temp = toFah(temp);
        temp = Math.floor(temp);        
        document.getElementById("result").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("result").innerHTML = "Choose a unit";
    }
}

function toCel(temp){
    return (temp - 32) * (5/9);
}
function toFah(temp){
    return temp * 9 / 5 + 32;
}