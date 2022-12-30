// Class that holds the persons order and total cost
class CoffeeShopTill {
    constructor() {
        this.shopName = "Code Nation Coffee";
        this.order = [];
        this.total = 0;
    }
    // this method adds a new item to the order array
    placeOrder(item) {
        this.order.push(item);
        return this;
    }

    // this method console logs a recipt including a map method to list all items 
    // in the order array, as well as how much change the customer has left
    printRecipt() {
        console.log(`
        ---${this.shopName}---
        ${this.name}'s order:
        ${this.order.map((item) => `${item.drink} - £${item.price.toFixed(2)}` ).join('\n        ')}
            
        Your Total:
        £${this.total.toFixed(2)}

        You have £${this.wallet.toFixed(2)} left in your wallet
        `);
    }

    // this method calculates the total cost of the order and runs the checkFunds 
    // method located in the Customer subclass
    pay() {
        this.total = 0;
        for (let i = 0; i < this.order.length; i++) {
            this.total += this.order[i].price;
        }
        this.checkFunds();
    }
}

// Customer subclass holds more specific information about the customer
class Customer extends CoffeeShopTill{
    constructor(name, wallet) {
        super();
        this.name = name;
        this.wallet = wallet;
    }

    // this method checks to see if the customer has enough money to pay for the order
    // and then runs the print recpit method if they can pay
    checkFunds() {
        if(this.wallet < this.total){
            console.log(`You need another £${(this.total - this.wallet).toFixed(2)} to pay`);
            return;
        }

        this.wallet -= this.total;
        this.printRecipt();
    }
}

// create instance of Customer subclass passing it the customers name and how much 
// money they have and store it in variable
let order1 = new Customer('Hasan', 12);

// order 2 items and run the pay method
order1.placeOrder({drink: 'Coffee', price: 2.5}).placeOrder({drink: 'Tea', price: 3}).pay();
order1.placeOrder({drink: 'drink 2', price: 5}).pay();


let order2 = new Customer('Ronaldo', 1000);
order2.placeOrder({drink: 'caviar', price: 100}).placeOrder({drink: 'pepsi', price: 13}).pay();
