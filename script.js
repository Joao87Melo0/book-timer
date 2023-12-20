var play = document.getElementById('play')
var zerar = document.getElementById('zerar')
var idcro = document.getElementById('time')
var pini = document.getElementById('INI')
var bfooter = document.getElementById('fim')
var time
var s = 1, m = 0, h = 0
var kl=0
play.addEventListener('click', start)
zerar.addEventListener('click', stop)
//COMEÇAR CRÔNOMETRO
function start(){
    time = setInterval(contador,1000)
    play.value = '■'
    play.style.fontSize = '330%'
    play.style.paddingBottom = '40px'
    play.style.paddingRight = '12px'
    pini.innerText = 'PAUSAR'
    play.removeEventListener('click', start)
    play.addEventListener('click', parar)
    
}
//CRÔNOMETRO RODANDO
function contador(){
    var sformatado = s.toString().padStart(2, '0')
    var mformatado = m.toString().padStart(2, '0')
    var hformatado = h.toString().padStart(2, '0')

    idcro.innerText = `${hformatado} : ${mformatado} : ${sformatado}`
    s++
    kl++
    if(s==60){
        s=0
        m++
    }
    if(m==60){
        s=0
        m=0
        h++
    }
    if(s==4){
        bfooter.style.background = 'rgb(29, 161, 243)'
    }
}
//ZERAR CRÔNOMETRO
function stop(){
    clearInterval(time)
    s = 0
    m = 0
    h = 0
    play.value = '▶'
    play.style.fontSize = '250%'
    play.style.paddingBottom = ''
    play.style.paddingRight = ''
    pini.innerText = 'INICIAR'    
    idcro.innerText = `00 : 00 : 00`
    bfooter.style.background = 'rgba(87, 83, 83, 0.493)'
    play.removeEventListener('click', parar)
    play.addEventListener('click', start)
}
//PAUSAR CRÔNOMETRO
function parar(){
    clearInterval(time)
    play.value = '▶'
    play.style.fontSize = '250%'
    play.style.paddingBottom = ''
    play.style.paddingRight = ''
    pini.innerText = 'INICIAR'  
    play.removeEventListener('click', parar)
    play.addEventListener('click', start)
}