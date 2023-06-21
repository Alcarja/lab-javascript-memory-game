class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if(!this.cards) {
      return undefined;
    }
    for (let i = this.cards.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [this.cards[i]], this.cards[j] = [this.cards[j], this.cards[i]];
    }
    // ... write your code here
  }

  


  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if(card1 === card2) {
      this.pairsGuessed +=1;
      return true;
    } else {return false}
    // ... write your code here
  }

  checkIfFinished() {
    if(this.pairsGuessed === this.cards.length / 2) {
       return true;
    } else {return false}
    // ... write your code here
  }
}
