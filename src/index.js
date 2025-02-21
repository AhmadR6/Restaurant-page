import "./styles/styles.css";
import { HomePage } from "./homePage";
import { menuPage } from "./menuPage";
import { aboutPage } from "./aboutPage";

HomePage();

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");

homeBtn.addEventListener("click", HomePage);

menuBtn.addEventListener("click", menuPage);
aboutBtn.addEventListener("click", aboutPage);
