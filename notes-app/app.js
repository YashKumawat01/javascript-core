const addBtn = document.querySelector("#addNote")
const main = document.querySelector(".main")

addBtn.addEventListener("click",()=>{
    addNote()
})

const saveNotes =()=>{
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes)
    const data = [];
    notes.forEach((note)=>{
        data.push(note.value)
    })

    // console.log(data)

    localStorage.setItem("notes",JSON.stringify(data))
}

function addNote(){
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML=`
    <div class="tool">
                <i class="save fa fa-save"></i>
                <i class="trash fa fa-trash"></i>
            </div>

            <textarea name="" id=""></textarea>`;
    
            note.querySelector(".trash").addEventListener("click",()=>{
                note.remove()
            })

            note.querySelector(".save").addEventListener("click",()=>{
                saveNotes()
            })
            main.appendChild(note)
            saveNotes()
}