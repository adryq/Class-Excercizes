function getUsers(){

var users= 
            [{name: 'Adry', color:"blue"},
            {name:'Alex', color:"green"},
            {name:'Sarah', color:"red"},
];

var mainDiv= document.querySelector("#list");
var listEl= document.createElement('ul');
for(var i = 0; i < users.length; i++){
    var li= document.createElement('li');
    li.textContent= users[i].name;
    li.setAttribute("stlye", `color: ${users[i].color}` );
    listEl.appendChild(li); 
}
mainDiv.appendChild(listEl);
}

var getUsers = document.querySelector("#get-users");
getUsersButton.addEventListener("click", getUsers);
