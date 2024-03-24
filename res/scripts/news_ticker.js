function getAge() {
    const birthday = new Date("10/28/2000");
    const month_diff = Date.now() - birthday.getTime();
    const age_dt = new Date(month_diff);
    const year = age_dt.getUTCFullYear();
    const age = Math.abs(year - 1970)
    // console.log(age)
    return age;
}

const page = document.getElementById("page-title").innerHTML;
console.log(page)
if(page === "Home"){
    let news_name = document.getElementById("news-name");
    let news_age = document.getElementById("news-age");
    let news_hobby = document.getElementById("news-hobby");

    const my_name = "Jalen Morgan";
    const age = getAge();
    const my_hobby = "I enjoy playing music on my trumpet!"

    news_name.innerHTML = "My name is " + my_name + "!";
    news_age.innerHTML = "I am currently " + age + " years old!";
    news_hobby.innerHTML = my_hobby;
}

else if(page.includes("Calc")) {
    let food1;
    let food2;
    let food3;
    const containers = [
        food1 = document.getElementById("food1"),
        food2 = document.getElementById("food2"),
        food3 = document.getElementById("food3"),
    ]

    const foods = ["Potatoes", "Steak", "Broccoli"]
    for(let i = 0; i < foods.length; i++) {
        containers[i].innerHTML = `I enjoy eating ${foods[i]}!`;
    }

}



