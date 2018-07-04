function countdownTimer(){
  const releaseTime = new Date("july 27, 2018 17:00:00").getTime();
  var x = setInterval(function(){
    var currentTime = new Date().getTime();
    var timeLeft = releaseTime - currentTime;
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60))/(1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    if(seconds < 10){
      document.querySelector("#daysValue").innerHTML = days;
      document.querySelector("#hoursValue").innerHTML = hours;
      document.querySelector("#minsValue").innerHTML = minutes;
      document.querySelector("#secsValue").innerHTML = seconds;
    }
    else if(minutes < 10){
      document.querySelector("#daysValue").innerHTML = days;
      document.querySelector("#hoursValue").innerHTML = hours;
      document.querySelector("#minsValue").innerHTML = minutes;
      document.querySelector("#secsValue").innerHTML = seconds;

    }
    else if(hours < 10){
      document.querySelector("#daysValue").innerHTML = days;
      document.querySelector("#hoursValue").innerHTML = hours;
      document.querySelector("#minsValue").innerHTML = minutes;
      document.querySelector("#secsValue").innerHTML = seconds;
    }
    else if(days < 10){
      document.querySelector("#daysValue").innerHTML = days;
      document.querySelector("#hoursValue").innerHTML = hours;
      document.querySelector("#minsValue").innerHTML = minutes;
      document.querySelector("#secsValue").innerHTML = seconds;
    }
    else{
      document.querySelector("#daysValue").innerHTML = days;
      document.querySelector("#hoursValue").innerHTML = hours;
      document.querySelector("#minsValue").innerHTML = minutes;
      document.querySelector("#secsValue").innerHTML = seconds;
    }
    if (timeLeft < 0){
      clearInterval(x);
      document.querySelector("#countdown").innerHTML = "BETA LAUNCHED! Tune in @ jive.live";

    }
  }, 1000);
};

window.onload = countdownTimer;
