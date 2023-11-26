// const main = document.querySelector("main");
// console.log("main", main);
// const divTag = document.createElement("div");
// divTag.setAttribute("id", "navbar");
// divTag.classList.add("navbar");
// main.append(divTag);
// const ulTag = document.createElement("ul");
// ulTag.setAttribute("class", "ul_text");
// divTag.append(ulTag);
// Function to create a navbar
// function createNavbar() {
// Create navbar elements
const navbarContainer = document.getElementById("navbar-container");
const navbar = document.createElement("nav");
const logo = document.createElement("div");
const ul = document.createElement("ul");

// Set content and attributes
logo.textContent = "Your Logo";
logo.className = "logo";

const menuItems = ["Home", "About", "Services", "Contact"];
menuItems.forEach((itemText) => {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#"; // Set your actual href
  link.textContent = itemText;
  li.appendChild(link);
  ul.appendChild(li);
});

// Append elements to navbar
navbar.appendChild(logo);
navbar.appendChild(ul);

// Append navbar to container
navbarContainer.appendChild(navbar);
// }

// Call the function to create the navbar
// createNavbar();
