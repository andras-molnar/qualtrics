/* This script gets the value of a built-in slider and displays it in real time in an element you define */

var thisValue = null;
this.questionclick = function(event,element){
	thisValue = this.getChoiceValue(1); 
		/* Note that if your slider question has multiple items (rows), 
		you might have to use a different number in the parentheses here. 
		Also note that Qualtrics sometimes starts numbering items at 4, instead of 1. 
		You can check what number you have to insert here by inserting piped text from that slider first. 
		The number in the corresponding piped text indicates the number you should put in the parentheses here.	*/
	document.getElementById("yourElement").innerHTML= thisValue; 
		/* Update the information in the element named "yourElement". 
		You have to create this element somewhere on the same page. */
}
