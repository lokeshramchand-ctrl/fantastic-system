const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active'); // Show the navbar
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); // Hide the navbar
    });
}

/* Cart Button */

const cart = [];

document.querySelectorAll('.add-to-cart').forEach(cartButton => {
  cartButton.addEventListener('click', (event) => {
    event.preventDefault(); 

    const product = event.target.closest('.add-to-cart').getAttribute('data-product');
    cart.push(product); 

    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = product;
    cartItems.appendChild(listItem);

    alert(`${product} has been added to the cart!`);
  });
});
