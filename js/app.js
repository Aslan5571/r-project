const searchInput = document.getElementById("search"); // достаём дисплей через дом
const searchBtn = document.getElementById("search-btn"); // достаём кнопку через дом
searchBtn.addEventListener("click", function () {
  // навешиваем слушатель событий
  const query = searchInput.value.toLowerCase(); // делаем нечувствительным к регистру
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(query),
  );
  updateMenu(filteredItems);
});
