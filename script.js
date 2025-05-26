const ratings = document.querySelectorAll('.rating');
const submit = document.querySelector('.submit-btn');
const ratingState = document.querySelector('.rating-state');
const resultState = document.querySelector('.result-state');
const ratingOutput = document.querySelector('.rating-selected');

let ratingSelected = false;

function resetActive() {
ratings.forEach((rating) => {
    rating.classList.remove('active');
})
}

function onSubmit(value) {
    ratingOutput.textContent = value;
}

ratings.forEach((rating) => {
    rating.addEventListener('click', () => {
        resetActive()
        let selectedRating = rating.getAttribute('value');
        rating.classList.add('active');
        onSubmit(selectedRating);
        ratingSelected = true;
        console.log(selectedRating);
        
    })
})

submit.addEventListener('click', () => {
    if ( ratingSelected) {
       ratingState.style.display = "none"; 
       resultState.style.display = "block";
    }
    else {
        alert('Please select a rating to be submitted.')
    }

})