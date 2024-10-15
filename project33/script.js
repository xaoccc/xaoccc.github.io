const dataWrapper = document.querySelector('.data-wrapper');
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

weekdays.forEach(day => {
    let graphWrapper = document.createElement('div');
    graphWrapper.classList.add('graph');
    let graph = document.createElement('div');
    let label = document.createElement('p');
    graph.classList.add('graph-data', 'graph-' + day);
    graph.style.height = Math.floor(Math.random() * 100) + 'px';
    label.textContent = day;
    graphWrapper.appendChild(graph);
    graphWrapper.appendChild(label);
    dataWrapper.appendChild(graphWrapper);
});