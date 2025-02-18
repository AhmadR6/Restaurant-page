export function menuPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  const menuContainer = document.createElement("div");
  const menu = document.createElement("div");

  menuContainer.id = "menuContainer";
  menu.id = "menu";

  content.appendChild(menuContainer);
  menuContainer.appendChild(menu);
}
