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

function submitForm(){
  let http = new XMLHttpRequest();
  http.open("POST", '/', true);
  //let formData = new FormData(document.querySelector("#email-form"));
  http.setRequestHeader("Content-Type", "application/json");
  // Define what happens on successful data submission
  http.addEventListener("load", function(event) {
    document.querySelector("#email-form").style.visibility = "hidden";
    document.querySelector("#headingText").style.fontSize = "2px;";
    document.querySelector("#headingText").innerHTML = "Thank you for your submission. See you soon on Jive!";
    document.querySelector("#headingTextBackground").style.backgroundColor = "#ee2b7a";
  });

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;

  // Define what happens in case of error
  http.addEventListener("error", function(event) {
    document.querySelector("#submitButton").style.visibility = "hidden";
  });
  http.send(JSON.stringify({"name": name, "email": email}));
}
