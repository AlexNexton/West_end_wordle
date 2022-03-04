const tileDisplay = document.querySelector('.tile-container');

const keyboard = document.querySelector('.key-container');

const wordle = 'super';

const keys = [
    'Q',
    'W', 
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
]

 

const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]
//initialise tiles and rows

let currentRow = 0;
let currentTile = 0;

guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div');
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex);
    guessRow.forEach((guess, guessIndex) => {
        const tileElement = document.createElement('div');
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex);
        tileElement.classList.add('tile');
        rowElement.append(tileElement);

    })
    tileDisplay.append(rowElement);
});


// add keys to the a button in the key-container
keys.forEach(key =>{
   const buttonElement = document.createElement('button');
   buttonElement.textContent = key;
   buttonElement.setAttribute('id', key);
   buttonElement.addEventListener('click', () => handleClick(key));
   keyboard.append(buttonElement);
})

const handleClick = (letter) => {
    console.log('clicked', letter);
    if (letter === '«') {
        deleteLetter();
        console.log("guessrows", guessRows);
        return
    }
    if (letter === 'ENTER') {
        console.log('check row');
        console.log("guessrows", guessRows);
        return
    }
    addLetter(letter);
    console.log("guessrows", guessRows);
}

const addLetter = (letter) => {
    if (currentTile < 5 && currentRow < 6){
        const tile = document.getElementById('guessRow-'+ currentRow+'-tile-'+ currentTile);
        tile.textContent = letter;
        guessRows[currentRow][currentTile] = letter;
        tile.setAttribute('data', letter);
        currentTile++;
        
    }
}

const deleteLetter = () => {
    if (currentTile > 0 ) {
        currentTile--
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile);
        tile.textContent = '';
        guessRows[currentRow][currentTile] = '';
        tile.setAttribute('data', '');
    }
}

