/*******************************/
    // Remove 

function hide(element) {
    element.remove();
}


/*******************************/
    // Change Name

var pname = "Jane Doe";
var currentName = document.querySelector("#pname");

console.log(currentName);


function changeName() {
    currentName.innerText = "Billy Bob";
    console.log(changeName);
}