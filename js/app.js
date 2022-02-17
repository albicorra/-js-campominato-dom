const difficult = document.getElementById('difficult')
const buttonPlay = document.getElementById('play')
const containerGame = document.querySelector('.ms_container-game')
const divElement = document.createElement('div')
let containerSquare;
let square;
let row;
let column;
let easySize = 'calc( 100% / 10)';
let hardSize = 'calc( 100% / 9)';
let crazySize = 'calc( 100% / 7)';
let bombArray = [];
let bomb;

function getRandomIntInclusive(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
 
}

buttonPlay.addEventListener('click', function(){
    
    
    if (difficult.value == 1) {
        
        row = 10
        column = 10
        
    }else if (difficult.value == 2) {
        
        row = 9
        column = 9
        
    }else if (difficult.value == 3) {
        
        row = 7
        column = 7
        
    }
    
    containerSquare = row*column
    let squareSize = `calc( 100% / ${column} )`
    containerGame.innerHTML = ''
    
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
            square.classList.add('selected')
            
            square.removeEventListener('click', letsPlay)
            
        }
        
        square.addEventListener('click', letsPlay);
        
    }
    
    /* for (let j = 0; j < 16; j++) {
        const bomb = getRandomIntInclusive(1, containerSquare);
        bombArray.push(bomb)
        console.log(bomb)
    } */
    
    
    while (bombArray.length !== 16) {
        const bomb = getRandomIntInclusive(1, containerSquare);
    
        /* for (let j = 0; j < bombArray.length; j++) {
            if (bomb === bombArray[j]) {
                j--
            }else{
                bombArray.push(bomb)
            }
            
        }
    */
        console.log(bombArray)
    
    }
    
})











