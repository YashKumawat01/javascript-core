const tglBtn = document.querySelector(".tgl-btn")

tglBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        tglBtn.textContent = "Switch to Light Mode";
    } else {
        tglBtn.textContent = "Switch to Dark Mode";
    }
});
