let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  const discountElement = document.getElementById('crypto-discount');

  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₲${item.price.toLocaleString()}`;
    cartItems.appendChild(li);
  });

  totalElement.textContent = `Total: ₲${total.toLocaleString()}`;
  discountElement.innerHTML = ''; // ocultamos el descuento hasta que elijan cripto
}

// Esta función se llama cuando el usuario elige pagar con cripto
function showCryptoDiscount() {
  const discountElement = document.getElementById('crypto-discount');
  const discount = total * 0.10;
  const discountedTotal = total - discount;

  discountElement.innerHTML = `
    <strong>Pagando con criptomonedas tenés un 10% de descuento:</strong><br>
    Total con descuento: <strong>₲${discountedTotal.toLocaleString()}</strong>
  `;
}cart.forEach(item => {
  const li = document.createElement('li');
  li.textContent = `${item.name} - ₲${item.price.toLocaleString()}`;
  li.classList.add("cart-item-animate");
  cartItems.appendChild(li);
});
discountElement.classList.remove("discount-animate"); // Reinicia la animación
void discountElement.offsetWidth; // Hack para reiniciar
discountElement.classList.add("discount-animate");
discountElement.innerHTML = `
  <strong>Pagando con criptomonedas tenés un 10% de descuento:</strong><br>
  Total con descuento: <strong>₲${discountedTotal.toLocaleString()}</strong>
`;
function updateAllViewCounters() {
  const counters = document.querySelectorAll('.view-counter');

  counters.forEach(counter => {
    const min = 3;
    const max = 30;
    const viewers = Math.floor(Math.random() * (max - min + 1)) + min;
    const viewText = `${viewers} persona${viewers > 1 ? 's' : ''} está${viewers > 1 ? 'n' : ''} viendo este producto ahora`;
    counter.textContent = `💥 ${viewText}`;
  });
}

// Actualizar al cargar
updateAllViewCounters();

// Luego, actualizar cada 5 segundos
setInterval(updateAllViewCounters, 5000);



