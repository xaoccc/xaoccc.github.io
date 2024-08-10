const resetBtn = document.getElementById('reset');
const newGameBtn = document.getElementById('new-game');
const playground = document.getElementById('playground');

newGameBtn.addEventListener('click', createPlayground);


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

    function startTimeout() {
        
        // Set up the timeout
        let timeoutId;
        let intervalId;
        const timeoutDuration = 24000;
        const startTime = Date.now();
        timeoutId = setTimeout(() => {
            createPlayground();
        }, timeoutDuration);

        
        // Update remaining time every second
        intervalId = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = timeoutDuration - elapsedTime;
            if (remainingTime <= 0) {
                timeCounter.textContent = 'Game over!';
            } else {
                timeCounter.textContent = `Time remaining: ${Math.ceil(remainingTime / 1000)} seconds`;
                console.log(`Time remaining: ${Math.ceil(remainingTime / 1000)} seconds`);
            }
        }, 1000); // Update every second
    }

    startTimeout();

    const colors = {'yellow': 150, 'orange': 70, 'green': 30 , 'purple':10};
    const boxesScore = {'yellow': 1, 'orange': 3, 'green': 5 , 'purple':10};
    let boxes = [];
    

    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        location.reload();
    })


    playground.innerHTML = '';

    for (i=0; i<128; i++) {
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
               

        if (box.style.backgroundColor !== 'red' && box.style.backgroundColor !== boxesColor) {
            return
        }

        let [upperBox, leftBox, rigthBox, downBox] = ['', '', '', '']
        const boxId = Number(box.id)        
        let ColorScore = boxesScore[box.style.backgroundColor];
        box.style.backgroundColor = 'red';
        box.classList.add('clicked');
        score += ColorScore;
      

        if (boxes[boxId - 16]) {
            upperBox = boxes[boxId - 16];
            if (boxesColor === upperBox.style.backgroundColor) {
                changeColor(e, upperBox, boxesColor);
            } 
        }  
        
        if (!(boxId % 16 === 0)) {
            leftBox = boxes[boxId - 1];
            if (boxesColor === leftBox.style.backgroundColor) {
                changeColor(e, leftBox, boxesColor);
            } 
        } 
        
        if (!((boxId + 1) % 16 === 0)) {
            rigthBox = boxes[boxId + 1];
            if (boxesColor === rigthBox.style.backgroundColor) {              
                changeColor(e, rigthBox, boxesColor);
            } 
        } 
        
        if (boxes[boxId + 16]) {
            downBox = boxes[boxId + 16];
            if (boxesColor === downBox.style.backgroundColor) {             
                changeColor(e, downBox, boxesColor);
            } 
        }         
    }

}
createPlayground();