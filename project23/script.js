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
    JSONdata.forEach(element => {
        console.log(element)
        let listItem = document.createElement('li');
        createChild('img', listItem, [], '', '', element.image.desktop);
        createChild('button', listItem, [], 'Add to Cart');
        createChild('p', listItem, ['category'], element.category);
        createChild('p', listItem, ['name'], element.name);
        createChild('p', listItem, ['price'], `$${Number(element.price).toFixed(2)}`);
        container.appendChild(listItem);
    });

});

cartHeading.textContent = `Your Cart (${totalQuantity})`;

(totalQuantity === 0) ? emptyCartView() : null;
