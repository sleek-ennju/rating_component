let rating = document.querySelector('.rating');
let thank = document.querySelector('.thank-you');
let rates = document.querySelectorAll('.rates');
const btn = document.getElementById('submit');
let result = document.querySelector('.result');
let selectedRate = '';




rates.forEach(rate => {
    rate.addEventListener('click', function(){
        // remove all active classes
        rates.forEach(rate =>{
            rate.classList.remove('active');
        });

        // add active class
        rate.classList.add('active');
        
        // Get value of dataset
        selectedRate = rate.dataset.rate;
        result.innerText = selectedRate;
    });
});

btn.addEventListener('click', function(e){
    rating.classList.toggle('opac');

    setTimeout(() => {
        thank.classList.toggle('appear');
    }, 400);
})