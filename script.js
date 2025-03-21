//your JS code here. If required.
function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById("sizeText").textContent = `Width: ${width} and Height: ${height}`;
}

updateSize();

window.addEventListener("resize", updateSize);