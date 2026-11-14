const abrir = document.getElementById("abrir");
abrir.addEventListener("click", () => {
    overlay.classList.add('active')
    sidebar.classList.add('active')
});

const overlay = document.getElementById("overlay")
overlay.addEventListener("click", () => {
     overlay.classList.remove('active')
    sidebar.classList.remove('active')
})