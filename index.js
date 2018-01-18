var cart = [];

function getKeys() {
  var keyArray = [];  
  for (var i=0; i < cart.length; i++) {
        keyArray[i] = Object.keys(cart[i]);
  }
  return keyArray;
}

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var priceOfItem = Math.floor(Math.random()*(100-1)+1);
 cart[cart.length] = {[item]: priceOfItem};
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
<<<<<<< HEAD
  var keyArray = getKeys();
  var message;
  

  if (cart.length === 0) {
    message = "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    message = `In your cart, you have ${keyArray[0]} at $${cart[0][keyArray[0]]}.`;    
  } else if (cart.length === 2) {
    message = `In your cart, you have ${keyArray[0]} at $${cart[0][keyArray[0]]} `;
    message += `and ${keyArray[1]} at $${cart[1][keyArray[1]]}.`;      
  } else {
    message = `In your cart, you have ${keyArray[0]} at $${cart[0][keyArray[0]]}, `;
    for (var j=1; j < cart.length - 1; j++) {
     message += `${keyArray[j]} at $${cart[j][keyArray[j]]}, `;
     }
    message += `and ${keyArray[cart.length-1]} at $${cart[cart.length-1][keyArray[cart.length-1]]}.`; 
  }

  console.log(message);
}

function total() {
  var sum = 0;
  var keyArray = getKeys();
  
  for (var j=0; j < cart.length; j++) {
    sum =+ sum + parseInt(cart[j][keyArray[j]]);
=======
  var firstElement;
  var middleElements;
  var lastElement;
  var keyArray = [];
  
  for (var i=0; i < cart.length; i++) {
        keyArray[i] = Object.keys(cart[i]);
        console.log("Key: ");
        console.log(keyArray[i]);
  }

  if (cart.length === 0) {
    console.log("Your shopping cart is empty");
  } else if (cart.length === 1) {
    firstElement = cart.slice(0, 1);
    var firstKey = Object.keys(firstElement[0]);
    console.log(firstKey);
    console.log(`In your cart, you have ${firstKey} at ${firstElement[0][firstKey]}.`);    
  } else if (cart.length === 2) {
    firstElement = cart.slice(0, 1);    
    lastElement = cart.slice(cart.length-1, cart.length);       
    console.log(firstElement);
  } else {
    firstElement = cart.slice(0, 1);     
    middleElements = cart.slice(1, cart.length-1);
    lastElement = cart.slice(cart.length-1, cart.length);

    console.log(`In your cart, you have `);
    console.log(`${keyArray[0]} at $firstElement[keyArray[0]]`);
  }

}

function total() {
  // write your code here
  var sum = 0;
  for (var i=0; i < cart.length; i++)
  {
    sum += sum + cart[i][keyArray[i]];
>>>>>>> 648fe77113dd27915c9fc7dfa23f3db660a7ef22
  }
  return sum;
}

function removeFromCart(item) {
  var keyArray = getKeys();
  var itemIsInCart = false;
  var positionInCart;
  
  for (var i=0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
        itemIsInCart = true;
        positionInCart = i;
        break;
    }
  }
  
  if (itemIsInCart) {
    cart.splice(positionInCart,1);
  } else {
    console.log("That item is not in your cart.")
  }
  
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    var sum = total();
    console.log(`Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
