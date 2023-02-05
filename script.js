const startButton = document.querySelector('data-start')
const pausarButton = document.querySelector('data-pause')
const parartButton = document.querySelector('data-stop')
const tiempoElement = document.querySelector('data-time')
let milissegundos = 0, 
    segundos=0, 
    minutos = 0, 
    horas=0
let interval

const startTime = () => {
    interval = setInterval({} => {

    }, 1000)
}

startTime()