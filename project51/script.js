const preview = document.querySelector('span.gray-2');
const docWidth = document.documentElement.scrollWidth;
const dropDownBtn = document.querySelector('.hamburger')
const dropDownNav = document.querySelector('nav');
const dropDownUl = document.querySelector('nav ul');
const li = document.querySelector('li.gray-1')
let showDropDown = false;

function bigSize() {
    preview.textContent = "to see a live preview";
    li.innerHTML = "&#8226;";
    li.classList.remove("mobile");
    dropDownNav.style.display = 'flex';
    dropDownUl.style.display = 'flex';
}

function smallSize() {
    preview.textContent = "to see a preview";
    li.innerHTML = "";
    li.classList.add("mobile");
} 

// Check what device do we use
if (docWidth > 768) {
    bigSize()
} else {
    smallSize()
}
// Check if we resize the window on our device (especiallly on desktop)
window.addEventListener('resize', function() {
    const docWidth = document.documentElement.scrollWidth;
    if (docWidth > 768) {
        bigSize()
    } else {
        smallSize()
        dropDownNav.style.display = 'none';
        dropDownUl.style.display = 'none';
    }
})

// Toggle the display of the dropdown navigation
dropDownBtn.addEventListener('click', function (){
    if (showDropDown) {
        dropDownNav.style.display = 'none';
        dropDownUl.style.display = 'none';
        showDropDown = false;
        dropDownBtn.classList.remove('close');        
    } else {
        dropDownNav.style.display = 'flex';
        dropDownUl.style.display = 'flex';
        showDropDown = true;
        dropDownBtn.classList.add('close');        
    }
})