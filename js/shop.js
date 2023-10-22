// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
// Buscamos el producto con el ID proporcionado
function buy(id) {
  let product = 0;
  for (let i = 0; i < products.length; i++) {
    if (id === products[i].id) {
      product = products[i];
      break;
    }
  }

  // agregamos el producto encontrado en el array o actualizamos la cantidad del producto si ya existe
  if (product !== null) {
    // verificamos si el producto ya existe en el array, buscando su indice
    let indexExistingProduct = cart.findIndex((item) => item.id === id);
    if (indexExistingProduct !== -1) {
      // si existe, aumentamos la cantidad al procucto
      cart[indexExistingProduct].quantity++;
    } else {
      // si no existe, agregamos el producto al array con cantidad de 1
      cart.push({
        ...product,
        quantity: 1,
        subtotal: 0,
        subtotalWithDiscount: 0,
      });
    }
  }
  console.table(cart);
}

// Exercise 2
function cleanCart() {
  cart.length = 0;
  total = 0;
  console.log(cart);
  printCart(); // para que el carrito refleje el precio en "0"
  alert("Carrito limpiado.");
}
// Exercise 3
function calculateTotal() {
  total = 0; 

  for (const item of cart) {
    total += item.price * item.quantity;
  }

  return total;
}
console.log(`Total price of the cart: ${total.toFixed(2)}€`);
// Exercise 4
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  total = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === 1 && cart[i].quantity >= 3) {
      cart[i].price = 10;
      cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
    } else if (cart[i].id === 3 && cart[i].quantity > 10) {
      cart[i].price = 3.5;
      cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
    } else {
      cart[i].subtotal = cart[i].price * cart[i].quantity;
      cart[i].subtotalWithDiscount = 0;
    }
    total += cart[i].subtotalWithDiscount + cart[i].subtotal;
  }
  
  console.table(cart);
  console.log(`Total price of the cart: ${total.toFixed(2)}€`);
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  applyPromotionsCart();

  const $cart = document.getElementById("cart_list");
  $cart.innerHTML = "";

  total = 0;
  for (let i = 0; i < cart.length; i++) {
    const $tr = document.createElement("tr"),
      $th = document.createElement("th"),
      $tdPrice = document.createElement("td"),
      $tdQuantity = document.createElement("td"),
      $tdSubtotal = document.createElement("td"),
      $tdRemove = document.createElement("td"),
      $removeButton = document.createElement("button");

    $th.setAttribute("scope", "row");
    $removeButton.getAttribute("style");
    $removeButton.setAttribute("type", "button");
    $removeButton.setAttribute("color", "primary");
    $removeButton.style.borderRadius = "0.5rem";
    $removeButton.addEventListener("click", () => removeFromCart(cart[i].id));
    $tdSubtotal.style.textAlign = "center";
    $tdQuantity.style.textAlign = "center";

    $th.innerHTML = cart[i].name;
    $tdPrice.innerHTML = cart[i].price;
    $tdQuantity.innerHTML = cart[i].quantity;
    $removeButton.innerHTML = "Remove";
    $tdSubtotal.innerHTML = cart[i].subtotalWithDiscount || cart[i].subtotal;
    total += cart[i].subtotalWithDiscount + cart[i].subtotal;

    $tr.appendChild($th);
    $tr.appendChild($tdPrice);
    $tr.appendChild($tdQuantity);
    $tr.appendChild($tdSubtotal);
    $tr.appendChild($tdRemove);
    $tdRemove.appendChild($removeButton);
    $cart.appendChild($tr);
  }
  const $totalPrice = document.getElementById("total_price");
  $totalPrice.innerHTML = total.toFixed(2) + "€";
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  let removeItem = null;
  for (let i = 0; i < cart.length; i++) {
    if (id === cart[i].id) {
      removeItem = cart[i];
    }
  }
  if (removeItem !== null) {
    let indexExistingItem = cart.findIndex((item) => {
      return item.id === id;
    });
    if (indexExistingItem !== -1) {
      cart[indexExistingItem].quantity--;

      if (cart[indexExistingItem].quantity === 0) {
        cart.splice(indexExistingItem, 1);
      } else if (
        cart[indexExistingItem].quantity < 3 &&
        cart[indexExistingItem].id === 1
      ) {
        cart[indexExistingItem].price = 10.5;
        cart[indexExistingItem].subtotalWithDiscount = 0;
      } else if (
        cart[indexExistingItem].quantity <= 10 &&
        cart[indexExistingItem].id === 3
      ) {
        cart[indexExistingItem].price = 5;
        cart[indexExistingItem].subtotalWithDiscount = 0;
      }
      applyPromotionsCart();
    }
    printCart();
  } else {
    console.log("Product not found");
  }
  console.table(cart);
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
