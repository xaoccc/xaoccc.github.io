const preview = document.querySelector('span.gray-2');
const docWidth = document.documentElement.scrollWidth;
const dropDownBtn = document.querySelector('.hamburger')
const dropDownNav = document.querySelector('nav');
const dropDownUl = document.querySelector('nav ul');
let showDropDown = false;
(docWidth > 768) ? preview.textContent = "to see a live preview" : preview.textContent = "to see a preview";
window.addEventListener('resize', function() {
    const docWidth = document.documentElement.scrollWidth;
    (docWidth > 768) ? preview.textContent = "to see a live preview" : preview.textContent = "to see a preview";
})

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