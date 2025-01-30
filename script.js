const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {
    if (inputBox.value === ''){
        alert("Tiene que ingresar un texto");
    }else{
        let li = document.createElement("li");
        li.innerHTML = `<i class="fa-regular fa-circle"></i> ${inputBox.value}`;
        listContainer.appendChild(li);
        let span =  document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();

}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        const listItem = e.target;
        listItem.classList.toggle("checked");

        const icon = listItem.querySelector("i");

        if(icon){
            if(listItem.classList.contains("checked")){
                icon.className = "fa-solid fa-circle-check"
            }else{
                icon.className = "fa-regular fa-circle";
            }
        }
        saveData();
        
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();