const billTotalInput = document.getElementById('billTotal');
const tipPercentageInput = document.getElementById('tipPercentage');
const tipAmountInput = document.getElementById('tipAmount');
const totalWithTipInput = document.getElementById('totalWithTip');
const tipCalculatorForm = document.getElementById('tipCalculatorForm');

tipCalculatorForm.addEventListener('input', calculateTip);

function calculateTip() {
    const billTotal = parseFloat(billTotalInput.value);
    const tipPercentage = tipPercentageInput.value;
    const tipAmount = (billTotal * tipPercentage) / 100;
    const totalWithTip = billTotal + tipAmount;

    if (!isNaN(billTotal)) {
        tipAmountInput.value = tipAmount.toFixed(2);
        totalWithTipInput.value = totalWithTip.toFixed(2);
    } else {
        tipAmountInput.value = '';
        totalWithTipInput.value = '';
    }
}

calculateTip();
