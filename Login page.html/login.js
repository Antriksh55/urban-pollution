const wrapper = document.querrySelector('.wrapper');
const rememberforgot= document.querrySelector('.remember-forgot');
const registerLink= document.querrySelector('.register-Link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

