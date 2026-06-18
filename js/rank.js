function home() {
    window.location.href = "home.html"
}

const usuarios = JSON.parse(localStorage.users)
const rank = document.getElementById('rank')
const user = document.getElementById('user')
const pontos = document.getElementById('pontos')

let cont = 0
for(i = 1; i<=usuarios.length;i+1){
    cont = i
}

JSON.parse(localStorage.users).forEach(u => {
    rank.innerHTML += `
        <h1 class="bg-[#aed5f1] rounded-full shadow-lg ">${cont}</h1>
    `
    user.innerHTML += `
        <h1 class="bg-[#aed5f1] rounded-full shadow-lg">${u.user}</h1>
    `
    
    pontos.innerHTML += `
        <h1 class="bg-[#aed5f1] rounded-full shadow-lg">${u.pontos}</h1>
    `
})

