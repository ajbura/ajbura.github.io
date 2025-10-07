function setCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("-aj-copyright-year");

    if (yearElement) {
        yearElement.textContent = currentYear;
    }
}

function main() {
    setCopyrightYear();
}

main();
