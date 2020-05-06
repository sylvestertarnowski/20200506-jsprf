
/**
   #Task:
   1. Assuming that the bank server has data related to the amount of current exchange rates.
   When buying 4 products in EUR, specify how much you have to pay in PLN.
   Expand the bank API [in the easiest way you know = callbacks] so that it can provide you current currency data.

   2. How can you handle errors in the solution we propose?

   #Goal:
   Showing practical use of function as callback.
   Outline of the "Callback Hell" problem.
*/

const makeItem = (name, amount, value) => ({name, amount, value});

const bankAPI = {

  // Here we will need to change something:
  fetchCurrencies(callbackFn) {
    const plnTo = {
      USD: 3.78602,
      EUR: 4.32559,
      PLN: 1
    };
    callbackFn(plnTo)
    // return plnTo;
  }
};

const yourCart = [
  makeItem('Die cast toy: Tow Mater', 3, 66),
  makeItem('Infento: Genius Kit', 1, 549),
];

const valueInUSD = yourCart.map(i => i.value).reduce((acc, value) => acc + value);

// Your solution:
const valueInPLN = 0;
bankAPI.fetchCurrencies((currency) => {
    console.log(currency)
});


console.log('Your cart value in USD:', valueInUSD);
console.log('Your cart value in PLN:', valueInPLN);

