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

var HtmlCard = function(question, answer) {
	FlashCard.call(this, question, answer);
	this.topic = "html";
};
HtmlCard.prototype = new FlashCard();
HtmlCard.prototype.showTopic = function() {
	document.getElementById("topic").innerText = this.topic;
};

var CssCard = function(question, answer) {
	FlashCard.call(this, question, answer);
	this.topic = "css";
};
CssCard.prototype = new FlashCard();
CssCard.prototype.showTopic = function() {
	HtmlCard.prototype.showTopic.call(this);
}

var JsCard = function(question, answer) {
	FlashCard.call(this, question, answer);
	this.topic = "js";
};
JsCard.prototype = new FlashCard();
JsCard.prototype.showTopic = function() {
	HtmlCard.prototype.showTopic.call(this);
}




var cards = [
	{
		"topic": "html",
		"question": "semantic html",
		"answer": "agreed meaning of html elements, attributes, values something else"
	},
	{
		"topic": "html",
		"question": "optimize",
		"answer": "file concat, minification, cdn, caching, sprites, minimize http calls"
	}
];

var htmlArr = [];
for (var i = 0; i < cards.length; i++) {
	if (cards[i].topic === "html") {
		htmlArr.push(new HtmlCard(cards[i].question, cards[i].answer));
	}
	
};

console.log(htmlArr);
htmlArr[0].showQuestion();
htmlArr[0].showAnswer();
// htmlArr[0].showTopic();
