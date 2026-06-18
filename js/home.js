function home(){ 
    window.location.href = "home.html"
}

function rank(){
    window.location.href = "rank.html"
}

const start = document.getElementById('iniciar')
const msg = document.getElementById('msg')
var arr = []


start.addEventListener('click', (e) => {
    e.preventDefault()

    if(document.getElementById('input').value == ""){
        msg.innerHTML = "Campo de nome vazio! Preencha e tente novamente."        
    } else {

        if(localStorage.users){
            arr = JSON.parse(localStorage.users)
        }

        const input = document.getElementById('input').value 
        arr.push({
            user: input,
            pontos: 0
        })
        
        document.getElementById('input').value = ""
        localStorage.users = JSON.stringify(arr)

        window.location.href = "tetris.html"
    }
})

console.log(JSON.parse(localStorage.users))
