// input tag
var inputText = document.getElementById("input")

// add button tag
var subBtn = document.getElementById("button")

//Todo list
var todoListTag = document.getElementById("todolist")

//array to store all todo elements
// if(localStorage.getItem("todoArr") != null){
//     todoArr = JSON.parse(localStorage.getItem(todoArr))
// }
// else{
//     var todoArr = []
// }
var todoArr = JSON.parse(localStorage.getItem("todoArr")) || []

subBtn.addEventListener("click", addItemToArray)

//if input is in FOCUS and Enter is clicked addItemToArray is to be called to Add element to Array
inputText.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        addItemToArray()
    }
})

function addItemToArray() {

    // event.target.value = innerText.value;

    // if empty dont add, add iff input is not empty
    if (inputText.value != "") {
        todoArr.push(inputText.value)
        localStorage.setItem("todoArr",JSON.stringify(todoArr))
    }

    // reset the value to empty string
    inputText.value = ""
    display()
}


function display() {
    // clear out previous elements of a array
    todoListTag.innerHTML = ""

    //map through array and display
    todoArr.map((curr, i) => {
        // structure of li tag
        var listItem = `<li id="item${i}">
        <div>${curr}</div>
        <div>
          <span onclick="deleteItem(${i})">&times;</span>
          <span>|</span>
          <span onclick="editItem(${i})">Edit</span>
        </div>
    </li>`
        // insert it inside ul
        todoListTag.innerHTML += listItem
    })
}

function deleteItem(i) {

    // delete the element from the todoArr
    todoArr.splice(i, 1)
    localStorage.setItem("todoArr",JSON.stringify(todoArr))
    display()
}

function editItem(i) {
    //get value from user
    var newValue = prompt("Please Edit")
    // Insert the value to that array to that index
    todoArr.splice(i, 1, newValue)
    localStorage.setItem("todoArr",JSON.stringify(todoArr))
    display()
}

document.getElementById("reset").addEventListener("click", () => {
    todoArr = []
    localStorage.setItem("todoArr",JSON.stringify(todoArr))
    display()
})


var arr = JSON.parse(localStorage.getItem("todoArr"))


display()