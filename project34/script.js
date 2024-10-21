const dataWrapper = document.querySelector('.data-wrapper');
let dataSections = ['Work', 'Play', 'Study', 'Exercise', 'Social', 'Self Care'];
const option = document.querySelector('.data-options button');
console.log(option);

dataSections.forEach(section => {
    let sectionWrapper = document.createElement('div');

    let sectionLogo = document.createElement('div');
    let sectionDataWrapper = document.createElement('div');

    let sectionHeader = document.createElement('div');
    
    sectionWrapper.classList.add('section-wrapper');

    sectionLogo.classList.add('section-logo');    
    sectionDataWrapper.classList.add('section-data-wrapper');

    sectionHeader.classList.add('section-header');

    switch (section) {
        case 'Work':
            sectionLogo.style.backgroundColor = 'hsl(15, 100%, 70%)';
            sectionHeader.textContent = 'Work';
            break;
        case 'Play':
            sectionLogo.style.backgroundColor = 'hsl(195, 74%, 62%)';
            sectionHeader.textContent = 'Play';
            break;
        case 'Study':
            sectionLogo.style.backgroundColor = 'hsl(348, 100%, 68%)';
            sectionHeader.textContent = 'Study';
            break;
        case 'Exercise':
            sectionLogo.style.backgroundColor = 'hsl(145, 58%, 55%)';
            sectionHeader.textContent = 'Exercise';
            break;
        case 'Social':
            sectionLogo.style.backgroundColor = 'hsl(264, 64%, 52%)';
            sectionHeader.textContent = 'Social';
            break;
        case 'Self Care':
            sectionLogo.style.backgroundColor = 'hsl(43, 84%, 65%)';
            sectionHeader.textContent = 'Self Care';
            break;
    }
    
    sectionDataWrapper.appendChild(sectionHeader);
    sectionWrapper.appendChild(sectionLogo);
    sectionWrapper.appendChild(sectionDataWrapper);
    dataWrapper.appendChild(sectionWrapper);
});

async function fetchData() {

    const requestURL = 'https://raw.githubusercontent.com/xaoccc/xaoccc.github.io/refs/heads/main/project34/data.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    let data = await response.json();
    console.log(data);



}