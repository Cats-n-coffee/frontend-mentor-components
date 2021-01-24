// Mobile open/close menu

const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const menuWrapper = document.getElementById('mobile-menu-wrapper');
const menu = document.getElementsByClassName('header-nav')[0];

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

function openMenu() {
    openMenuBtn.style.display = 'none';
    menuWrapper.style.display = 'block';
    closeMenuBtn.style.display = 'block';
    menu.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    openMenuBtn.style.display = 'block';
    menuWrapper.style.display = 'none';
    closeMenuBtn.style.display = 'none';
    menu.style.display = 'none';
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'scroll';
}

// Email validation/error display
const newsletter = document.getElementById('newsletter');
const form = document.getElementsByTagName('form')[0];
const errorDiv = document.getElementById('error-div');

form.addEventListener('submit', verifyEmail);

function verifyEmail(e) {
    e.preventDefault();

    let userEmail = newsletter.value;

    if(/^\S+@\S+$/.test(userEmail)) {
        console.log(userEmail)
        newsletter.value = '';
        return 
    }

    else if(userEmail === '') {
        errorDiv.innerText = 'Please enter an email address';
        newsletter.style.border = 'solid 1px #f25f3a';
        newsletter.style.color = '#f25f3a';
        setTimeout(clearDiv, 3000);
        return
    }

    else {
        errorDiv.innerText = 'Please insert a valid email';
        newsletter.style.border = 'solid 1px #f25f3a';
        newsletter.style.color = '#f25f3a';
        setTimeout(clearDiv, 3000);
        return
    }
}

function clearDiv() {
    newsletter.style.border = '';
    newsletter.style.color = '#9095a7';
    errorDiv.innerText = '';
    newsletter.value = '';
    
}

