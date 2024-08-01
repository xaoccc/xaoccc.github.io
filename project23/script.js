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
const container = document.querySelector('.items-list');
let cartHeading = document.querySelector('.cart-full h2');
let cartEmpty = document.querySelector('.cart-empty');
let cartFull = document.querySelector('.cart-full');
let shoppingCartList = document.querySelector('.shopping-cart-list');
let totalQuantity = 0;
let totalCartPrice = 0;
let cartObj = {};


function createChild(tag, parent, classes, text, id, src) {
    let el = document.createElement(tag);
    (text) ? el.textContent = text : null;
    (parent) ? parent.appendChild(el) : null;
    (classes && classes.length > 0) ? el.classList.add(...classes) : null;
    (id) ? el.id = id : null;
    (src) ? el.src = src : null;
}

function emptyCartView() {
    createChild('img', cartEmpty, ['cart-empty-img'], '', '', './assets/images/illustration-empty-cart.svg');
    createChild('p', cartEmpty, [], 'Your added items will appear here');
}

function fullCartView() {
    if (totalQuantity > 0) {
        if (!cartFull.querySelector('.order-total')) {
            createChild('div', cartFull.querySelector('.total-cart-amount'), [], 'Order Total');
            createChild('div', cartFull.querySelector('.total-cart-amount'), ['order-total', 'bolder'], `$${totalCartPrice.toFixed(2)}`);
        } else {
            cartFull.querySelector('.order-total').textContent = `$${totalCartPrice.toFixed(2)}`;
        }   

    }    
}

function switchToEmptyCardView() {
    cartEmpty.style.display = 'block';
    cartFull.style.display = 'none';
}

function switchToFullCardView() {
    cartEmpty.style.display = 'none';
    cartFull.style.display = 'block';
}

function findAncestorWithClass(element, className) {
    while (element && !element.classList.contains(className)) {
        element = element.parentElement;
    }
    return element;
}

function findAncestorWithTag(element, nodeName) {
    while (element && element.nodeName !== nodeName ) {
        element = element.parentElement;
    }
    return element;
}

fetchJSONData(() => {
    JSONdata.forEach((element, index) => {
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
    // Reset all buttons' styles and content, except for the active one
    Array.from(container.querySelectorAll('button')).forEach((button) => {
        if (button.className === 'shopping-time changed-add-to-cart-button' && document.activeElement !== button) {
            Array.from(button.querySelectorAll('.decrement-button,  .increment-button')).forEach((button) => button.remove());
            button.classList.remove('changed-add-to-cart-button');
            button.querySelector('.qty').remove();
            createChild('img', button, ['cart-icon', 'shopping-time'], '', '', './assets/images/icon-add-to-cart.svg');
            createChild('span', button, ['shopping-time'], 'Add to Cart');            
        }  
    });

    // Change the item add-to-cart button so that the increment/decrement purchase quantity buttons appear
    if (e.target.className === 'shopping-time') {
        let elementToChange = e.target;
        let productID = findAncestorWithTag(elementToChange, 'LI').id;
        if (e.target.tagName !== 'BUTTON') {
            elementToChange = e.target.parentElement;
        }
        elementToChange.textContent = '';
        elementToChange.classList.add('changed-add-to-cart-button');
        let decrementButton = document.createElement('span');      
        let number = document.createElement('span'); 
        let incrementButton = document.createElement('span'); 

        decrementButton.classList.add('decrement-button');
        incrementButton.classList.add('increment-button');
        number.classList.add('qty');

        // Update or init product quantity on purchase button
        (cartObj[productID]) ? number.textContent = cartObj[productID] : number.textContent = 0;  

        decrementButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/>
            </svg>
        `;

        incrementButton.innerHTML= `
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
            </svg>
        `;

        elementToChange.appendChild(decrementButton);
        elementToChange.appendChild(number);      
        elementToChange.appendChild(incrementButton);      
        
    } 
    // Chech for a click on and increment / decrement button
    if (e.target.className === 'increment-button' || e.target.className === 'decrement-button' || e.target.nodeName === 'svg' || e.target.nodeName === 'path') {
        
        // Increase and decrease quantity
        if (findAncestorWithClass(e.target, 'increment-button')) {
            let currentIncrementButton = findAncestorWithClass(e.target, 'increment-button').parentElement;
            const item = findAncestorWithTag(currentIncrementButton, 'LI');
            let quantity = Number(currentIncrementButton.querySelector('.qty').textContent) + 1;
            const itemPrice = Number(item.querySelector('.price').textContent.slice(1));
            currentIncrementButton.querySelector('.qty').textContent = String(quantity);
            totalQuantity += 1;
            totalCartPrice += itemPrice;
            
            (cartObj[item.id]) ? cartObj[item.id] += 1 : cartObj[item.id] = 1;

            if (!shoppingCartList.querySelector(`#cart-${item.id}`)) {
                createChild('li', shoppingCartList, [], '', `cart-${item.id}`);
                createChild('div', shoppingCartList.lastElementChild, ['cart-list-left']);
                createChild('div', shoppingCartList.lastElementChild, ['cart-list-right']);
                let leftDiv = shoppingCartList.querySelector(`#cart-${item.id} .cart-list-left`);
                let righttDiv = shoppingCartList.querySelector(`#cart-${item.id} .cart-list-right`);
                createChild('p', leftDiv, ['bold'], item.querySelector('.name').textContent);
                createChild('p', leftDiv, ['cart-item-details'], '');
                createChild('span', leftDiv.querySelector('.cart-item-details'), ['cart-qty', 'bold'], `${item.querySelector('.qty').textContent}x`);
                createChild('span', leftDiv.querySelector('.cart-item-details'), ['cart-product-price'], `@${item.querySelector('.price').textContent}`);                
                createChild('span', leftDiv.querySelector('.cart-item-details'), ['cart-product-total-price', 'bold'], `${item.querySelector('.price').textContent}`);
                righttDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>`            

            } else {
                let leftDiv = shoppingCartList.querySelector(`#cart-${item.id} .cart-list-left`);
                let totalPrice = (Number(item.querySelector('.qty').textContent) * Number(item.querySelector('.price').textContent.slice(1))).toFixed(2);
                leftDiv.querySelector('.cart-item-details .cart-qty').textContent = `${item.querySelector('.qty').textContent}x `;
                leftDiv.querySelector('.cart-item-details .cart-product-price').textContent = `@${item.querySelector('.price').textContent}`;
                leftDiv.querySelector('.cart-item-details .cart-product-total-price').textContent = `$${totalPrice}`;
            }   

        } else {
            let currentDecrementButton = findAncestorWithClass(e.target, 'decrement-button').parentElement;
            const item = findAncestorWithTag(currentDecrementButton, 'LI');
            let quantity = Number(currentDecrementButton.querySelector('.qty').textContent);
            const itemPrice = Number(item.querySelector('.price').textContent.slice(1));             
            (cartObj[item.id] && cartObj[item.id] > 0) ? cartObj[item.id] -= 1 : cartObj[item.id] = 0;

            if (quantity > 0)  {
                currentDecrementButton.querySelector('.qty').textContent = String(quantity - 1) ;

                let leftDiv = shoppingCartList.querySelector(`#cart-${item.id} .cart-list-left`);
                let totalPrice = (Number(item.querySelector('.qty').textContent) * Number(item.querySelector('.price').textContent.slice(1))).toFixed(2);
                leftDiv.querySelector('.cart-item-details .cart-qty').textContent = `${item.querySelector('.qty').textContent}x `;
                leftDiv.querySelector('.cart-item-details .cart-product-price').textContent = `@${item.querySelector('.price').textContent}`;
                leftDiv.querySelector('.cart-item-details .cart-product-total-price').textContent = `$${totalPrice}`;                
                totalQuantity -= 1;
                totalCartPrice -=  itemPrice;
            }

            if (quantity === 0 && shoppingCartList.querySelector(`#cart-${item.id}`)) {
                shoppingCartList.querySelector(`#cart-${item.id}`).remove();
            }
        }
        fullCartView();
        
    }
    cartHeading.textContent = `Your Cart (${totalQuantity})`;
    (totalQuantity === 0) ? switchToEmptyCardView() : switchToFullCardView();
})


