
const menuContainer = document.querySelector(".menu-items");

const menuItems = [ 
    { 
        name: "Classic Lemonade", 
        description: "A refreshing beverage made with freshly squeezed lemons.", 
        price: "4.0$", 
        image: "photo/classicLemonade.png",  
        style: { width: "180px", height: "280px" }
    },
    { 
        name: "Classic Frappe", 
        description: "Chilled, creamy coffee blended with ice for a perfect  cool treat.", 
        price: "3.5$" , 
        image: "photo/Frappe.png",  
        style: { width: "180px", height: "280px" }
    },
    { 
        name: "Ice Latte", 
        description: "“Iced espresso combined with cold milk, served over ice for a refreshing taste.”", 
        price: "4.5$",
         image: "photo/icelatte.png",  
        style: { width: "180px", height: "280px" }
    } ,
    {
        name: "lemonade KIWI ",
        description: "Refreshing, tangy kiwi lemonade mixed with ice for a perfectly cool drink." ,
        image: "photo/lemonadeKIWI.png" ,
        style: { width: "180px", height: "280px" },
        price: "2.6$"
    } ,
    {
        name: "Tonic",
        description:  "Bold, energizing tonic infused with Red Bull for a perfectly crisp boost.",
        image : "photo/tonic.png",
        style:{width: "180px", height: "280px" },
        price: "3.7$"
    }
];
menuContainer.style.display = "flex";
menuContainer.style.justifyContent = "center";
menuContainer.style.flexWrap = "wrap";
menuContainer.style.gap = "20px";


function updateMenu(filteredItems) { // фильтруем в поисковике наличие заданного
    menuContainer.innerHTML = '';

    filteredItems.forEach(item => {
        const menuItemElement = document.createElement("div");
        menuItemElement.classList.add("menu-item");

        // Если изображение присутствует, добавляем его
        let imageHTML = '';
        if (item.image) {
            imageHTML = `<img src="${item.image}" style="width: ${item.style?.width || 'auto'}; height: ${item.style?.height || 'auto'};">`;
        } // получается если изображение есть то происходит через код внутри фигурныx кавычек

        menuItemElement.innerHTML = `
            ${imageHTML}
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>Price: ${item.price}</strong></p>
            
        `;
        
        menuContainer.appendChild(menuItemElement);
    });
}

// Вызов функции для обновления меню
updateMenu(menuItems);