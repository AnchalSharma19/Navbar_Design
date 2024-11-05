document.getElementById('menu-button').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    menu.classList.add('flex-col', 'space-y-4');
});

const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const backdrop = document.getElementById('backdrop');

menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const isHidden = mobileMenu.classList.toggle('hidden');
    backdrop.style.display = isHidden ? 'none' : 'block';

    if (isHidden) {
        // Close the menu
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('close');
    } else {
        // Open the menu
        mobileMenu.classList.remove('close');
        mobileMenu.classList.add('open');
    }
});

// Close the mobile menu when clicking outside of it
backdrop.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    backdrop.style.display = 'none';
    mobileMenu.classList.remove('open');
    mobileMenu.classList.add('close');
});

// Close mobile menu when clicking on a menu item
const menuItems = document.querySelectorAll('#mobile-menu a');
menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();
        mobileMenu.classList.add('hidden');
        backdrop.style.display = 'none';
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('close');
    });
});

// Close mobile menu when clicking outside of the menu and button
document.addEventListener('click', (event) => {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickInsideButton = menuButton.contains(event.target);

    // If the click was outside the menu and not on the button, close the menu
    if (!isClickInsideMenu && !isClickInsideButton) {
        mobileMenu.classList.add('hidden');
        backdrop.style.display = 'none';
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('close');
    }
});
