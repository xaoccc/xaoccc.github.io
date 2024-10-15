const dataWrapper = document.querySelector('.data-wrapper');



async function fetchData() {
    const requestURL = 'https://raw.githubusercontent.com/xaoccc/xaoccc.github.io/refs/heads/main/project33/data.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    const GRAPH_HEIGHT = 150;

    const nums = data.map(entry => Number(entry.amount));
    console.log(Math.max(...nums));

    data.forEach(entry => {
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

