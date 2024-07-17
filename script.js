let projectsList = document.querySelector('#mainProjects');
let projectsTitles = [
    'Product Preview Card Component',
    'QR Code Component',
    'Results Summary Component',
    'Interactive rating component',
    'Blog preview card component',
    'FAQ accordion component',
    'NFT preview card component',
    'Order summary component',
    'Stats preview card component',
    '3-column preview card component',
    'Profile card component',
    'Social proof section',
    'Article preview component',
    'Contact Form',
    'Recipe Page',
    'Social Links Profile',
    'Four Card Feature Section',
    'Coming Soon Page',
    'Intro Component With Sign Up Form'
];

function addProjects() {
    projectsTitles.forEach((item) => {
        // Create necessary elements and set their attributes
        index = projectsTitles.indexOf(item);
        let project = document.createElement('li');
        let title = document.createElement('p');
        title.textContent = `Project ${index + 1} - ${projectsTitles[index]}`;
        let source = document.createElement('a');
        source['href'] = `./project${index + 1}/index.html`;
        source['target'] = '_blank';
        let preview = document.createElement('img');
        preview['src'] = `./project${index + 1}/challenge/design/desktop-design.jpg`;
        preview['alt'] = `Project ${index + 1} - ${projectsTitles[index]}`;

        // Append elements to the DOM
        projectsList.appendChild(project);
        project.appendChild(title);        
        project.appendChild(source);
        source.appendChild(preview);
    });
}

addProjects();

