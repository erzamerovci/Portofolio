function showMenu() {
    let menu = document.getElementById('nav-bar-resp');
    let button = document.getElementById('nav-button-resp');
    let nav=document.getElementById('nav');
    if (menu.style.display === 'none') {
        // Show the navbar as a tooltip
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        menu.style.position = 'absolute';
        menu.style.top = button.offsetTop + button.offsetHeight + 'px';
        menu.style.left = button.offsetLeft + 'px';
        menu.style.backgroundColor='#5474fd';
        nav.style.height = 'auto';
        menu.style.width="150px";
        menu.style.textAlign="center";

        nav.style.height = 'auto';


        // Hide the button
        button.style.display = 'block'; 
    } else {
        // Hide the navbar
        menu.style.display = 'none';

        // Show the button
        button.style.display = 'block'; 
    }
}
