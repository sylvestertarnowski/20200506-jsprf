
/**
  #Task:
  1. Assuming that the bank server has data related to the amount of current exchange rates.
  When buying 4 products in EUR, specify how much you have to pay in PLN.
  Expand the bank API so that it can provide you with fresh currency data.

  #Goal:
  The Exit from hell-concept of callbacks is: Promises.
  Refreshing / remind of easiest way to create a Promise.
*/
const makeItem = (name, amount, value) => ({name, amount, value});

const bankAPI = {
  // Here we will need to change something:
  fetchCurrencies() {
    const plnTo = {
      USD: 3.78602,
      EUR: 4.32559,
      PLN: 1
    };
  }
};

const yourCart = [
  makeItem('Die cast toy: Tow Mater', 3, 66),
  makeItem('Infento: Genius Kit', 1, 549),
];

const valueInUSD = yourCart.map(i => i.value).reduce((acc, value) => acc + value);

// Your solution:
let valueInPLN = 0;

console.log('Your cart value in USD:', valueInUSD);
console.log('Your cart value in PLN:', valueInPLN);


