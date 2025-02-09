
const menuContainer = document.querySelector(".menu-items"); 

const menuItems = [
    {name: "Burger" , description: "Delicious burger with tommato sauce" , price: "9.5$" , },
    {name: "Soda" , description:"Fresh juice to cool off your desert throat" , price: "3.5$"},
    {name: "Pizza" , description:"Classic pizza with mozzarella and pepperoni." , price: "13.5$"},

    
 ];
// another line 
function updateMenu(filteredItems){
    menuContainer.innerHTML = '';

    filteredItems.forEach(item => {
        const menuItemElement = document.createElement("div");
        menuItemElement.classList.add("menu-item");
        menuItemElement.innerHTML =`
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p><strong>Price: ${item.price}</strong></p>
        `;
        
        menuContainer.appendChild( menuItemElement)
    });
}