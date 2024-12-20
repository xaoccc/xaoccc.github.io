<<<<<<< HEAD
const card = document.querySelector('.card-front');
const form = document.querySelector('.form-container');
const inputs = document.querySelectorAll('input[required]');
const submitButton = document.querySelector('.submit-button');
const successMessage = document.querySelector('.success-message');

function moveForm() {
    const cardRect = card.getBoundingClientRect();
    form.style.marginTop = `${cardRect.bottom - 250}px`;
}

function checkScreenSize() {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth < 768) {
        moveForm();
    }
}

inputs.forEach(function (input) {
    input.addEventListener('input', function (e) {
        this.setCustomValidity('');

        (input.id !== 'yy' && input.id !== 'mm') ? document.getElementById('error-' + input.id).textContent = '' : document.getElementById('error-expiry').textContent = '';
        if (input.id === 'number' || input.id === 'cvv' || input.id === 'dd' || input.id === 'mm') {
            if (input.id === 'number') {
                let cardNumber = '';
                input.value.split('').forEach(function (char, index) {
                    if ((index === 4 || index === 9 || index === 14) && index !== 0 && char !== ' ') {
                        char = ' ' + char;
                    }
                    cardNumber += char;
                });
                input.value = cardNumber;
                
            }
            if (!e.data.match(/[0-9 ]+/)) {
                let errorElement = document.getElementById('error-' + input.id);
                errorElement.textContent = 'Wrong format, numbers only';
            }
        }
    });
});

submitButton.addEventListener('click', function (e)  {
    e.preventDefault();
    

    inputs.forEach(function (input) {
        let errorElement = (input.id !== 'yy' && input.id !== 'mm') ? document.getElementById('error-' + input.id) : document.getElementById('error-expiry');
        if (!input.value && input.id) {
            errorElement.textContent = "Can't be blank";
            input.classList.add('error');
        } else if (input.id === 'number' && input.value.length !== 19) {
            errorElement.textContent = 'Your card number must be 16 digits';
        } else if (input.id === 'cvc' && input.value.length !== 3) {
            errorElement.textContent = 'Your CVC must be 3 digits';
        } else if ((input.id === 'mm' || input.id === 'yy')  && input.value.length !== 2) {     
            errorElement.textContent = 'Your MM/YY must be 2 digits each';        
        } else {
            errorElement.textContent = '';
            input.classList.remove('error');
            if (!document.querySelector('.error')) {
                form.style.display = 'none';
                successMessage.style.display = 'flex';
            }
        }

        
    });

    
});


window.addEventListener('resize', checkScreenSize);

checkScreenSize();
=======
const dataWrapper = document.querySelector('.data-wrapper');



async function fetchData() {
    const requestURL = 'https://raw.githubusercontent.com/xaoccc/xaoccc.github.io/refs/heads/main/project33/data.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    let data = await response.json();
    data = data.slice(data.length - 7, data.length);
    const GRAPH_HEIGHT = 150;

    const nums = data.map(entry => Number(entry.amount));
    console.log(Math.max(...nums));

    data.forEach(entry => {
        const wrapper = document.querySelector('.wrapper');
        let graphWrapper = document.createElement('div');
        graphWrapper.classList.add('graph');
        let graphHeading = document.createElement('div');
        let graph = document.createElement('div');
        let label = document.createElement('p');
        graphHeading.classList.add('graph-heading');
        graphHeading.textContent = entry.amount;
        graph.classList.add('graph-data', 'graph-' + entry.day);
         
        graph.style.height = (Number(entry.amount) * (GRAPH_HEIGHT / Math.max(...nums))) + 'px';
        (Number(entry.amount) === Math.max(...nums)) ? graph.style.backgroundColor = 'hsl(186, 34%, 60%)' : null;
        label.textContent = entry.day;
        
        graphWrapper.appendChild(graphHeading);
        graphWrapper.appendChild(graph);        
        graphWrapper.appendChild(label);
        dataWrapper.appendChild(graphWrapper);
    });
    
}

fetchData();

>>>>>>> 25e44cb4e0919172a41074893efe3080f972a5a9
