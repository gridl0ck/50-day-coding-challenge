function calcExp(base, exp){
    const ret = Math.pow(base, exp);
    if(isNaN(ret)){
        window.alert("The answer couldn't be computed");
    }
    else {
        return ret
    }
}


document.getElementById("calc-submit").addEventListener("click", () => {
    const base = parseInt(document.getElementById("base").value);
    const exp = parseInt(document.getElementById("exponent").value);
    if(!base || !exponent){
        window.alert("Ensure you enter a number in both fields!");
    }
    else {
        const result = calcExp(base, exp);
        document.getElementById("result").innerHTML = "Result: " + result;
    }

})







