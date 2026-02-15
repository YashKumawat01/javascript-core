const stopEvent = setTimeout(function printName(){

    let heading =document.querySelector("h1")
    heading.innerText="Asynnc is start"
    console.log("YASHHHHH")
},2000)

document.querySelector("#stop").addEventListener("click", function(){
    clearTimeout(stopEvent);
    console.log("Change is Stopped")
})