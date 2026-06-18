const cont = document.getElementById('cont')
let a = 3
setInterval(() => {
    if(a>=1){
        cont.textContent = a--
    } else if(a<=1) {
        cont.textContent = ""
    }
}, 1000)

const pnt = document.getElementById('pnt')
JSON.parse(localStorage.users).forEach(u => {
    pnt.innerHTML = `
        ${u.pontos}
    `

})