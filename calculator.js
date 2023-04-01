document.getElementById("roi-calculator").addEventListener("submit", function(event) {
    event.preventDefault();

    const annualRent = parseFloat(document.getElementById("annual-rent").value);
    const currentExpenses = parseFloat(document.getElementById("current-expenses").value);
    const softwareCost = parseFloat(document.getElementById("software-cost").value);

    const savings = currentExpenses * 0.5; // Assuming your software can save 50% of property management expenses
    const netIncome = annualRent - (currentExpenses - savings) - softwareCost;
    const roi = (netIncome / softwareCost) * 100;

    document.getElementById("roi-result").innerText = `Estimated ROI: ${roi.toFixed(2)}%`;
});
