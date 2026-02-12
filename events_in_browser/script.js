let btn = document.querySelector(".btn")

btn.onclick=()=>{
    if(document.body.style.backgroundColor==="red"){
        document.body.style.backgroundColor="white"
    }
    else{
        document.body.style.backgroundColor="red"
    }
    console.log("Button was Clicked")
}

let btn2 = document.querySelector(".btn2")

btn2.addEventListener("click",function(){
    document.body.classList.toggle("bg-green")

})