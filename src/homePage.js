import backgroundImg from "./assets/background.jpg";
export function HomePage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.style = "none";
  const heading = document.createElement("h2");
  const description = document.createElement("p");
  heading.innerText = "The Bear";
  heading.id = "heading";
  description.innerText =
    "Simply the finest cuts, expertly grilled to perfection.";
  description.id = "description";
  content.appendChild(heading);
  content.appendChild(description);
}
