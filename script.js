function FlashCardApp() {
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
		makeCardsPushIntoArr: function(cards) {
			for (var i = 0; i < cards.length; i++) {
					this.cardsArray.push(new FlashCard(cards[i].question, cards[i].answer, cards[i].topic));
			};
		},
		showRandomCard: function() {
			var randomNumber = Math.floor(Math.random() * this.cardsArray.length);
			this.cardsArray[randomNumber].showQuestion();
			this.cardsArray[randomNumber].showAnswer();
			this.cardsArray[randomNumber].showTopic();
		}
	}


	var flashCardInstance = new FlashCard();
	flashCardInstance.makeCardsPushIntoArr(cards);
	flashCardInstance.showRandomCard();

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
		var event = EventUtility.getEvent(event);
		target = EventUtility.getTarget(event);
		switch (target.id) {
			case "randomize":
				flashCardInstance.showRandomCard();
				break;
		}
	};

	EventUtility.addHandler(document.getElementById("randomize"), "click", clickHandler);



}
var flashCardAppInstance = new FlashCardApp();



