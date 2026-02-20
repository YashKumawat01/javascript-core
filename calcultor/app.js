const display = document.querySelector("#display")
const buttons = document.querySelectorAll("button")


// **************************************************************
// **************************************************************

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        handleClick(button.innerText)
    })
})


function handleClick(value){
    if(value==="C"){
        display.value="";
        return;
    }
    if(value==="="){
        display.value=eval(display.value)
        return ;
    }

    display.value+=value;
}

//  Above Code uses eval() which not useful for every versions

// **************************************************************
// **************************************************************



