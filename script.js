let projectsList = document.querySelector('#mainProjects');
let projectsTitles = [
    'Product Preview Card Component',
    'QR Code Component',
    'Results Summary Component',
    'Interactive rating Component',
    'Blog Preview Card Component',
    'FAQ Accordion Component',
    'NFT Preview Card Component',
    'Order Summary Component',
    'Stats Preview Card Component',
    '3-column Preview Card Component',
    'Profile Card Component',
    'Social Proof Section',
    'Article Preview Component',
    'Contact Form',
    'Recipe Page',
    'Social Links Profile',
    'Four Card Feature Section',
    'Coming Soon Page',
    'Intro Component With Sign Up Form',
    'Ping Coming Soon Page',
    'Mortgage Repayment Calculator',
    'Intro Section With Dropdown Navigation',
    'Product List With Cart',
    'Newsletter Sign-Up Form With Success Message',
    'Click The Boxes',
    'Age Calculator App',
    'Single Price Grid Component',
    'Huddle Landing Page With Single Introductory Section',
    'News Homepage',
    'Notifications Page',
    'Bento Grid',
    'Interactive Card Details Form',
    'Expenses Chart Component',
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

