const billTotalField = document.getElementById('billTotal');
const tipPercentageInput = document.getElementById('tipPercentage');
const tipAmountField = document.getElementById('tipAmount');
const totalWithTipField = document.getElementById('totalWithTip');
const tipCalculatorForm = document.getElementById('tipCalculatorForm');

tipCalculatorForm.addEventListener('input', calculateTip);

function calculateTipAmount() {
    const billTotal = parseFloat(billTotalField.value);
    const tipPercentage = tipPercentageField.value;
    const tipAmount = (billTotal * tipPercentage) / 100;
    const totalWithTip = billTotal + tipAmount;

    if (!isNaN(billTotal)) {
        tipAmountField.value = tipAmount.toFixed(2);
        totalWithTipFiled.value = totalWithTip.toFixed(2);
    } else {
        tipAmountField.value = '';
        totalWithTipField.value = '';
    }
}

calculateTip();