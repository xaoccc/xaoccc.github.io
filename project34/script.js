const dataWrapper = document.querySelector('.data-wrapper');
let dataSections = ['Work', 'Play', 'Study', 'Exercise', 'Social', 'Self-Care'];
const [dailyBtn, weeklyBtn, monthlyBtn] = document.querySelectorAll('.data-options button');

dataSections.forEach(section => {
    let elements = [['div', 'section-wrapper'], ['div', 'section-logo'],  ['div', 'section-data-wrapper'], ['div', 'section-header'], ['div', 'section-header-text'], ['a', 'section-header-link'], ['h2', 'current-data'], ['p', 'previous-data']];
    let [sectionWrapper, sectionLogo, sectionDataWrapper, sectionHeader, sectionHeaderText, sectionHeaderLink, currentData, previousData] = [null, null, null, null, null, null, null, null];

    elements.forEach((element, index) => {
        const el = document.createElement(element[0]);
        el.classList.add(element[1]);
        switch(index) {
            case 0: sectionWrapper = el; break;
            case 1: sectionLogo = el; break;
            case 2: sectionDataWrapper = el; break;
            case 3: sectionHeader = el; break;
            case 4: sectionHeaderText = el; break;
            case 5: sectionHeaderLink = el; break;
            case 6: currentData = el; break;
            case 7: previousData = el; break;
        }
    });

    sectionHeaderLink.href = '#';
    sectionHeaderText.textContent = section.split('-').join(' ');
    sectionLogo.style.backgroundImage = `url(./images/icon-${section.toLowerCase()}.svg)`;

    switch (section) {
        case 'Work':
            sectionLogo.style.backgroundColor = 'hsl(15, 100%, 70%)';            
            break;
        case 'Play':
            sectionLogo.style.backgroundColor = 'hsl(195, 74%, 62%)';
            break;
        case 'Study':
            sectionLogo.style.backgroundColor = 'hsl(348, 100%, 68%)';
            break;
        case 'Exercise':
            sectionLogo.style.backgroundColor = 'hsl(145, 58%, 55%)';
            break;
        case 'Social':
            sectionLogo.style.backgroundColor = 'hsl(264, 64%, 52%)';
            break;
        case 'Self-Care':
            sectionLogo.style.backgroundColor = 'hsl(43, 84%, 65%)';
            break;
    }
    sectionHeader.appendChild(sectionHeaderText);
    sectionHeader.appendChild(sectionHeaderLink);
    sectionDataWrapper.appendChild(sectionHeader);
    sectionWrapper.appendChild(sectionLogo);
    sectionWrapper.appendChild(sectionDataWrapper);
    sectionDataWrapper.appendChild(currentData);
    sectionDataWrapper.appendChild(previousData);
    dataWrapper.appendChild(sectionWrapper);
});

async function fetchData() {
    const requestURL = 'https://raw.githubusercontent.com/xaoccc/xaoccc.github.io/refs/heads/main/project34/data.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    let data = await response.json();
    return data;
}


dailyBtn.addEventListener('click', async (e) => {
    const dataSections = document.querySelectorAll('.section-wrapper');
    const data = await fetchData();

    dataSections.forEach((section, index) => {        
        const currentData = section.children[1].children[1];
        const previousData = section.children[1].children[2];
        currentData.textContent = `${data[index].timeframes.daily.current}hrs`;
        previousData.textContent = `Yesterday - ${data[index].timeframes.daily.previous}hrs`;
    });    
});

weeklyBtn.addEventListener('click', async (e) => {
    const dataSections = document.querySelectorAll('.section-wrapper');
    const data = await fetchData();

    dataSections.forEach((section, index) => { 
        const currentData = section.children[1].children[1];
        const previousData = section.children[1].children[2];
        currentData.textContent = `${data[index].timeframes.weekly.current}hrs`;
        previousData.textContent = `Last Week - ${data[index].timeframes.weekly.previous}hrs`;
    });    
});

monthlyBtn.addEventListener('click', async (e) => {
    const dataSections = document.querySelectorAll('.section-wrapper');
    const data = await fetchData();

    dataSections.forEach((section, index) => { 
        const currentData = section.children[1].children[1];
        const previousData = section.children[1].children[2];
        currentData.textContent = `${data[index].timeframes.monthly.current}hrs`;
        previousData.textContent = `Last Month - ${data[index].timeframes.monthly.previous}hrs`;
    });    
});