//Define vars to hold time values
var minutes = 0;
var seconds = 0;
var tenths = 0;

//Define vars to hold displayed timer valure
var displayTenths = 0;
var displaySeconds = 0;
var displayMinutes = 0;

//Define vars to hold setInterval()function
var interval = null;

//Define var to hold stopwatch status
var status = "stopped";

//Stopwatcg function
function stopWatch(){
    tenths++;
    if (tenths / 10 === 1){
        tenths = 0;
        seconds ++;
        
        if(seconds / 60 === 1){
            seconds = 0;
            minutes++;
        }
    }
    //If tenths/seconds/minutes are only one digit add a leading 0 to the value
    if(tenths < 10){
        displayTenths = "0" + tenths.toString();
    }
    else{
        displayTenths = tenths;
    }
    if(seconds <10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }
    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }
    //Display updated time
    document.getElementById("timer").innerHTML = displayMinutes + ":" + displaySeconds + ":" + displayTenths;
}
//If i press start and then reset, start doesnt work until STOP is pressed. WTF // FIXED
function start(){
    if(status !== "started"){
        interval = setInterval(stopWatch, 100);
        document.getElementById("startbutton").innerHTML = "Start";
        status = "started";
        document.querySelector('.interface').style.color = 'rgb(48, 197, 28)';
    }
}
function stop(){
    if(status !== "stopped"){
        interval = clearInterval(interval);
        document.getElementById("stopbutton").innerHTML = "Stop";
        status = "stopped";
        document.querySelector('.interface').style.color = 'red';
    }
}
//Function to reset the stopwatch
function reset(){
    clearInterval(interval);
    tenths = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById("timer").innerHTML = "00:00:00";
    document.getElementById("startbutton").innerHTML = "Start";
    document.getElementById("stopbutton").innerHTML = "Stop";
    document.getElementById("resetbutton").innerHTML = "Reset";
    document.querySelector('.interface').style.color = 'white';
}

//Event listeners

document.addEventListener('DOMContentLoaded', function() {
   let buttons = document.querySelectorAll('.buttons');
   buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (btn.id === 'startbutton') {
                
                start();
            } else if (btn.id === 'stopbutton') {
                stop();
            } else if (btn.id === 'resetbutton') {
                reset();
            }

        });
   });
});

