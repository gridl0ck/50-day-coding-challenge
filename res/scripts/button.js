function onButtonClick() {

  }


function getMessage() {
    let msg;
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    if(hours < 12){
        msg = `Good Morning! The current time is ${hours}:${minutes}\n`;
    }
    else if(hours > 12 && hours < 18){
        msg = `Good Afternoon! The current time is ${hours}:${minutes}\n`;
    }

    else {
        msg = `Good Evening! The current time is ${hours}:${minutes}\n`;
    }

    return msg;
}


const greeting_button = document.getElementById('greeting');
greeting_button.addEventListener('click', () => {
    const msg = getMessage();
    let redir = false;
    if(msg.includes("trip")){
        redir = true;
    }

    window.alert(msg);

});