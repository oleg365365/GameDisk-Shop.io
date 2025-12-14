// Масив корзини
let cart = [];

// Поточна мова
let currentLang = 'ua';

// Ціни товарів
const prices = {
  "GTA V": 800,
  "The Witcher 3": 700,
  "Minecraft": 600
};

// Додавання товару в корзину
function addToCart(name) {
  cart.push(name);
  renderCart();
}

// Відображення корзини
function renderCart() {
  const list = document.getElementById("cart-list");
  const totalEl = document.getElementById("total");
  list.innerHTML = "";

  let total = 0;
  let count = {};

  // Рахуємо дублікти
  cart.forEach(item => {
    count[item] = (count[item] || 0) + 1;
  });

  cart.forEach(item => {
    total += prices[item];

    const li = document.createElement("li");
    li.className = "list-group-item";

    if (count[item] > 1) {
      li.classList.add("duplicate");
      li.textContent = item + " (дубликат)";
    } else {
      li.textContent = item;
    }

    list.appendChild(li);
  });

  totalEl.textContent =
    currentLang === 'ua'
      ? `Сума: ${total} грн`
      : `Сумма: ${total} грн`;
}

// Фейкова оплата
function pay() {
  cart = [];
  renderCart();
  alert(
    currentLang === 'ua'
      ? "Дякуємо за покупку!"
      : "Спасибо за покупку!"
  );
}

// Перемикання теми
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Перемикання мови
function setLang(lang) {
  currentLang = lang;

  document.getElementById("title").textContent =
    lang === 'ua'
      ? "Магазин ігрових дисків"
      : "Магазин игровых дисков";

  renderCart();
}