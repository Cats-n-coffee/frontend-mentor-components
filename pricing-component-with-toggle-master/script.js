const checkbox = document.getElementById('checkbox');
const basicPrice = document.getElementById('basic-price');
const proPrice = document.getElementById('professional-price');
const masterPrice = document.getElementById('master-price');

checkbox.addEventListener('click', displayPrices);

function displayPrices() {
    if (checkbox.checked) {
        console.log('checked');
        basicPrice.innerHTML = '<span>&dollar;</span>19.99';
        proPrice.innerHTML = '<span>&dollar;</span>24.99';
        masterPrice.innerHTML = '<span>&dollar;</span>39.99';
    }
    else {
        console.log('unchecked');
        basicPrice.innerHTML = '<span>&dollar;</span>199.99';
        proPrice.innerHTML = '<span>&dollar;</span>249.99';
        masterPrice.innerHTML = '<span>&dollar;</span>399.99';
    }
}
