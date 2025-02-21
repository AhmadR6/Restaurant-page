export function aboutPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  const container = document.createElement("div");
  container.classList.add("aboutContainer");

  const heading = document.createElement("h2");
  heading.classList.add("aboutHeading");
  heading.textContent = "About Us";
  const aboutUsText = document.createElement("p");
  aboutUsText.classList.add("aboutUsText");
  aboutUsText.textContent =
    "Welcome to The Beef—where we serve the finest cuts of beef, from juicy steaks to mouthwatering burgers. Our focus is on quality, flavor, and an unforgettable dining experience. At The Beef, it’s all about the beef!";

  container.appendChild(heading);
  container.appendChild(aboutUsText);
  content.appendChild(container);
}
