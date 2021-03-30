var modal = document.getElementById('modal');
var removeModal = document.getElementById('remove-modal');
var showModal = document.getElementById('show-modal');

showModal.addEventListener('click',() => modal.style.display = "block");

removeModal.addEventListener('click',() => modal.style.display = "none");

window.addEventListener('click', e => {
    if(e.target === modal){
        modal.style.display = "none"
    }
})