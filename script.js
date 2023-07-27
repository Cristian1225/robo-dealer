// Card Object Constructor
function Card(value, suit) {
    this.value = value;
    this.suit = suit;
  }
  
  // Utility function to get the name of face cards
  function getFaceCardName(value) {
    switch (value) {
      case 1:
        return 'Ace';
      case 11:
        return 'Jack';
      case 12:
        return 'Queen';
      case 13:
        return 'King';
      default:
        return value.toString();
    }
  }
  
  // Function to create a standard deck of cards
  function createDeck() {
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    const deck = [];
  
    for (let suit of suits) {
      for (let value = 1; value <= 13; value++) {
        deck.push(new Card(value, suit));
      }
    }
  
    return deck;
  }
  
  // Function to deal 5 random cards
  function dealHand(deck) {
    const hand = [];
    const drawnIndices = [];
  
    while (hand.length < 5) {
      const randomIndex = Math.floor(Math.random() * 52);
  
      if (!drawnIndices.includes(randomIndex)) {
        drawnIndices.push(randomIndex);
        hand.push(deck[randomIndex]);
      }
    }
  
    return hand;
  }
  
  function drawHand() {
    const deck = createDeck();
    const hand = dealHand(deck);
    const handContainer = document.getElementById('hand');
    handContainer.innerHTML = '';
  
    hand.forEach(card => {
      const cardName = card.value > 10 ? getFaceCardName(card.value) : card.value;
      const cardText = `${cardName} of ${card.suit}`;
      const cardElement = document.createElement('p');
      cardElement.textContent = cardText;
      handContainer.appendChild(cardElement);
    });
  }
  