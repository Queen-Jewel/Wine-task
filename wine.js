// Reference for DOM Object
const parentDiv = document.querySelector(".maincon");
const originalDiv = document.querySelector(".firstbox");
const subDiv = document.querySelector(".box1a");

// Multiplying div
const clonedDiv = subDiv.cloneNode(true);
const secondClone = clonedDiv.cloneNode(true);

// styling clonedDiv
parentDiv.style.display = 'flex';



parentDiv.appendChild(clonedDiv);
// clonedDiv.appendChild(secondClone);

