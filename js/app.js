const difficult = document.getElementById('difficult')
const buttonPlay = document.getElementById('play')
const containerGame = document.querySelector('.ms_container-game')
const divElement = document.createElement('div')
const resultLose = document.querySelector('.result-lose')
const resultWin = document.querySelector('.result-win')
let containerSquare;
let square;
let row;
let column;
let easySize = 'calc( 100% / 10)';
let hardSize = 'calc( 100% / 9)';
let crazySize = 'calc( 100% / 7)';
let bombArray = [];
let bomb;
let score = 0;
let messageLose;

function getRandomIntInclusive(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
 
}

function youWin(point, result) {
    
    let messageWin = `Bravo, hai vinto con ${point} score!`
    result.append(messageWin)

    return messageWin

}

function youLose(point, result) {
    
    let messageLose = `Mi dispiace, hai perso con ${point} score :(`
    result.append(messageLose)
   
    return messageLose

}

buttonPlay.addEventListener('click', function(){
    
    
    if (difficult.value == 1) {
        
        row = 10
        column = 10
        
    }else if (difficult.value == 2) {
        
        row = 9
        column = 9
        
    }else if (difficult.value == 3) {
        
        row = 5
        column = 5
        
    }
    
    containerSquare = row*column
    let squareSize = `calc( 100% / ${column} )`
    containerGame.innerHTML = ''

    while (bombArray.length !== 16) {
        const bomb = getRandomIntInclusive(1, containerSquare);
    
        if (!bombArray.includes(bomb)) {
            bombArray.push(bomb)
        }
        
    }
    console.log(bombArray)
    
    for (let i = 0; i < containerSquare; i++) {
        
        let square = document.createElement('div')
        square.classList.add('ms_item')
        square.style.width = squareSize
        containerGame.append(square)
        /* console.log(containerGame) */
        square.append(i + 1)
        /* console.log(square) */
        
        const letsPlay = () => {
            
            console.log( 'hai cliccato un quadrato' , square, i)

            if (bombArray.includes(i)) {
                square.classList.add('bomb')
                resultLose.innerHTML = youLose(score, resultLose)
                resultLose.classList.add('active')

            }else{
                square.classList.add('selected')
                score ++
            }

            if ( (containerSquare - bombArray.length) == score ) {
                resultWin.innerHTML = youWin(score,resultWin)
                resultWin.classList.add('active')
            }
    
            square.removeEventListener('click', letsPlay)
            
        }  
        
        square.addEventListener('click', letsPlay);

        
    }
    
    
})











