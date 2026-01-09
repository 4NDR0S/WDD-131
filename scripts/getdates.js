// año actual
document.getElementById("currentyear").textContent = new Date().getFullYear();

// fecha de modificación
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// dongle switch
const themeToggle = document.getElementById("themeToggle");
const main = document.querySelector("main");
const icon = themeToggle.querySelector(".icon");

themeToggle.addEventListener("click", () => {
    main.classList.toggle("dark");
    themeToggle.classList.toggle("dark");

    if (main.classList.contains("dark")) {
        icon.textContent = "🌙";
    } else {
        icon.textContent = "☀️";
    }
});
