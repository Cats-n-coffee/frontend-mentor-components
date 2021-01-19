const checkbox = document.getElementById('checkbox');
const basicPrice = document.getElementById('basic-price');
const proPrice = document.getElementById('professional-price');
const masterPrice = document.getElementById('master-price');

checkbox.addEventListener('click', displayPrices);

function displayPrices() {
    if (checkbox.checked) {
        console.log('checked');
        basicPrice.innerText = '$19.99';
        proPrice.innerText = '$24.99';
        masterPrice.innerText = '$39.99';
    }
    else {
        console.log('unchecked');
        basicPrice.innerText = '$199.99';
        proPrice.innerText = '$249.99';
        masterPrice.innerText = '$399.99';
    }
}
