console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById ('node1') method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2 = document.getElementsByClassName('node2')[0];
node2.textContent = "I used the getElementsByClassName('node2') method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3 = document.getElementsByTagName("h3");
for (let i = 0; i < h3.length; i++) {
  h3[i].textContent = "I used the getElementsByTagName('h3') method to access all of these"
}


/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const myParagraph = document.createElement("p");
myParagraph.textContent = 
  "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.querySelector("#parent");
parent.appendChild(myParagraph)
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const anchorTag = document.createElement("a")
anchorTag.textContent = "I am a <a> tag"
// BONUS: Add a link href to the <a>
anchorTag.href = "https://anchor.fm/"
anchorTag.target = "_blank"

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(anchorTag, myParagraph)
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const oldNode = document.querySelector("#N1")
const newNode = document.createElement("p")
newNode.textContent = "New Child Node"

let newParent = document.querySelector("#exercise-container3")
newParent.replaceChild(newNode, oldNode)
// TODO: Remove the "New Child Node"
setTimeout(() => {
  newParent.removeChild(newNode)
}, 3000);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = ["apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)", ];


// TODO: Create an unordered list element
let ul = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
list.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 
document.querySelector("#container").appendChild(ul);
/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
function show() {
  const modal = document.createElement("div")
  const modalCard = document.createElement("div")
  modalCard.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"

  modal.id = "modal"
  modalCard.classList.add("modal-card")

  modal.appendChild(modalCard)
  document.querySelector(".exercise5").appendChild(modal)
  
  const closeBtn = document.createElement("button")
  closeBtn.textContent = "x"
  closeBtn.style.display = "block"

  modalCard.appendChild(closeBtn)

  closeBtn.addEventListener('click', ()=>{
    modal.remove()
  })
  modal.addEventListener('click', (event) =>{
    if (event.target != modalCard){
      modal.remove()
    }
  })

}

 const displayModalButton = document.querySelector("#btn")
  displayModalButton.addEventListener("click", show)


