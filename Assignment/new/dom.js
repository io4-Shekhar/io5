/**
 * querySelector('div') // by tag name  >> it will return first matching tag
 * querySelectorAll('div') // by tag name  >> it will return array of all matching tags
 * querySelector('.className') // by class name  >> it will return first matching class element
 * querySelectorAll('.className') // by class name  >> it will return array of all matching class elements
 * querySelector('#idName') // by id name  >> it will return first matching class element
 * querySelectorAll('.idName') // by id name  >> it will return array of all matching id elements
 * updating style using DOM
 *  .innerText = 'any text';  >> it will update text of element
 *  .innerHTML = '<b>any html</b>' >> it will add html inside the element
 *  .setAttribute('attributeName', 'value) // it is use to add attribute of any element
 *                      ---------- aTag.setAttribute('href', 'paste any link')
 *  .removeAttribute('attributeName')  >> use to remove attribute from element
 *  Creating element using DOM
 *     const div =  document.createElement('div')
 *  appending element using DOM
 *      parent.append(div)
 *      parent.appendChild(div)
 *
 */

/**
 * --Selectors--
 *  by tag name
 *        --- document.getElementsByTagName('div)
 *  by className
 *        --- document.getElementsByClassName('pointer')
 *  by id
 *        --- document.getElementById('pointer')
 *  by attribute
 *
 * by QuerySelector
 */

const [tag1, tag2] = document.getElementsByTagName("p");
console.log("tagName", tag2);

tag2.style.backgroundColor = "red";

const [p1, p2] = document.querySelectorAll("p");
console.log("tags", p1);

p1.style.border = "1px solid red";

const [class1, class2] = document.getElementsByClassName("banner-text");
console.log("classes", class1);

class1.style.color = "blue";

const [class3, class4] = document.querySelectorAll(".banner-text");
console.log("classes ---", class4);

class4.style.color = "brown";

const id = document.getElementById("p-id");
console.log("id--", id);

id.style.color = "white";
const qID = document.querySelector("#p-id");
console.log("qID", qID);

qID.style.border = "1px solid blue";
qID.style.padding = "1%";
qID.style.borderRadius = "20px";

qID.innerText = `<p><strong>Decker Analog Watch</strong> - For Men CH2647  (End of Season Style)</p>`;
qID.innerHTML = `<p><strong style="color: blue">Decker Analog Watch</strong> - For Men CH2647  (End of Season Style)</p>`;

const addToCart = document.querySelector("#add-to-cart");
console.log("addToCart", addToCart);
const pCount = addToCart.querySelector("#count");
console.log("pCount", pCount);
pCount.innerText = 89;

pCount.setAttribute("class", "abcd");

const link = addToCart.querySelector("#link");
link.setAttribute(
  "href",
  "https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART"
);
link.innerText = "Click";
link.style.color = "yellow";
link.style.textDecoration = "none";

pCount.removeAttribute("class");
link.removeAttribute("style");

const btn = document.createElement("button");
btn.innerText = "Done";
btn.setAttribute("id", "done-btn");
btn.setAttribute("class", "done-btn-class");
btn.classList.add("buy-button");
btn.classList.add("pointer");

btn.innerHTML = `<i class="fa-solid fa-square-check"></i> Done`;

console.log("btn", btn);

const [bannerRight] = document.getElementsByClassName("banner-right");
bannerRight.append(btn);

/**
 * 1. ul >> create
 * 2. li >> create
 * 3. li >> add class
 * 4. li >> innerText
 * 5. ul >> append >> li
 * 6.  getParent
 * 7. parent.append(ul)
 */

const ulTag = document.createElement("ul");

const liTag1 = document.createElement("li");

liTag1.classList.add("menus");
liTag1.classList.add("pointer");
liTag1.classList.add("home");
liTag1.innerText = "Home";

ulTag.append(liTag1);

const liTag2 = document.createElement("li");
liTag2.classList.add("menus");
liTag2.classList.add("pointer");
liTag2.classList.add("product");

liTag2.innerText = "Product";

ulTag.appendChild(liTag2);

const liTag3 = document.createElement("li");
liTag3.classList.add("menus");
liTag3.classList.add("pointer");
liTag3.classList.add("about-us");

liTag3.innerText = "About us";

ulTag.appendChild(liTag3);

const navRightSection = document.querySelector(".nav-right");
navRightSection.appendChild(ulTag);

const liTag4 = document.createElement("li");
liTag4.classList.add("menus");
liTag4.classList.add("pointer");
liTag4.classList.add("contact-us");

liTag4.innerText = "Contact us";

ulTag.appendChild(liTag4);

const inputTag = document.createElement("input");
inputTag.setAttribute("type", "text");
inputTag.setAttribute("placeholder", "Enter anything");
inputTag.setAttribute("id", "enter");

inputTag.style.height = "50px";
inputTag.style.width = "350px";
inputTag.style.fontSize = "35px";
inputTag.style.padding = "1%";
inputTag.style.border = "1px solid blue";
inputTag.style.borderRadius = "10px";

inputTag.classList.add("enter");

bannerRight.prepend(inputTag);
