function SwitchBTN () {
  const btn = document.getElementById('btn')
  const scarf_img = document.getElementById('scarf')
  let temp = rand(1, 40)
  let tempTohtml = document.getElementById("tempText")
  tempTohtml.innerHTML = "氣溫: " + temp
  switchTop(temp)
  switchButtom(temp)
  switchJacket(temp)
  if (temp >= 0 && temp <= 12) {
    scarf_img.classList.remove('hidden')
    scarf_img.classList.add('visible')
  }
  else {
    scarf_img.classList.remove('visible')
    scarf_img.classList.add('hidden')
  }
}
function switchTop (temp) {
  const tshirt_img = document.getElementById('tshirt')
  const sweater_img = document.getElementById('sweater')
  if (temp > 22) {
    tshirt_img.classList.add('visible')
    tshirt_img.classList.remove('hidden')
    sweater_img.classList.remove('visible')
    sweater_img.classList.add('hidden')
  }
  else {
    tshirt_img.classList.add('hidden')
    tshirt_img.classList.remove('visible')
    sweater_img.classList.remove('hidden')
    sweater_img.classList.add('visible')
  }
}
function switchButtom (temp) {
  const pants_img = document.getElementById('pants')
  const shorts_img = document.getElementById('shorts')
  if (temp > 21) {
    shorts_img.classList.add('visible')
    shorts_img.classList.remove('hidden')
    pants_img.classList.add('hidden')
    pants_img.classList.remove('visible')
  }
  else {
    shorts_img.classList.add('hidden')
    shorts_img.classList.remove('visible')
    pants_img.classList.add('visible')
    pants_img.classList.remove('hidden')
  }
}
function wearingScarf (temp) {
  if (temp <= 12) {
    scarf_img.classList.remove('hidden')
    scarf_img.classList.add('visible')
  }
  else {
    scarf_img.classList.remove('visible')
    scarf_img.classList.add('hidden')
  }
}
function switchJacket (temp) {
  const jacket_img = document.getElementById("jacket")
  const down_jacket_img = document.getElementById("down jacket")
  if (temp > 12 && temp < 19) {
    jacket_img.classList.add('visible')
    jacket_img.classList.remove('hidden')
    down_jacket_img.classList.add('hidden')
    down_jacket_img.classList.remove('visible')
  }
  else if (temp < 12) {
    jacket_img.classList.add('hidden')
    jacket_img.classList.remove('visible')
    down_jacket_img.classList.add('visible')
    down_jacket_img.classList.remove('hidden')
  }
  else {
    jacket_img.classList.remove('visible')
    jacket_img.classList.add('hidden')
    down_jacket_img.classList.remove("visible")
    down_jacket_img.classList.add("hidden")
  }
}

function rand (min, max) {
  return Math.round(Math.random() * (max - min) + min)
}
