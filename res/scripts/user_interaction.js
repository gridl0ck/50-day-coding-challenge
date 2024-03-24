
function displayUserInfo(age, fname=null, lname=null, message=null){
    // let msg = `Welcome ${fname} ${lname}! You told me you are ${age}, meaning you are`;
    let msg = `You told me you are ${age}, meaning you are`
    if(age < 18){
        msg = msg + " less than 18 years old!";
    }

    else if(age >= 18 && age < 65){
        msg = msg + " at least 18 years old!\n\n\nYou have seen some things!";
    }

    else {
        msg = msg + " over 65 years old!\n\n\nYou have a wealth experience!";
    }

    window.alert(msg)
}

function countChar(val) {
    var len = val.value.length;
    if (len > 75) {
      val.value = val.value.substring(0, 75);
    } else {
        document.getElementById("charCount").innerHTML = `Characters Remaining: ${75 - len}`;
    }
  };

document.getElementById("send-user-info").addEventListener("click", () => {
    // const fname = document.getElementById("fname").value;
    // const lname = document.getElementById("lname").value;
    let age = parseInt(document.getElementById("age").value);
    // console.log(age)
    if(!age){
        window.alert("Please enter a valid number for your age!")
    }
    // const message = document.getElementById("message").value;
    else {
        displayUserInfo(age=age)
    }
    // displayUserInfo(fname, lname, age, message);

})