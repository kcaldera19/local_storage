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