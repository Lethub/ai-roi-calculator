document.addEventListener("DOMContentLoaded", function () {
    const roiCalculatorForm = document.getElementById("roi-calculator");
    const roiResult = document.getElementById("roi-result");

    roiCalculatorForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const annualRent = parseFloat(document.getElementById("annual-rent").value);
        const currentExpenses = parseFloat(document.getElementById("current-expenses").value);
        const softwareCost = parseFloat(document.getElementById("software-cost").value);

        const roi = calculateROI(annualRent, currentExpenses, softwareCost);

        roiResult.textContent = `The ROI of the AI leasing software is ${roi.toFixed(2)}%.`;
    });

    function calculateROI(annualRent, currentExpenses, softwareCost) {
        const netIncomeBeforeSoftware = annualRent - currentExpenses;
        const netIncomeAfterSoftware = annualRent - (currentExpenses + softwareCost);

        const roi = (netIncomeAfterSoftware / netIncomeBeforeSoftware) * 100;

        return roi;
    }
});
