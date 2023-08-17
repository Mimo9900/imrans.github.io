"use strict"



const btn = document.querySelector(".box-btn"); 
let total = document.querySelector(".antal");
let total2 = 0; 
 

btn.addEventListener("click", function() {
    console.log("clicked")

    total2++;
    total.textContent = `${total2} 
    Total`;
})