document.getElementById('menu-button').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    menu.classList.add('flex-col', 'space-y-4');
});