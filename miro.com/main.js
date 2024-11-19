const hamburgur = document.getElementById('hamburgur');
const links = document.getElementById('res-nav');
let isOpen = true;

function openClosed() {
    if (isOpen) {
        links.style.translate = "0%";
        isOpen = false;
        
    } else {
        links.style.translate = "100%";
        isOpen = true;
    }
    
}
hamburgur.addEventListener('click',openClosed);









