const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Input is Empty!");
    }else{

    
    
        let li = document.createElement("li");
        let litext = document.createTextNode(`${inputBox.value}`);
        li.appendChild(litext);
        
        const element = document.querySelector("#listContainer");

        element.appendChild(li);
        
    }
    inputBox.value = "";
}

function check(){
    let listItems = document.querySelectorAll("ul li");
    listItems.forEach(function(item) {
    item.onclick = function(e) {
    this.setAttribute("class","checked");
    
  }
});
}