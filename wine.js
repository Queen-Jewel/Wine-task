// Reference for DOM Object
const parentDiv = document.querySelector(".maincon");
const originalDiv = document.querySelector(".firstbox");
const subDiv = document.querySelector(".box1a");


// Multiplying div
const clonedDiv = subDiv.cloneNode(true);
const secondClone = subDiv.cloneNode(true);

// styling clonedDiv
parentDiv.style.display = 'flex';
parentDiv.style.justifyContent = 'space-between';


// Box first clone
const num1 = clonedDiv.querySelector("#numa");
const bot = clonedDiv.querySelector("#bot");
const numN = clonedDiv.querySelector("#numn");
const flag = clonedDiv.querySelector("#flag");
const fran = clonedDiv.querySelector(".mde");
const dollar = clonedDiv.querySelector("#dol");



// modify first clone
num1.textContent = "4.7"
bot.src = "images/-merlot-di-toscana-igt-buccia-nera.jpg"
numN.textContent ="MERLOT-DI-TOSCANA   0.75L"
flag.src = "flags/fr.svg"
fran.textContent = "FR"
dollar.textContent = "1200$"

// modify img props
bot.width = "100px";




parentDiv.appendChild(clonedDiv);
parentDiv.appendChild(secondClone);

