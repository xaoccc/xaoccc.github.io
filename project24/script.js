import '../node_modules/react/umd/react.development.js';
import '../node_modules/react-dom/umd/react-dom.development.js';
// import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.querySelector('main'));

const heading = React.createElement('h1', {}, 'Stay updated!');
const p = React.createElement('p', {}, 'Join 60,000+ product managers receiving monthly updates on:');
const listItems = [
  React.createElement('li', {key: 'li-1'}, React.createElement('span', {key: 'span-1'},), 'Product discovery and building what matters' ), 
  React.createElement('li', {key: 'li-2'}, React.createElement('span', {key: 'span-2'},), 'Measuring to ensure updates are a success'), 
  React.createElement('li', {key: 'li-3'}, React.createElement('span', {key: 'span-3'},), 'And much more!')
];
const ul = React.createElement('ul', {key: 'ul'}, listItems);

const label = React.createElement('label', {key: 'label', htmlFor: 'email'}, 'Email address');
const input = React.createElement('input', {key: 'input', id: 'email', placeholder: 'email@company.com'});
const button = React.createElement('button', {key: 'button', onClick: (e) => submit(e)}, 'Subscribe to monthly newsletter');
const form = React.createElement('form', {key: 'form'}, label, input, button);

let leftContent = React.createElement('section', {className: 'left-section', key: 1}, heading, p, ul, form);
const rightContent = React.createElement('section', {className: 'right-section', key: 2});

const boldSpan = React.createElement('span', {className: 'bold', key: 'boldspan'}, 'ash@loremcompany.com');
const successImg = React.createElement('img', {});
const successHeading = React.createElement('h1', {}, 'Thanks for subscribing!');
const successP = React.createElement('p', {}, 'A confirmation email has been sent to ', boldSpan, 'Please open it and click the button inside to confirm your subscription.');
const successButton = React.createElement('button', {key: 'button', onClick: (e) => reset(e)}, 'Dismiss message');

const success = React.createElement('section', {className: 'success', key: 3}, successImg, successHeading, successP, successButton );

function submit(e) {
  e.preventDefault();
  document.querySelector('.left-section').style.display = 'none';
  document.querySelector('.right-section').style.display = 'none';
  document.querySelector('.success').style.display = 'block';
}

function reset(e) {
  document.querySelector('.left-section').style.display = 'block';
  document.querySelector('.right-section').style.display = 'block';
  document.querySelector('.success').style.display = 'none';
}

root.render([leftContent, rightContent, success]);