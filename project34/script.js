const dataWrapper = document.querySelector('.data-wrapper');
let dataSections = ['Work', 'Play', 'Study', 'Exercise', 'Social', 'Self Care'];

dataSections.forEach(section => {
    let section = document.createElement('div');
    let sectionHeader = document.createElement('div');

    section.classList.add('section-wrapper');
    sectionHeader.classList.add('section-header');

    dataWrapper.appendChild(section);
});

async function fetchData() {

    const requestURL = 'https://raw.githubusercontent.com/xaoccc/xaoccc.github.io/refs/heads/main/project34/data.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    let data = await response.json();



}