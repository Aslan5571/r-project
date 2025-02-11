const menuContainer = document.querySelector(".menu-items");
const orderContainer = document.createElement("div");
orderContainer.classList.add("order-container");

const orderTitle = document.createElement("h2");
orderTitle.innerText = "Ваш заказ";
orderContainer.appendChild(orderTitle);

const orderList = document.createElement("div");
orderContainer.appendChild(orderList);

const orderButton = document.createElement("button");
orderButton.innerText = "Оформить заказ";
orderButton.classList.add("order-button");
orderButton.style.display = "none";
orderContainer.appendChild(orderButton);

const orderForm = document.createElement("div");
orderForm.classList.add("order-form");
orderForm.style.display = "none";

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Введите ваше имя";

const contactInput = document.createElement("input");
contactInput.type = "text";
contactInput.placeholder = "Введите ваш телефон";

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Введите ваш email";

const confirmButton = document.createElement("button");
confirmButton.innerText = "Подтвердить заказ";

orderForm.appendChild(nameInput);
orderForm.appendChild(contactInput);
orderForm.appendChild(emailInput);
orderForm.appendChild(confirmButton);

document.body.appendChild(orderContainer);
document.body.appendChild(orderForm);

const menuItems = [
  {
    name: "Classic Lemonade",
    description: "A refreshing beverage made with freshly squeezed lemons.",
    price: "4.0$",
    image: "photo/classicLemonade.png",
    style: { width: "180px", height: "280px" },
  },
  {
    name: "Classic Frappe",
    description:
      "Chilled, creamy coffee blended with ice for a perfect cool treat.",
    price: "3.5$",
    image: "photo/Frappe.png",
    style: { width: "180px", height: "280px" },
  },
  {
    name: "Ice Latte",
    description:
      "Iced espresso combined with cold milk, served over ice for a refreshing taste.",
    price: "4.5$",
    image: "photo/icelatte.png",
    style: { width: "180px", height: "280px" },
  },
  {
    name: "Lemonade Kiwi",
    description:
      "Refreshing, tangy kiwi lemonade mixed with ice for a perfectly cool drink.",
    image: "photo/lemonadeKIWI.png",
    style: { width: "180px", height: "280px" },
    price: "2.6$",
  },
  {
    name: "Tonic",
    description:
      "Bold, energizing tonic infused with Red Bull for a perfectly crisp boost.",
    image: "photo/tonic.png",
    style: { width: "180px", height: "280px" },
    price: "3.7$",
  },
];

menuContainer.style.display = "flex";
menuContainer.style.justifyContent = "center";
menuContainer.style.flexWrap = "wrap";
menuContainer.style.gap = "20px";

// Функция для обновления меню
function updateMenu(filteredItems) {
  menuContainer.innerHTML = "";

  filteredItems.forEach((item) => {
    const menuItemElement = document.createElement("div");
    menuItemElement.classList.add("menu-item");

    let imageHTML = "";
    if (item.image) {
      imageHTML = `<img src="${item.image}" style="width: ${item.style?.width || "auto"}; height: ${item.style?.height || "auto"};">`;
    }

    menuItemElement.innerHTML = `
            ${imageHTML}
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>Price: ${item.price}</strong></p>
            <button class="add-to-order">Add to Order</button>
        `;

    // Добавляем обработчик события на кнопку "Добавить в заказ"
    const addToOrderBtn = menuItemElement.querySelector(".add-to-order");
    addToOrderBtn.addEventListener("click", () => addToOrder(item));

    menuContainer.appendChild(menuItemElement);
  });
}

function addToOrder(item) {
  const orderItem = document.createElement("div");
  orderItem.classList.add("order-item");
  orderItem.innerHTML = `
        <p>${item.name} - <strong>${item.price}</strong></p>
    `;
  orderList.appendChild(orderItem);

  orderButton.style.display = "block";
}

orderButton.addEventListener("click", () => {
  orderForm.style.display = "block"; // Показываем форму для ввода данных
});

confirmButton.addEventListener("click", () => {
  if (nameInput.value && contactInput.value && emailInput.value) {
    Toastify({
      text: `Заказ оформлен!\nИмя: ${nameInput.value}\nТелефон: ${contactInput.value}\nEmail: ${emailInput.value}`,
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "rgb(215, 184, 153)",
    }).showToast();
  } else {
    Toastify({
      text: "Пожалуйста, заполните все поля!",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "red",
    }).showToast();
  }
});

updateMenu(menuItems);
