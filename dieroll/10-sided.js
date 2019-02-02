Qualtrics.SurveyEngine.addOnload(function()
{
	setTimeout(function () {
			roll();
    },  1000);

function roll(){
  var dieRoll = Qualtrics.SurveyEngine.getEmbeddedData( "dieRoll");
  if (dieRoll == "random"){
    var dieRoll = Math.floor(Math.random() * 10);
  }
  document.getElementById("rollClip").src = "https://sds-studies.com/dieroll/10-sided/roll-" + dieRoll + ".mp4";
  Qualtrics.SurveyEngine.setEmbeddedData( "dieRoll", dieRoll );		
	setTimeout(function () {
			document.getElementById("rollInfo").innerHTML = "You rolled: <strong>" + dieRoll + "</strong>." ;
    },  3000);
}
});