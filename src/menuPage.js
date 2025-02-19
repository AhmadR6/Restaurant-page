import filetMignonImg from "./assets/filetMignon.jpeg";
import NewYorkStripImg from "./assets/rare-new-york-strip.jpeg";
import ribeyeImg from "./assets/ribeye.jpg";
import tomahawkImg from "./assets/tomahawk.jpeg";
import wagyuImg from "./assets/wagyu.jpeg";
// Function to create a single menu item
function createMenuItem(name, price, description, imageSrc) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const menuItemImage = document.createElement("img");
  menuItemImage.classList.add("menu-item-image");
  menuItemImage.src = imageSrc; // Set the source of the image

  const menuItemText = document.createElement("div");
  menuItemText.classList.add("menu-item-text");

  const menuItemHeading = document.createElement("h3");
  menuItemHeading.classList.add("menu-item-heading");

  const menuItemName = document.createElement("span");
  menuItemName.classList.add("menu-item-name");
  menuItemName.textContent = name;

  const menuItemPrice = document.createElement("span");
  menuItemPrice.classList.add("menu-item-price");
  menuItemPrice.textContent = price;

  const menuItemDescription = document.createElement("p");
  menuItemDescription.classList.add("menu-item-description");
  menuItemDescription.textContent = description;

  menuItemHeading.appendChild(menuItemName);
  menuItemHeading.appendChild(menuItemPrice);
  menuItemText.appendChild(menuItemHeading);
  menuItemText.appendChild(menuItemDescription);

  menuItem.appendChild(menuItemImage);
  menuItem.appendChild(menuItemText);

  return menuItem;
}

// Function to create a menu group
function createMenuGroup(groupTitle, items) {
  const menuGroupHeading = document.createElement("h2");
  menuGroupHeading.classList.add("menu-group-heading");
  menuGroupHeading.textContent = groupTitle;

  const menuGroup = document.createElement("div");
  menuGroup.classList.add("menu-group");

  items.forEach((item) => {
    const menuItem = createMenuItem(
      item.name,
      item.price,
      item.description,
      item.imageSrc
    );
    menuGroup.appendChild(menuItem);
  });

  const menuGroupContainer = document.createElement("div");
  menuGroupContainer.classList.add("menu-group-container");
  menuGroupContainer.appendChild(menuGroupHeading);
  menuGroupContainer.appendChild(menuGroup);

  return menuGroupContainer;
}

