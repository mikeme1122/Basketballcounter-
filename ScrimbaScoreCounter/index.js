let firstOne = document.getElementById("first-one")
console.log(firstOne)
let firstTwo = document.getElementById("first-two")
console.log(firstTwo)
let firstThree = document.getElementById("first-three")
console.log(firstThree)
let secondOne = document.getElementById("second-one")
console.log(secondOne)
let secondTwo = document.getElementById("second-two")
console.log(secondTwo)
let secondThree = document.getElementById("second-three")
console.log(secondThree)

let firstCounter = document.getElementById("first-counter")
console.log(firstCounter)
let secondCounter = document.getElementById("second-counter")
console.log(secondCounter)

let reset = document.getElementById("reset-btn")

let count = 0
let countTwo = 0

function plusOne() {
    count = count + 1
    firstCounter.textContent = count 
    console.log (firstCounter.textContent)
}

function plusTwo() {
    count = Number(firstCounter.textContent) + 2
    firstCounter.textContent = count
}

function plusThree() {
    count = Number(firstCounter.textContent) + 3
    firstCounter.textContent = count
}

function plusOneSecond() {
    countTwo = countTwo + 1
    secondCounter.textContent = countTwo 
    console.log(secondCounter.textContent)
}
function plusTwoSecond() {
    countTwo = Number(secondCounter.textContent) + 2
    secondCounter.textContent = countTwo
}
function plusThreeSecond() {
    countTwo = Number(secondCounter.textContent) + 3
    secondCounter.textContent = countTwo
}

function erase() {
    firstCounter.textContent = 0
    secondCounter.textContent = 0
    count = 0
    countTwo = 0
}

