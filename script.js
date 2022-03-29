/*******************************/
    // Remove 

function removeUser(){
    var getRid = document.querySelector("#ur1")
    getRid.remove()
}

function removeUser2(){
    var getRid = document.querySelector("#ur2")
    getRid.remove()
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