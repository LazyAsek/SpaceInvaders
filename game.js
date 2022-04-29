


const squares = document.querySelectorAll(".grid div")


let currentIndexAlienAdd = 27
let currentIndexAlienRemove = 0

let currentIndex = 67

let currentIndexBullet =currentIndex -9

let timerid

let score = 0

//move aliens
function moveAliens(){
    //add aliens
    squares[currentIndexAlienAdd].classList.add("alien")
    currentIndexAlienAdd += 1

    //remove aliens
    squares[currentIndexAlienRemove].classList.remove("alien")
    currentIndexAlienRemove +=1
}

//move player
function movePlayer(e){
if(currentIndexBullet ==currentIndex -9){
    squares[currentIndex].classList.remove("player")
    switch(e.key){
        case "a":
             if(currentIndex>63)
                {
                 currentIndex -=1
                 currentIndexBullet -=1
                } 
             drawPlayer()
             break
        case "d": 
            if(currentIndex<71)
                {
                currentIndex +=1
                currentIndexBullet +=1
                }
            drawPlayer()
            break
        case "w":
            timerid = setInterval(shoot,100)
            setInterval(timerid)
            drawPlayer()
            break
    }
}
}

//draw player
function drawPlayer(){
    squares[currentIndex].classList.add("player")
}

//start
function start(){
document.addEventListener("keydown",movePlayer)
setInterval(bulletColision,1)
setInterval(moveAliens,1000)
}

//shoot
function shoot(){
squares[currentIndexBullet].classList.add("bullet")
bulletColision()
moveBullets()
if(currentIndexBullet<9){
        squares[currentIndexBullet].classList.remove("bullet")
        currentIndexBullet =currentIndex -9
        clearInterval(timerid)
    }
    
}

//move bullets
function moveBullets(){
    currentIndexBullet -= 9
    squares[currentIndexBullet].classList.add("bullet")
    squares[currentIndexBullet +9].classList.remove("bullet")
}

//check for bullet colision
function bulletColision (){
    lose()
    win()
    if(squares[currentIndexBullet].classList.contains("bullet")&& squares[currentIndexBullet].classList.contains("alien")){
        squares[currentIndexBullet].classList.remove("alien")
        squares[currentIndexBullet].classList.remove("bullet")
        score +=1
        currentIndexBullet =currentIndex -9
        clearInterval(timerid)
    }
}

//check for lose
function lose(){
    if(squares[63].classList.contains("alien")){
        alert("you lose")
        clearInterval(timerid)
        document.removeEventListener("keydown",movePlayer)
    }
}

//check for win
function win(){
document.getElementById("score").innerHTML = "Score:"+score
if(score == 27){
    alert("You win")
    clearInterval(timerid)
    document.removeEventListener("keydown",movePlayer)
}
}
