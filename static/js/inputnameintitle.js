var titles  = [];
var titleInput  = document.getElementById("title");
var messageBox  = document.getElementById("display");

function Allow(){
    if (!user.title.value.match(/[a-zA-Z]$/) && user.title.value !="") {
        user.title.value="";
    }
}

function insert () {
    titles.push(titleInput.value);
    clearAndShow();
}

function clearAndShow () {
    messageBox.innerHTML = "";
    messageBox.innerHTML +=titles.join(", ") + " -RISHABH";
}
