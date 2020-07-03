setInterval(setClock,1000)

const hourhand=document.querySelector('[data-hour-hand]')
const minutehand=document.querySelector('[data-minute-hand]')
const secondhand=document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondRatio=currentDate.getSeconds() / 60
  const minuteRatio=(secondRatio+currentDate.getMinutes()) / 60
  const hourRatio=(minuteRatio+currentDate.getHours()) / 12
  setRotation(secondhand,secondRatio)  
  setRotation(minutehand,minuteRatio)
  setRotation(hourhand,hourRatio)
}

function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360)
}
setClock()