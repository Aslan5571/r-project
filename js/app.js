const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click" , function(){
    const query = searchInput.value.toLowerCase(); // делаем нечувствительным к регистру
    const filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(query));
    updateMenu(filteredItems);
})


