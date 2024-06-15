let name = prompt("Enter your name");
let news1 = document.getElementById("hours");
let e = new Date().getHours();
let r = new Date();
let greetings;
let timing = document.getElementById("current-time");
let time
if(e>=0 && e<4){
    greetings="Night Is still Young/Midnight ";
    time = "Your time is "+r.toLocaleTimeString();
}
else if(e>=4 && e<12){
    greetings="Good Morrning ";
    time = "Your time is "+r.toLocaleTimeString();
}
else if(e>=12 && e<16){
    greetings="Good Afternoon ";
    time = "Your time is "+r.toLocaleTimeString();}
else if(e>=16 && e<23){
    greetings="Good Evening ";
    time = "Your time is "+r.toLocaleTimeString();}
else{
    greetings="It's time for sleep, Good Night ";
    time = "Your time is "+r.toLocaleTimeString();
}
    news1.innerHTML = greetings + name ;
    timing.innerHTML = time;