// Main function to build the menu page
export function menuPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer");

  // Define your menu groups and items
  const signatureSteaks = [
    {
      name: "Filet Mignon",
      price: "12.90$",
      description:
        "Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque.",
      imageSrc: filetMignonImg,
    },
    {
      name: "New York Strip",
      price: "14.50$",
      description: "A premium cut with rich marbling for that perfect balance.",
      imageSrc: NewYorkStripImg,
    },
    {
      name: "Ribeye",
      price: "16.50$",
      description:
        "Generously marbled and cooked to your perfect temperature, with a natural buttery flavor.",
      imageSrc: ribeyeImg,
    },
    {
      name: "Wagyu A5",
      price: "32.00$",
      description:
        "An exceptional cut, prized for its marbling, texture, and exquisite taste. A true delicacy.",
      imageSrc: wagyuImg,
    },
    {
      name: "Bone-In Tomahawk",
      price: "42.00$",
      description:
        "A dramatic presentation with rich, tender meat and deep flavors. Served with a side of bone marrow butter.",
      imageSrc: tomahawkImg,
    },
  ];

  const appetizers = [
    {
      name: "Tuna Tartare",
      price: "9.90$",
      description:
        "Fresh sushi-grade tuna with avocado and a citrus soy dressing.",
      imageSrc: "path/to/tuna-tartare.jpg",
    },
    {
      name: "Crispy Calamari",
      price: "8.50$",
      description:
        "Lightly battered calamari with a lemon aioli dipping sauce.",
      imageSrc: "path/to/calamari.jpg",
    },
    {
      name: "Tuna Tartare",
      price: "9.90$",
      description:
        "Fresh sushi-grade tuna, avocado, sesame seeds, and a tangy citrus soy dressing.",
      imageSrc: "path/to/tuna-tartare.jpg",
    },
    {
      name: "Oysters on the Half Shell",
      price: "16.00$",
      description: "Chilled oysters served with mignonette and cocktail sauce.",
      imageSrc: "path/to/oysters.jpg",
    },
    {
      name: "Seared Foie Gras",
      price: "21.50$",
      description:
        "Perfectly seared, served with a caramelized apple compote and balsamic glaze.",
      imageSrc: "path/to/foie-gras.jpg",
    },
    {
      name: "Lobster Bisque",
      price: "11.00$",
      description: "Rich, velvety, and creamy with a touch of brandy.",
      imageSrc: "path/to/lobster-bisque.jpg",
    },
  ];
  const sides = [
    {
      name: "Truffle Mac & Cheese",
      price: "7.50$",
      description:
        "Creamy and rich, topped with a crispy truffle parmesan crust.",
      imageSrc: "path/to/truffle-mac.jpg",
    },
    {
      name: "Roasted Brussels Sprouts with Bacon",
      price: "6.00$",
      description:
        "Caramelized Brussels sprouts, smoky bacon, and balsamic drizzle.",
      imageSrc: "path/to/brussels-sprouts.jpg",
    },
    {
      name: "Creamed Spinach",
      price: "5.00$",
      description: "Velvety and indulgent, with a hint of nutmeg.",
      imageSrc: "path/to/creamed-spinach.jpg",
    },
    {
      name: "Garlic Mashed Potatoes",
      price: "4.50$",
      description: "Smooth and buttery with roasted garlic.",
      imageSrc: "path/to/garlic-mashed-potatoes.jpg",
    },
    {
      name: "Grilled Asparagus",
      price: "5.50$",
      description:
        "Lightly charred with a sprinkle of sea salt and fresh lemon.",
      imageSrc: "path/to/grilled-asparagus.jpg",
    },
    {
      name: "Baked Potato",
      price: "3.50$",
      description: "Served with sour cream, chives, cheddar, and bacon bits.",
      imageSrc: "path/to/baked-potato.jpg",
    },
  ];
  const salads = [
    {
      name: "Classic Caesar",
      price: "7.00$",
      description:
        "Crisp romaine, parmesan, garlic croutons, and a rich Caesar dressing.",
      imageSrc: "path/to/caesar-salad.jpg",
    },
    {
      name: "Wedge Salad",
      price: "8.50$",
      description:
        "Iceberg lettuce, blue cheese, bacon, cherry tomatoes, and a creamy ranch dressing.",
      imageSrc: "path/to/wedge-salad.jpg",
    },
    {
      name: "Mixed Greens",
      price: "6.50$",
      description:
        "Baby greens, candied pecans, goat cheese, and a balsamic vinaigrette.",
      imageSrc: "path/to/mixed-greens.jpg",
    },
  ];
  const desserts = [
    {
      name: "Chocolate Lava Cake",
      price: "8.00$",
      description: "Warm, molten center served with vanilla bean ice cream.",
      imageSrc: "path/to/chocolate-lava-cake.jpg",
    },
    {
      name: "Crème Brûlée",
      price: "7.50$",
      description:
        "Rich vanilla custard with a perfectly caramelized sugar top.",
      imageSrc: "path/to/creme-brulee.jpg",
    },
    {
      name: "Cheesecake",
      price: "6.50$",
      description: "New York-style cheesecake with a berry compote.",
      imageSrc: "path/to/cheesecake.jpg",
    },
    {
      name: "Tiramisu",
      price: "7.00$",
      description:
        "Layers of espresso-soaked ladyfingers, mascarpone cream, and cocoa dusting.",
      imageSrc: "path/to/tiramisu.jpg",
    },
  ];
  // Create menu groups
  const signatureSteaksGroup = createMenuGroup(
    "Signature Steaks",
    signatureSteaks
  );
  const appetizersGroup = createMenuGroup("Appetizers", appetizers);
  const sidesGroup = createMenuGroup("Sides", sides);
  const saladGroup = createMenuGroup("Salads", salads);
  const dessertsGroup = createMenuGroup("Desserts", desserts);

  // Append all groups to the menu container
  menuContainer.appendChild(signatureSteaksGroup);
  menuContainer.appendChild(appetizersGroup);
  menuContainer.appendChild(sidesGroup);
  menuContainer.appendChild(saladGroup);
  menuContainer.appendChild(dessertsGroup);

  // Append the menu container to the content
  content.appendChild(menuContainer);
}
