
let numbers = document.querySelectorAll(".number");
let secondHand = document.querySelector(".second");
let minuteHand = document.querySelector(".minute");
let hourHand = document.querySelector(".hour");
let deg = 30;

numbers.forEach(num => {
    num.style.transform = "rotate("+ deg +"deg)";
    num.innerHTML = "|";
    deg += 30;
})


setInterval(()=> {
    let date = new Date();
    let second = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();
    moveClockHand(second, minute, hour);
}, 1000)

let moveClockHand = (second, minute, hour) => {
    secondHand.style.transform = "rotate(" + second * 6 + "deg)";
    minuteHand.style.transform = "rotate(" + minute * 6 + "deg)";
    hourHand.style.transform = "rotate(" + hour * 30 + "deg)";
}

window.onload = () => {
    let date = new Date();
    let second = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();
    moveClockHand(second, minute, hour);
}
