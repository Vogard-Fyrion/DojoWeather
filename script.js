function remove(id){
    var element = document.querySelector(id);
    element.remove();
}

function temperature(element){
    console.log(element.value);
    if(element.value == "°F"){
        var f = document.querySelectorAll("#temp");
            for(i = 0; i < f.length; i++){
                f[i].innerText = Math.round(f[i].innerText * 1.8 + 32);
            }
    } else if(element.value == "°C") {
        var c = document.querySelectorAll("#temp");
            for(i = 0; i < c.length; i++){
                c[i].innerText = Math.round((c[i].innerText - 32) / 1.8);
            }
    }
}