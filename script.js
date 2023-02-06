const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const milissegundos = document.querySelector('#milissegundos')

const reloj = setInterval(function tiempo(){
  let dateToday = new Date()
  let hr = dateToday.getHours()
  let min = dateToday.getMinutes()
  let seg = dateToday.getSeconds()
  let ms = dateToday.getMilliseconds()

  horas.innerHTML = hr
  minutos.innerHTML = min
  segundos.innerHTML = seg
  milissegundos.innerHTML = ms

})

