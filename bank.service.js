// DO NOT TOUCH THIS PART

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const generateCardNumber = () => {
    return 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, _ => String(getRandomInt(9)));
};

// EXERCISE starts from here

/*
​
Card class creates a card, In the Card class you will
need to create a way so that we can get the card number
​
*/
class Card{
    
    constructor({ name, surname, pinCode }) {
        if(name && surname){
        this.name= name
        this.surname = surname
        }else{
            throw new Error ('name and surname must be valid')
        }
        if(!isNaN(pinCode)){
        this.pinCode = pinCode
        }else{
            throw new Error('pincode must include only numbers')
        }

        
        
    }

    #cardNumber = generateCardNumber();

    get number(){
        return this.#cardNumber
         }

    #moneyAmount = 0

    get moneyAmount(){
        return this.#moneyAmount
    }
    set moneyAmount(amount){
        this.#moneyAmount = amount
    }

    /*
​
         you will also need to do some logical checks so the name is not empty
         or the pin only consists of numbers
         and throw an error if the the condition is not met,
         you will also need to handle the error in the place where we use the Card constructor
​
          */
}

const card = new Card({
    name: 'John',
    surname: 'Smith',
    pinCode: 12345
});

console.log(card) // has the following signature { name: 'John', surname: 'Smith',pinCode: 12345 } 

// getCardNumber obviously need to be implemented
console.log(card.number) // '1234-1234-1234-1234';

/*
​
​
​
In Card Service you will need to create an easy and logical way of adding cards
​
All the methods and properties need to be static
​
When doing some operations ->
​
You will need to somehow keep the card records and check if the card is valid or not
​
​
*/

class CardService{
   
    static list =[]
    

    static addCard(card){
        if(!this.checkCardExistence(card.number)){
            this.list.push(card)
        }
    }

    static removeCard(card){
        
     for(let i =0; i<this.list.length;i++){
        if(this.list[i].number === card.number){
            this.list.splice(i,1)
        }
     }
    }

    static checkCardExistence(numbers){
       
        for(let i =0;i <this.list.length;i++){
            if(this.list[i].number === numbers){
                return this.list[i] 
            }
        }
        // return true if the card exists
        // this will help you avoid duplicate card codes numbers
    }

    static addMoney(cardNumber, amount){
        let card = this.checkCardExistence(cardNumber)
        if(card){
           card.moneyAmount += amount
        }
    }

    static removeMoney(card, amount){
    let card0 = this.checkCardExistence(card.number)
        if(card0?.moneyAmount>=amount){
          card0.moneyAmount -= amount
           return true
        }else{
           throw new Error ('you cant take more money then you moneyAmount is')
        }
    }

    static transferFromTo(card, toCardNumber, amount){
        let card1=this.checkCardExistence(card.number)
        let card2=this.checkCardExistence(toCardNumber)
        if(card1 && card2){
            if(this.removeMoney(card1,amount)){
                  card2.moneyAmount += amount
                }else{
                    return 'there is not enough money'
                }     
            }else{
               return 'cards are not valid'
            }
        }

        // the transactions need to be safe

        // calls removeMoney and addMoney methods accordingly

    }


//  ATM class is simple
// All methods are static

class ATM {

    static totalMoney = 0;

    static refill(amount){
        this.totalMoney += amount
        // this method refills the amount of the money in the ATM
    }

     static getMoney(card, amount){
     if(this.totalMoney >= amount){
        CardService.removeMoney(card,amount)
        this.totalMoney-=amount
     }else{
        throw new Error ('there is not enough money')
     }
      
        // you will need to call Card service appropriate method in order to get the money
        // if there is not enough money in the ATM you will need to throw error

    }

}

// All methods are static

class Terminal{
    totalAmountOfMoney = 0;

    static transferToCard(cardNumber, amount){
        let card = CardService.checkCardExistence(cardNumber)
      if(card){
       return card.moneyAmount += amount
      }
    }

}


const anotherCard = new Card({
    name: 'Joseph',
    surname: 'Clooney',
    pinCode: 58951
});

CardService.addCard(card)
CardService.addCard(anotherCard)
CardService.removeCard(anotherCard)
CardService.addMoney(card.number,1000)
CardService.removeMoney(card,500)
CardService.transferFromTo(card,anotherCard.number,200)


console.log(CardService.list)
console.log(card.moneyAmount)
console.log(anotherCard.moneyAmount)
console.log(anotherCard.number)

ATM.refill(1000)
ATM.getMoney(card,20)
console.log(card.moneyAmount)
console.log(ATM.totalMoney)

Terminal.transferToCard(card.number,100)
console.log(card.moneyAmount)