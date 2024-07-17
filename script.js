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
        index = projectsTitles.indexOf(item);
        let project = document.createElement('li');
        let title = document.createElement('p');
        let source = document.createElement('a');
        let preview = document.createElement('img');
        projectsList.appendChild(project);
        console.log(project);
        console.log(index);
        project.appendChild(title);
        title.textContent = `Project ${index + 1} - ${projectsTitles[index]}`;
        source['href'] = `./project${index + 1}/index.html`;
        source['target'] = '_blank';
        project.appendChild(source);
        preview['src'] = `./project${index + 1}/challenge/design/desktop-design.jpg`;
        preview['alt'] = `Project ${index + 1} - ${projectsTitles[index]}`;
        source.appendChild(preview);
    });
}

addProjects();

