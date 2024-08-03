import '../node_modules/react/umd/react.development.js';
import '../node_modules/react-dom/umd/react-dom.development.js';
// import ReactDOM from 'react-dom';


const rootDomElement = document.querySelector('main');

const root = ReactDOM.createRoot(rootDomElement);

function createElements(tagName) {
    const elements = [];
    for (let i = 1; i <= 2; i++) {
        elements.push(React.createElement(tagName, {className: `section-${i}`, key: i}));
    }
    return elements;
  }

// const reactSection = React.createElement('section', {className: 'left-section'});


// Note ot self: This action replaces all other html code:
// root.render(createElements('section'));