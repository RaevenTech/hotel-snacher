const increment = document.getElementById("increment")
const decrement = document.getElementById("decrement")
const roomCountEl = document.getElementById("room-count")
console.log(roomCountEl)

let roomCount = 0

increment.addEventListener("click", function(){
  roomCount++
  decrement.disabled = false
})

decrement.addEventListener("click", function(){
  roomCount--
})
