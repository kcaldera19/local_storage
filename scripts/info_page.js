"use strict"

window.onload=()=>{
    console.log("connected to infos page")
    const name = localStorage.getItem('name');
    const role = localStorage.getItem('role');

    if(role === 'instructor'){
        document.getElementById('welcome').innerText = `Welcome Instructor ${name}`;

        document.getElementById('loremText').innerText = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';

        document.getElementById('loremText').style.color ='blue';
    }else if(role === 'student'){
        document.getElementById('welcome').innerText = `Welcome Student ${name}`;

        document.getElementById('loremText').innerText = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';

        document.getElementById('loremText').style.color = 'purple';
    }

}