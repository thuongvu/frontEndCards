var FlashCard = function(question, answer, topic) {
	this.question = question;
	this.answer = answer;
	this.topic = topic;
};

FlashCard.prototype = {
	constructor: FlashCard,
	showQuestion: function() {
		document.getElementById("card-front").innerText = this.question;
	},
	showAnswer: function() {
		document.getElementById("card-back").innerText = this.answer;
	},
	showTopic: function() {
		document.getElementById("topic").innerText = this.topic;
	},
	cardsArray: [],
	makeCardsPushIntoArr: function() {
		for (var i = 0; i < cards.length; i++) {
				this.cardsArray.push(new FlashCard(cards[i].question, cards[i].answer, cards[i].topic));
		};
	}
}

// FlashCard.prototype.showQuestion = function() {
// 	document.getElementById("card-front").innerText = this.question;
// };
// FlashCard.prototype.showAnswer = function() {
// 	document.getElementById("card-back").innerText = this.answer;
// };
// FlashCard.prototype.showTopic = function() {
// 	document.getElementById("topic").innerText = this.topic;
// };

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

// var cardsArray = [];
// for (var i = 0; i < cards.length; i++) {
// 		cardsArray.push(new FlashCard(cards[i].question, cards[i].answer, cards[i].topic));
// };
var newObj = new FlashCard();

newObj.makeCardsPushIntoArr();
console.log(newObj.cardsArray);

// console.log(cardsArray);
cardsArray[0].showQuestion();
cardsArray[0].showAnswer();
cardsArray[0].showTopic();

var EventUtility = {
	addHandler: function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent(type, handler);
		} else {
			element["on" + type] = handler;
		};
	},
	removeHandler: function(element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) {
			element.detachEvent(type, handler);
		} else {
			element["on" + type] = null;
		};
	},
	getEvent: function(event) {
		return event ? event : window.event;
	},
	getTarget: function(event) {
		return event.target || event.srcElement;
	}
}

var clickHandler = function() {
	var target = null;
	event = EventUtility.getEvent(event);
	target = EventUtility.getTarget(event);
	switch (target.id) {
		case "randomize":
			console.log("randomize");
			break;
	}
};

EventUtility.addHandler(document.getElementById("randomize"), "click", clickHandler);





