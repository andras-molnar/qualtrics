/* This is a script for a simple allocation game
You can customize the amount of money to be allocated, 
the default allocation, and the labels of the slider 

Put the following script in a Question javascript in Qualtrics.
Make sure to create the embedded data 'taskPayment' and 'transfer' 
in the Survey Flow before this script is executed. 

CSS styles are at the bottom of this script. */


var body = this.getQuestionContainer();
var sliderMax = 100; // set the total amount here
var sliderMin = 0;
var sliderStep=0.1; // set the increment here
var sliderDefault = 5; // set the default allocation here
var sliderChosen = sliderDefault;
var yourPayment = sliderMax - sliderDefault;
var partnerPayment = sliderDefault;
var page = this;
page.hideNextButton ();

createSliderWrapper();
createNextButtonWrapper();

function createSliderWrapper () {
  var sliderWrapper = document.createElement("div");
  sliderWrapper.setAttribute("class", "sliderWrapper");
  sliderWrapper.setAttribute("id", "sliderWrapper"); 
  sliderWrapper.setAttribute("align", "center");
  body.appendChild(sliderWrapper);
  
  var sliderQuestion = document.createElement("p");
  sliderQuestion.innerHTML = "Please allocate $" + sliderMax + " between yourself and Person B.<br><br>";
  sliderQuestion.setAttribute("class", "largeText");
  sliderWrapper.appendChild(sliderQuestion);

    
  var confidenceScale = document.createElement("input");
  confidenceScale.setAttribute("id","myRange"); // this should be unique
  confidenceScale.setAttribute("class","slider1");
  confidenceScale.setAttribute("type","range");
  confidenceScale.setAttribute("min", sliderMin);
  confidenceScale.setAttribute("max", sliderMax);
  confidenceScale.setAttribute("step", sliderStep);
  confidenceScale.setAttribute("value", sliderDefault);
  sliderWrapper.appendChild(confidenceScale);  
  
  var youLabel = document.createElement("span"); 
  youLabel.innerHTML = "YOU<br>$" + yourPayment;
  youLabel.setAttribute("class","leftText");
  sliderWrapper.appendChild(youLabel);         
  
  var partnerLabel = document.createElement("span"); 
  partnerLabel.innerHTML = "Person B<br>$" + partnerPayment;
  partnerLabel.setAttribute("class","rightText");
  sliderWrapper.appendChild(partnerLabel);

  
  confidenceScale.oninput = function() {
	 yourPayment = (Math.round((sliderMax - this.value) * 10) / 10);
    youLabel.innerHTML = "YOU:<br>$" + yourPayment;
	  partnerPayment =  (Math.round( this.value * 10) / 10);
    partnerLabel.innerHTML = "Person B:<br>$" + partnerPayment;
    
    setTimeout(function(){ 
      if (document.getElementById("nextButtonWrapper") == null) { }}, 1000);
  }
}

function createNextButtonWrapper () {
  var nextButtonWrapper = document.createElement("div");
  nextButtonWrapper.setAttribute("class", "nextButtonWrapper");
  nextButtonWrapper.setAttribute("id", "nextButtonWrapper");
  body.appendChild(nextButtonWrapper);
  
  var button = document.createElement("BUTTON");
  button.innerHTML = "Submit >>";
  button.onclick = submitDecision;
  button.setAttribute("class", "nextButton1 customButton");
  nextButtonWrapper.appendChild(button);
}
 
function submitDecision (){
	Qualtrics.SurveyEngine.setEmbeddedData( 'taskPayment', yourPayment); // make sure to create the embedded data 'taskPayment' in the survey flow before this script is executed
	Qualtrics.SurveyEngine.setEmbeddedData( 'transfer', partnerPayment); // make sure to create the embedded data 'transfer' in the survey flow before this script is executed
	page.clickNextButton();
}
