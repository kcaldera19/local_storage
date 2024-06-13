"use strict"
window.onload = () => {
    console.log("connecting to index page")
    // get a hold of the button
    document.querySelector("#theButton").addEventListener("click", ()=>{


        const name = document.getElementById('name').value;


        const role = document.querySelector("#radioId:checked").value;

        displayInfo(name, role);
    });








}

function displayInfo(name, role) {
    localStorage.setItem('name', name);
    localStorage.setItem('role', role);

    if (name && role) {

        window.location.href = "info_page.html";

    }


}

// increase the size of the button every time you click on it
function increaseFn() { 
    var btn = document.getElementById("theButton"); 
    var currwidth = btn.clientWidth; 
    var currheight = btn.clientHeight; 
    btn.style.width = (currwidth + 20) + "px"; 
    btn.style.height = (currheight + 10) + "px"; 
} 