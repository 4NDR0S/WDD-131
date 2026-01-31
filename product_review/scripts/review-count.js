let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);

document.querySelector("#counter").textContent = count;





// año actual
document.getElementById("currentyear").textContent = new Date().getFullYear();

// fecha de modificación
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
