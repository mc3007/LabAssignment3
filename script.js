const totalBillInput = document.getElementById('totalBill');
const tipPercentageInput = document.getElementById('tipPercentage');
const tipAmountInput = document.getElementById('tipAmount');
const totalWithTipInput = document.getElementById('totalWithTip');
const tipCalculatorForm = document.getElementById('tipCalculatorForm');

tipCalculatorForm.addEventListener('input', calculateTip);

function calculateTip() {
    const totalBill = parseFloat(totalBillInput.value);
    const tipPercentage = tipPercentageInput.value;
    const tipAmount = (totalBill * tipPercentage) / 100;
    const totalWithTip = totalBill + tipAmount;

    if (!isNaN(totalBill)) {
        tipAmountInput.value = tipAmount.toFixed(2);
        totalWithTipInput.value = totalWithTip.toFixed(2);
    } else {
        tipAmountInput.value = '';
        totalWithTipInput.value = '';
    }
}

calculateTip();
