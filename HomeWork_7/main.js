const createArea4Menu = document.documentElement;
const Area4Files = document.querySelector("#files-area")
const fileArea4Menu = document.querySelector(".file");
const createMenu = document.querySelector(".create-menu");
const fileMenu = document.querySelector(".file-menu");

const newFile1 = document.createElement('a')
newFile1.innerHTML = 'index.html'
newFile1.classList.add('file')
Area4Files.appendChild(newFile1)

const newFile2 = document.createElement('a')
newFile2.innerHTML = 'reset.css'
newFile2.classList.add('file')
Area4Files.appendChild(newFile2)

const newFile3 = document.createElement('a')
newFile3.innerHTML = 'style.css'
newFile3.classList.add('file')
Area4Files.appendChild(newFile3)

const newFile4 = document.createElement('a')
newFile4.innerHTML = 'main.js'
newFile4.classList.add('file')
Area4Files.appendChild(newFile4)


createArea4Menu.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  createMenu.style.top = `${event.clientY}px`;
  createMenu.style.left = `${event.clientX}px`;
  createMenu.classList.add("active");
}, false);

document.addEventListener("click", event => {
  if (event.button !== 2) {
    createMenu.classList.remove("active");
  }
}, false);

document.querySelector("#l1-1").addEventListener("click", () => {
  const fileName = prompt('Введите название файла')
  const newFile = document.createElement('a')
  newFile.innerHTML = `${fileName}`
  newFile.classList.add('file')
  Area4Files.appendChild(newFile)
}, false);

Area4Files.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  fileMenu.style.top = `${event.clientY}px`;
  fileMenu.style.left = `${event.clientX}px`;
  fileMenu.classList.add("active");
}, false);

document.addEventListener("click", event => {
  if (event.button !== 2) {
    fileMenu.classList.remove("active");
  }
}, false);

document.querySelector("#l2-1").addEventListener("click", (file) => {
  const newName = prompt('Введите новое название файла')
  console.log(file.target);
}, false);

document.querySelector("#l2-2").addEventListener("click", () => {
  
}, false);




