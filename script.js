const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')
const roomCount = document.getElementById('room-count')
const contactBtn = document.getElementById('contact-btn')
console.log(contactBtn)

let rooms = 0

increment.addEventListener("click", function () {
  let room = ++rooms
  decrement.disabled = false
  roomCount.innerText = room
})

decrement.addEventListener("click", function () {
  let room = --rooms
  if (room === 0 ){
    decrement.disabled = true
  }
  roomCount.innerText = room
})

