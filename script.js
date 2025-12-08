const imgFolder = "psalm_assets/";

// Helper: get day-of-year (1 = Jan 1)
function getDayOfYear(d = new Date()) {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d - start;
  const oneDay = 86400000;
  return Math.floor(diff / oneDay); // 1–366
}

const today = new Date();
const dayOfYear = getDayOfYear(today);
const year = today.getFullYear();

// Same perfect shuffling every year
const index = (dayOfYear - 1 + year * 23) % 171; // 0–170

// Clean display number (1 through 171, no leading zeros)
const displayNumber = index + 1;

document.getElementById("art-number").textContent = displayNumber;
document.getElementById("date-today").textContent = today.toLocaleDateString(undefined, {
  month: "long",
  day: "numeric",
  year: "numeric"
});

// Load the correct zero-padded image
const img = document.createElement("img");
img.src = `${imgFolder}psalm_${String(index).padStart(3, "0")}.jpg`;
img.alt = `Psalm artwork ${displayNumber}`;
img.loading = "lazy";
document.getElementById("daily-art").appendChild(img);