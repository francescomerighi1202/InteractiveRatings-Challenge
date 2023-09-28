// Bottoni (1, 2, 3, 4, 5)
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

// Bottone submit
let submit_btn = document.querySelector('.submit-btn');
let recap = document.querySelector('.recap');

// Main card e second card
let card = document.querySelector('.card');
let ty_card = document.querySelector('.card-thank-you');

submit_btn.addEventListener('click', () => {
    // Bottone selezionato
    let selected_btn = document.querySelector('.point.selected');

    // Se esiste un bottone selezionato
    if (selected_btn) {
        // Prende il valore dall'attributo data-score nel tag HTML
        let rating = selected_btn.getAttribute('data-score');
        // Imposta il testo della second card con il valore e la fa apparire al posto della main card
        recap.textContent = "You selected " + rating + " out of 5";
        card.style.display = "none";
        ty_card.style.display = "block";
    }
});