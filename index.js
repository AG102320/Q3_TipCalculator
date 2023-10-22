document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    const subtotalInput = document.getElementById("subtotal");
    const tipPercentageInput = document.getElementById("tipPercentage");
    const result = document.getElementById("result");
    const totalAmount = document.getElementById("totalAmount");

    calculateButton.addEventListener("click", function() {
        const subtotal = parseFloat(subtotalInput.value);
        const tipPercentage = parseFloat(tipPercentageInput.value);

        
        if (subtotal === subtotal && tipPercentage === tipPercentage) {
            const tipAmount = (subtotal * tipPercentage) / 100;
            const total = subtotal + tipAmount;
            result.textContent = total.toFixed(2);
            totalAmount.classList.remove("hidden");
        } else {
            alert("Please enter valid numbers for subtotal and tip percentage.");
        }
    });
});
