var page = this;
var timeLimit = parseInt("${e://Field/timeLimit}");			// duration in seconds... set this in survey flow
var startTime = parseInt("${e://Field/startTime}");			// set this to 0 in survey flow (for multi-page timers)
var d = new Date();
var currentTime = d.getTime();
var remainingTime = 0;
var remainingMinutes = 0;
var remainingSeconds = 0;
if (startTime == 0) {startTime = currentTime; Qualtrics.SurveyEngine.setEmbeddedData( 'startTime', currentTime );}
	
updateTimer();
function updateTimer() {
setTimeout(function () {
		d = new Date();
		currentTime = d.getTime();
		remainingTime = Math.round(timeLimit - (currentTime - startTime)/1000,0);
		remainingMinutes = Math.floor(remainingTime / 60);
		remainingSeconds = remainingTime % 60;
		if (remainingSeconds < 10) {remainingSeconds = "0" + remainingSeconds};
 		if (remainingTime > 10) {document.getElementById("timer").innerHTML = "Remaining time: " + remainingMinutes + ":" + remainingSeconds; }
		// display remaining time in red if timer < 10 seconds:
		else {document.getElementById("timer").innerHTML = "<span style='color:#FF0000;'><strong>Remaining time: " + remainingMinutes + ":" + remainingSeconds + "</strong></span>";}
		if (remainingTime > 0) {updateTimer();} else {page.clickNextButton();}
    },  100); // this is called every 100 ms to guarantee smooth transitions
}
