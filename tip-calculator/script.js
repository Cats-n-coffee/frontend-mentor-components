const billAmount = document.getElementById('bill-amount');
const selectedTip = document.querySelector('.tip-amount-selection');
const numberPeople = document.getElementById('number-of-people');

class TipCalculator {
    constructor() {
        this.bill = 0;
        this.tip = 0;
        this.people = 0;
        this.resultTipAmount = document.getElementById('result-tip-amount');
        this.resultTotal = document.getElementById('result-total'); 
        this.resetButton = document.querySelector('.reset-button'); 
    }

    getBillAmount(amount) {
        this.bill = parseFloat(amount)
        this.calculateTip();
        if (this.bill > 0) {
            this.disableReset();
        }
    }

    getNumberPeople(people) {
        this.people = parseInt(people);
        console.log(this.people)
        this.calculateTip();
    }

    getSelectedTip(tip) {
        this.tip = parseFloat(tip);
        console.log('new',this.tip);
        this.calculateTip();
    }

    calculateTip() {
        let grandTotal = (this.bill * (this.tip / 100)) + this.bill;
        this.resultTotal.value = '$' + grandTotal;

        if (this.people) {
            let splitTotal = grandTotal / this.people;
            this.resultTipAmount.value = '$' + splitTotal.toFixed(2);
        }
    }

    disableReset() {
        this.resetButton.disabled = false;
        this.resetButton.addEventListener('click', () => {
            this.resetAll()
        })
    }

    resetAll() {
        this.bill = 0;
        this.tip = 0;
        this.people = 0;
        this.resultTotal.value = '';
        this.resultTipAmount.value = '';
        selectedTip.querySelector('#tip-self-input').value = '';
        billAmount.value = '';
        numberPeople.value = ''; 
    }
}

const calc = new TipCalculator();

billAmount.addEventListener('keyup', () => {
    calc.getBillAmount(billAmount.value)
})

selectedTip.addEventListener('click', (e) => {
    if (e.target.dataset.tipAmount) {
        selectedTip.querySelector('#tip-self-input').value = '';
        calc.getSelectedTip(e.target.dataset.tipAmount)
    }
    else if (e.target.id === "tip-self-input") {
        e.target.addEventListener('keyup', (e) => {
            calc.getSelectedTip(e.target.value)
        })
    }
})

numberPeople.addEventListener('keyup', () => {
    calc.getNumberPeople(numberPeople.value)
})

