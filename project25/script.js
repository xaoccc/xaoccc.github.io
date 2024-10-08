const resetBtn = document.getElementById('reset');
const playground = document.getElementById('playground');
const container = document.querySelector('main');

let bestScore = 0;
const scoreBoard = document.getElementById('score');

let currentResult = document.createElement('p');
currentResult.classList.add('current-result');


let bestResult = document.createElement('p');
bestResult.classList.add('best-result');
bestResult.textContent = `Your best result is: ${bestScore}`;
scoreBoard.prepend(bestResult);
scoreBoard.prepend(currentResult);

let timeCounter = document.createElement('p');
scoreBoard.appendChild(timeCounter);

function createPlayground() {
    let score = 0;
    currentResult.textContent = `Score ${score}`   

    

    const colors = {'rgb(255, 228, 0)': 150, 'orange': 70, 'rgb(20, 167, 108)': 30 , 'rgb(136, 96, 208)': 10};
    const boxesScore = {'rgb(255, 228, 0)': 1, 'orange': 3, 'rgb(20, 167, 108)': 5 , 'rgb(136, 96, 208)': 10};
    let boxes = [];
    

    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        location.reload();
    })

    let boxSize = 64;
    (window.innerWidth < 800) ? boxSize = 32 : null;    

    playground.innerHTML = '';
    let playGroundWidth = Number(container.clientWidth) - 48;

    (container.clientWidth < 1056) ? playGroundWidth -= 17 : null;

    const cols = Math.floor(playGroundWidth / boxSize)

    const rows = 10;
    const totalBoxes = cols * rows;



    for (i=0; i<totalBoxes; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.id = i;
        colorize(box)
        box.addEventListener('click', (e) => {            
            changeColor(e, box, box.style.backgroundColor);
            currentResult.textContent = `Score ${score}`;

            if (score > bestScore) {
                bestScore = score;
                bestResult.textContent = `Your best result is: ${bestScore}`;
            }
            resetClickedBoxes();
    });
        boxes.push(box);        
        playground.appendChild(box);
    }

    function colorize(box) {
        let colorPicker = Math.random() * 150;
         Object.entries(colors).forEach(element => {
            (colorPicker < element[1]) ? box.style.backgroundColor = element[0] : null;
        });

    }

    function resetClickedBoxes() {
        Array.from(document.querySelectorAll('.clicked')).forEach((box) => {
            setTimeout(() => {
                colorize(box);
            }, 300);
                box.classList.remove('clicked');
            });
    }

    function changeColor(e, box, boxesColor) {     
               

        if (box.style.backgroundColor !== 'rgb(230, 72, 51)' && box.style.backgroundColor !== boxesColor) {
            return
        }

        let [upperBox, leftBox, rigthBox, downBox] = ['', '', '', '']
        const boxId = Number(box.id)   
        let ColorScore = boxesScore[box.style.backgroundColor];
        box.style.backgroundColor = 'rgb(230, 72, 51)';
        box.classList.add('clicked');
        score += ColorScore;
      

        if (boxes[boxId - cols]) {
            upperBox = boxes[boxId - cols];
            if (boxesColor === upperBox.style.backgroundColor) {
                changeColor(e, upperBox, boxesColor);
            } 
        }  
        
        if (!(boxId % cols === 0)) {
            leftBox = boxes[boxId - 1];
            if (boxesColor === leftBox.style.backgroundColor) {
                changeColor(e, leftBox, boxesColor);
            } 
        } 
        
        if (!((boxId + 1) % cols === 0)) {
            rigthBox = boxes[boxId + 1];
            if (boxesColor === rigthBox.style.backgroundColor) {              
                changeColor(e, rigthBox, boxesColor);
            } 
        } 
        
        if (boxes[boxId + cols]) {
            downBox = boxes[boxId + cols];
            if (boxesColor === downBox.style.backgroundColor) {             
                changeColor(e, downBox, boxesColor);
            } 
        }         
    }

}

function startTimeout() {
    (scoreBoard.querySelector('.again-btn')) ? scoreBoard.querySelector('.again-btn').remove() : null;
        
    // Set up the timeout
    let timeoutId;
    let intervalId;
    const timeoutDuration = 24000;
    const startTime = Date.now();
    playground.style.display = 'flex';
    createPlayground();

    
    timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        timeCounter.textContent = 'Game over!';
        const ynButton = document.createElement('button');
        ynButton.classList.add('again-btn');
        ynButton.textContent = 'Play again?';

        playground.style.display = 'none';

        scoreBoard.appendChild(ynButton);
        ynButton.addEventListener('click', startTimeout);


    }, timeoutDuration);

    
    // Update remaining time every second
    intervalId = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = timeoutDuration - elapsedTime;
        if (remainingTime <= 0) {
            timeCounter.textContent = 'Game over!';
        } else {
            timeCounter.textContent = `Time remaining: ${Math.ceil(remainingTime / 1000)} seconds`;
        }
    }, 1000); // Update every second
}

startTimeout();

// createPlayground();