const switcher = document.getElementById("themeSwitcher");

switcher.addEventListener("change", () => {
    document.body.className = switcher.value;
});