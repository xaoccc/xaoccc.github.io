const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const adviceButton = document.querySelector('button');

function getAPIdata() {
    var url = 'https://api.adviceslip.com/advice';
    fetch(url)
    .then((request) => { 
        return request.json() 
    })
    .then(data => {       
        adviceId.textContent = data.slip.id;
        adviceText.textContent = `"${data.slip.advice}"`;
})
    .catch(error => console.error(error));
}

getAPIdata();

adviceButton.addEventListener('click', getAPIdata);