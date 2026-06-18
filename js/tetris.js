const tetris = document.getElementById('tetris')
const tetriss = document.getElementById('tetriss')
const cont = document.getElementById('cont')
let a = 3
setInterval(() => {
    if (a >= 1) {
        cont.textContent = a--
    } else if (a <= 1) {
        cont.textContent = ""
    }
}, 1000)
const pnt = document.getElementById('pnt')
JSON.parse(localStorage.users).forEach(u => {
    pnt.innerHTML = `
        ${u.pontos}
    `

})

function home() {
    window.location.href = "home.html"
}






for (i = 0; i < 6; i++) {
    tetris.innerHTML += `   
    <div class="flex flex-col">
        <div class="h-20 w-21 border-2 border-[#a2ded0]"></div>        
        <div class="h-20 w-21 border-2 border-[#a2ded0]"></div>        
        <div class="h-20 w-21 border-2 border-[#a2ded0]"></div>        
        <div class="h-20 w-21 border-2 border-[#a2ded0]"></div>        
        <div class="h-20 w-21 border-2 border-[#a2ded0]"></div>        
        <div class="h-20 w-21 border-2 border-[#a2ded0]"></div>        
        <div class="h-20 w-21 border-2 border-[#a2ded0]"></div>        
        <div class="h-20 w-21 border-2 border-[#a2ded0]"></div>        
        <div class="h-20 w-21 border-2 border-[#a2ded0]"></div>        
        <div class="h-20 w-21 border-2 border-[#a2ded0]"></div>        
    </div>
        `
}