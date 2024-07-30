let JSONdata = '';

function fetchJSONData(callback) {
    fetch("./data.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
              JSONdata = data;
              if (callback) {
                callback();
            }
             })
        .catch((error) => 
               console.error("Unable to fetch data:", error));
}
const container = document.querySelector('ul');
let cartHeading = document.querySelector('h2');
let cart = document.querySelector('.cart');
let totalQuantity = 0;


function createChild(tag, parent, classes, text, id, src) {
    let el = document.createElement(tag);
    (text) ? el.textContent = text : null;
    (parent) ? parent.appendChild(el) : null;
    (classes && classes.length > 0) ? el.classList.add(...classes) : null;
    (id) ? el.id = id : null;
    (src) ? el.src = src : null;
}

function emptyCartView() {
    createChild('img', cart, ['cart-empty'], '', '', './assets/images/illustration-empty-cart.svg');
    createChild('p', cart, [], 'Your added items will appear here');
}

fetchJSONData(() => {
    JSONdata.forEach((element, index) => {
        console.log(element)
        let listItem = document.createElement('li');
        listItem.id = `item-${index}`;
        createChild('img', listItem, [], '', '', element.image.desktop);
        createChild('button', listItem, ['shopping-time']);
        createChild('p', listItem, ['category'], element.category);
        createChild('p', listItem, ['name'], element.name);
        createChild('p', listItem, ['price'], `$${Number(element.price).toFixed(2)}`);
        createChild('img', listItem.querySelector('button'), ['cart-icon', 'shopping-time'], '', '', './assets/images/icon-add-to-cart.svg');
        createChild('span', listItem.querySelector('button'), ['shopping-time'], 'Add to Cart');
        container.appendChild(listItem);
    });

});

container.addEventListener('click', (e) => {
    
    Array.from(container.querySelectorAll('button')).forEach((button) => {
        if (button.className === 'shopping-time changed-add-to-cart-button' && document.activeElement !== button) {
            Array.from(button.querySelectorAll('.decrement-button,  .increment-button')).forEach((button) => button.remove());
            button.classList.remove('changed-add-to-cart-button');
            button.querySelector('.qty').remove();
            createChild('img', button, ['cart-icon', 'shopping-time'], '', '', './assets/images/icon-add-to-cart.svg');
            createChild('span', button, ['shopping-time'], 'Add to Cart');            
        }       


    });

    if (e.target.className === 'shopping-time') {
        let elementToChange = e.target;
        if (e.target.tagName !== 'BUTTON') {
            elementToChange = e.target.parentElement;
        }
        elementToChange.textContent = '';
        elementToChange.classList.add('changed-add-to-cart-button');
        let decrementButton = document.createElement('img');      
        let number = document.createElement('span'); 
        let incrementButton = document.createElement('img'); 

        decrementButton.classList.add('decrement-button');
        incrementButton.classList.add('increment-button');
        number.classList.add('qty');

        decrementButton.src = './assets/images/icon-decrement-quantity.svg'
        number.textContent = 0;        
        incrementButton.src = './assets/images/icon-increment-quantity.svg';  

        elementToChange.appendChild(decrementButton);
        elementToChange.appendChild(number);      
        elementToChange.appendChild(incrementButton);       
        
    } 
})

cartHeading.textContent = `Your Cart (${totalQuantity})`;

(totalQuantity === 0) ? emptyCartView() : null;
