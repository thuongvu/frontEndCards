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

var cards = [
	{
		"question": "semantic html",
		"answer": "agreed meaning of html elements, attributes, values"
	},
	{
		"question": "optimize",
		"answer": "file concat, minification, cdn, caching, sprites, minimize http calls"
	}
];

var htmlArr = [];
for (var i = 0; i < cards.length; i++) {
	htmlArr.push(new FlashCard(cards[i].question, cards[i].answer));
};

console.log(htmlArr);
htmlArr[1].showQuestion();
