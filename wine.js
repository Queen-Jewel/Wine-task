// Reference for DOM Object
const originalDiv = document.querySelector(".firstbox");
const subDiv = document.querySelector(".box1a");

// Multiplying div
const clonedDiv = subDiv.cloneNode(true);
const secondClone = clonedDiv.cloneNode(true);

// styling clonedDiv
clonedDiv.style.marginTop = '10px';
clonedDiv.style.display = 'flex';
clonedDiv.style.flexDirection = 'row';
clonedDiv.style.justifyContent = 'center';



originalDiv.appendChild(clonedDiv);
clonedDiv.appendChild(secondClone);

