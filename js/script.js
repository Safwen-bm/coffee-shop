const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const searchForm = document.querySelector('.search-form');
const cartItem = document.querySelector('.cart-items-container');

function closeAll(except) {
    [navbar, searchForm, cartItem].forEach(el => { if (el !== except) el.classList.remove('active'); });
}

document.querySelector('#menu-btn').onclick = () => { navbar.classList.toggle('active'); closeAll(navbar); };
document.querySelector('#search-btn').onclick = () => { searchForm.classList.toggle('active'); closeAll(searchForm); };
document.querySelector('#cart-btn').onclick = () => { cartItem.classList.toggle('active'); closeAll(cartItem); };

// remove items from the cart
document.querySelectorAll('.cart-item .fa-times').forEach(x => {
    x.onclick = () => x.parentElement.remove();
});

// solid header after scrolling, close panels
function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', () => { closeAll(); onScroll(); });
onScroll();

// friendly confirmation for forms
document.querySelectorAll('form[data-thanks]').forEach(f => {
    f.addEventListener('submit', e => {
        e.preventDefault();
        const msg = f.parentElement.querySelector('.thanks') || f.querySelector('.thanks');
        if (msg) msg.textContent = f.dataset.thanks;
        f.reset();
    });
});