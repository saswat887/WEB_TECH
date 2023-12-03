var a=document.querySelector("h1")
a.addEventListener("mouseover",function(){
    a.textContent="MOYE MOYE";
    a.style.color="aqua";
})

a.addEventListener("mouseout",function(){
    a.textContent="Welcome to my webpage";
    a.style.color="black";
})

var b=document.querySelector("h2")
b.addEventListener("click",function(){
    b.textContent="Sabu bhala ta"
    b.style.color="red"
})

b.addEventListener("dblclick",function(){
    b.textContent="Kana Khabar"
    b.style.color="black"
})

