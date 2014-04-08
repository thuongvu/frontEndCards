var FlashCard = function(question, answer) {
	this.question = question;
	this.answer = answer;
};

FlashCard.prototype.showQuestion = function() {
	document.getElementById("card-front").innerText = this.question;
};
FlashCard.prototype.showAnswer = function() {
	document.getElementById("card-back").innerText = this.answer;
};

var semanticHtml = new FlashCard("semantic html", "agreed meaning of html elements, attributes, values");
semanticHtml.showQuestion();
semanticHtml.showAnswer();

var optimize = new FlashCard("optimize", "file concat, minification, cdn, caching, sprites, minimize http calls");
optimize.showQuestion();
optimize.showAnswer();