const list = document.querySelector(".list");
const enteredText = document.querySelector(".text");
const warning = document.querySelector(".warning");
const warning2 = document.querySelector(".warning2");
const form = document.forms.checkboxes;

let items = [];

document.querySelector(".cross").addEventListener("click", function () {
  warning.style.display = "none";
});

document
    .querySelector(".cross2")
    .addEventListener("click", function () {
      warning2.style.display = "none";
    });

form.addEventListener("click", function (event) {
  
    let label;
    if (event.target.tagName === 'LABEL') {
      label = event.target;
    } else {
      label = event.target.parentNode;
    }
    items.splice(items.indexOf(label.textContent), 1);
    localStorage.setItem('muy-todo-list-items', JSON.stringify(items));
    label.parentNode.remove();
  
});

function enteredTextList() {
  const text = enteredText.value;
  const labelID = enteredText.value;
  if (text === "") {
    warning.style.display = "block";
  } else {
    const li = document.createElement('li');
    li.innerHTML=`<label for="${labelID}"><input type="checkbox" id="${labelID}">${text}</label>`;
    list.appendChild(li);
    items.push(text);
    localStorage.setItem('muy-todo-list-items', JSON.stringify(items));
    enteredText.value = "";
  }
}

document.querySelector(".button").addEventListener("click", enteredTextList);
window.addEventListener("keydown", function () {
  if (this.event.keyCode === 13) {
    enteredTextList();
  }
});

function init() {
  const data = localStorage.getItem('muy-todo-list-items');
  if (data) {
    items = JSON.parse(data);
    for (let el of items) {
      const li = document.createElement('li');
      li.innerHTML = `<label for="${el}"><input type="checkbox" id="${el}">${el}</label>`;
      list.appendChild(li);
    }
  }
}

init();
