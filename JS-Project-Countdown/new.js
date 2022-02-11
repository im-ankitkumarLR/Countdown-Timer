const E1days = document.getElementById("days");
const E1hours = document.getElementById("hours");
const E1mins = document.getElementById("mins");
const E1second = document.getElementById("seconds");




const birthday = "15 october 2022";
function countdown() {
    const birthdaydate = new Date(birthday);
    const currentdate = new Date();
    const Totalseconds = (birthdaydate - currentdate) / 1000;

    const days = Math.floor(Totalseconds / 3600 / 24);
    const hours = Math.floor(Totalseconds / 3600)%60;
    const mins = Math.floor(Totalseconds / 60) % 60;
    const seconds = Math.floor(Totalseconds) % 60;
    // console.log(days, hours, minutes, seconds);


    E1days.innerHTML = (days);
    E1hours.innerHTML = formatetime(hours);
    E1mins.innerHTML = formatetime(mins);
    E1second.innerHTML = formatetime(seconds);

}
function formatetime(time){
    return time<10 ? `0${time}`: time;
}
countdown();
setInterval(countdown, 1000);