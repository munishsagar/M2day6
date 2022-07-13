/*
Details:    Today you are in charge of building the shopping cart logic for a website that supports ambassadors. 
            Your job is to build a program flow that will elaborate a list of prices, a user and a shipping cost to calculate the correct cart total. 

            If the user is an ambassador, the cart should be discounted of 30% BEFORE shipping cost (ambassadors still pay shipping)
            If the user is NOT an ambassador, the cart should NOT be discounted
            Either way, if the cart goes over 100, shipping cost should be 0.

            Some users as examples are already provided.
            
           
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

const prices = [34, 5, 2];
const shippingCost = 50;
const percentage = (30 * 50) / 100;
//console.log(percentage);

const sumArray = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
const total = sumArray(prices);

const shipping = function (cart, cus1, shipping) {
  let finalcart = 0;
  if (cart < 100) {
    shipping = 0;

    if (cus1.isAmbassador) {
      finalcart = cart + percentage;
    } else {
      finalcart = cart + shipping;
    }
  }
  return finalcart;
};
const result = shipping(total, marco, shippingCost);
const result1 = shipping(total, paul);
console.log(result);