cartFull.addEventListener('click', (e) => {

    if (findAncestorWithClass(e.target, 'cart-list-right')) {
        let item = findAncestorWithClass(e.target, 'cart-list-right').parentElement;   
        const orderPrice = Number(item.querySelector('.cart-product-total-price').textContent.slice(1));
        const orderQty = Number(item.querySelector('.cart-qty').textContent.slice(0, -2));
        console.log(orderQty);

        // Update the total price
        totalCartPrice -=  orderPrice;
        cartFull.querySelector('.order-total').textContent = `$${totalCartPrice.toFixed(2)}`;

        // Update the total quantity
        totalQuantity -= orderQty;
        cartHeading.textContent = `Your Cart (${totalQuantity})`;
        (totalQuantity === 0) ? switchToEmptyCardView() : switchToFullCardView();
        delete cartObj[item.id.slice(5)];
        item.remove();
    }
    
})

cartFull.querySelector('button').addEventListener('click', (e) => {
    let popUpWindow = document.querySelector('.order-confirmation')
    popUpWindow.style.display = 'flex';
    let orderList = popUpWindow.querySelector('.confirmed-items-list');
    Object.entries(cartObj).forEach((item) => {
        const itemImg = document.querySelector(`#${item[0]} img`);
        createChild('li', orderList, ['order-item'], '', `order-${item[0]}`);
        createChild('div', orderList.lastElementChild, ['order-item-left']);
        createChild('div', orderList.lastElementChild, ['order-item-rigth']);
        createChild('img', orderList.lastElementChild.children[0], ['order-item-img'], '', '', itemImg.src);
        const itemData = cartFull.querySelector(`#cart-${item[0]} .cart-list-left`).cloneNode(true);        
        orderList.lastElementChild.children[0].appendChild(itemData);
        orderList.lastElementChild.children[1].appendChild(itemData.querySelector('.cart-product-total-price'));
    })
    orderList.appendChild(cartFull.querySelector(`.total-cart-amount`).cloneNode(true));

})

document.querySelector('.close-button').addEventListener('click', (e) => {
    location.reload();
})


cartHeading.textContent = `Your Cart (${totalQuantity})`;
(totalQuantity === 0) ? emptyCartView() : switchToFullCardView();


