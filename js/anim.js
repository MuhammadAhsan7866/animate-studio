const right = document.querySelector(".right")
const left = document.querySelector(".left")
const ball1 = document.querySelector(".ball1")
const ball2 = document.querySelector(".ball2")
const ball3 = document.querySelector(".ball3")
const ball4 = document.querySelector(".ball4")
const ball5 = document.querySelector(".ball5")
const ball6 = document.querySelector(".ball6")
function open(){
    left.style.width = "50%"
    right.style.width = "50%"
    ball1.style.left = "18%"
    ball2.style.right = "13%"
    ball3.style.left = "12%"
    ball4.style.right = "0%"
    ball5.style.left = "-12%"
    ball6.style.right = "-12%"
}
function close(){
    left.style.width = "20%"
    right.style.width = "80%"
    ball1.style.left = "100%"
    ball2.style.right = "-80%"
    ball3.style.left = "100%"
    ball4.style.right = "-150%"
    ball5.style.left = "100%"
    ball6.style.right = "-150%"
}

ball2.addEventListener("click", open)
ball5.addEventListener("click", close)