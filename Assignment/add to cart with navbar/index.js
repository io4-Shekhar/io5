const main = document.querySelector("main");
console.log("main", main);
const divTag = document.createElement("div");
divTag.setAttribute("id", "navbar");
divTag.classList.add("navbar");
main.append(divTag);
const ulTag = document.createElement("ul");
ulTag.setAttribute("class", "ul_text");
divTag.append(ulTag);
