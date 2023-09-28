let rating_btns = document.querySelectorAll('.point');

rating_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Toglie tutte le classi 'selected'
        rating_btns.forEach(btn_click => {
            btn_click.classList.remove('selected');
        });
    });
    btn.addEventListener('click', () => {
        // Aggiunge la classe 'selected' al click
        btn.classList.add('selected');
    });
})

let submit_btn = document.querySelector('.submit-btn');
let recap = document.querySelector('.recap');

let card = document.querySelector('.card');
let ty_card = document.querySelector('.card-thank-you');

submit_btn.addEventListener('click', () => {
    let selected_btn = document.querySelector('.point.selected');

    if (selected_btn) {
        let rating = selected_btn.getAttribute('data-score');
        recap.textContent = "You selected " + rating + " out of 5";
        card.style.display = "none";
        ty_card.style.display = "block";
    }
});