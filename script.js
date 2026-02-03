// task 1
let heading=document.getElementById("heading");
heading.innerText="DOM Element Selected by ID";

// task 2

let para=document.getElementsByTagName("p")[0];

para.innerText="First paragraph updated";

// task 3

let btn =document.getElementsByClassName("btn")[1];

btn.innerText="updated button";

// task 4


let heading2=document.querySelector("#heading2");
let para2=document.querySelector("#para2");

heading2.style.color="blue";
para2.style.color="blue";

// task 5

let order = document.querySelectorAll("ul li");

order.forEach(function(li){
    li.style.color = "green";
});

// task 6

let para3=document.getElementsByClassName("para3")[0];
para3.style.color="grey";
para3.style.fontsize="24px";
para3.style.background="skyblue";



