// This script hides the next button and lets the participant automatically proceed after selecting a response (works only with single choice options)

var that = this;
this.hideNextButton();
this.questionclick = function(event,element){
	if (element.type == 'radio')  {
		that.clickNextButton();
	}
}
