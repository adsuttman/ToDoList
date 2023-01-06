let list = document.querySelector("#list");
let submit = document.querySelector("#submit");
let input = document.querySelector("input");

function addItem(event) {
    let newListItem = document.createElement("li");
    newListItem.textContent = input.value;
    input.value=""
    list.appendChild(newListItem);
}

function removeItem(event) {
    let item = event.target;
    item.style.textDecoration = "line-through";
    setTimeout(() => {item.remove()}, 1000);
}



submit.addEventListener("click", addItem);
list.addEventListener("click", removeItem);