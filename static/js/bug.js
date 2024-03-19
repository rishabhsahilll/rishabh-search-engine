function getAndupdate(){
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if(localStorage.getItem('itemsjson')==null){
        itemjsonArry = [];
        itemjsonArry.push([tit,desc])
        localStorage.setItem('itemsjson', JSON.stringify(itemjsonArry));
    }
    else{
        itemjsonArryStr = localStorage.getItem('itemsjson')
        itemjsonArry = JSON.parse(itemjsonArryStr);
        itemjsonArry.push([tit,desc]);
        localStorage.setItem('itemsjson', JSON.stringify(itemjsonArry));
    }
    update();
}

function update(){
    if(localStorage.getItem('itemsjson')==null){
        itemjsonArry = [];
        localStorage.setItem('itemsjson', JSON.stringify(itemjsonArry));
    }
    else{
        itemjsonArryStr = localStorage.getItem('itemsjson')
        itemjsonArry = JSON.parse(itemjsonArryStr);
    }
    // Populate The Table
    let tableBody = document.getElementById('tableBody');
    let str="";
    itemjsonArry.forEach((element, index) => {
        str +=`
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-primary">No repley</button>
        </td>
        </tr>
        `;

    });
    tableBody.innerHTML = str;
}
add = document.getElementById('add')
add.addEventListener("click",getAndupdate);
update();
function deleted(itemindex){
    itemjsonArryStr = localStorage.getItem('itemsjson');
    itemjsonArry = JSON.parse(itemjsonArryStr);
    // Delete items Index element from the array
    itemjsonArry.splice(itemindex, 1);
    localStorage.setItem('itemsjson', JSON.stringify(itemjsonArry));
    update();
}
{/* <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button> */}

document.getElementById('frmsearch').onsubmit = function() {
    query = document.getElementById('textSearch').value;
    if(query==false){
        // alert("Please Enter Your Query")
        console.log(query)
    }
    else{
        window.location = 'https://rishabhsahil.github.io/search.html?q=' + query
        return false;

    }

}
