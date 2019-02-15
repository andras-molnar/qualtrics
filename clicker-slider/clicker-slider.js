Qualtrics.SurveyEngine.addOnload(function()
{
var js = jQuery.noConflict();
var clickCount = 0;
var probability = 0;
var probabilityText = "0%";

// IMPORT VARIABLES FROM QUALTRICS OR USE DEFAULTS
var qualtricsDummy = "${e://Field/qualtricsDummy}";
if (qualtricsDummy == 1) {
  var multiplier =  parseInt("${e://Field/multiplier}");
  var exponent =    parseFloat("${e://Field/exponent}");
}
else {		
  var multiplier = 1; 		// default multiplier
  var exponent = 0.8078;		// default exponent
}

console.log("M = " + multiplier + " | Exp = " + exponent);
	
js("#clickerButton").click(function() {
  clickCount = clickCount + 1;  // add 1 to clickcount if decrease was clicked
  probability = Math.min ( 100, Math.pow(clickCount, exponent) * multiplier);
  probabilityText = probability.toFixed(0) + "%";
  
  js("#output").html(probabilityText);
  //js("#progressBar").html(probabilityText);
  document.getElementById("progressBar").style.width =Math.round(probability,0)*4 + "px";
                           
                           
    if (qualtricsDummy == 1) {
		  Qualtrics.SurveyEngine.setEmbeddedData('clickCount', clickCount);
      		Qualtrics.SurveyEngine.setEmbeddedData('probability', probability);
		console.log("saved to qualtrics");
    };
});

});
