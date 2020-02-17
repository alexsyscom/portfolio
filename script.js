let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', switchmenu);

function switchmenu(e) {
    var menu = document.querySelector('#menu');
    this.open = !this.open;
    if (this.open) {
        e.target.className = menu.className = "open";
    }
    else {
    		e.target.className = menu.className = "close";
    }
}