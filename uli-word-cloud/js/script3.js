const dragingDiv = document.querySelector("#dragingDiv");
let isDragging = false;

dragingDiv.addEventListener("mousedown", (e) => {
    isDragging = true;
});

let width = parseInt(dragingDiv.style.width)
let height = parseInt(dragingDiv.style.height)
// console.log(height/2);
// console.log(width/2)

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        dragingDiv.style.position = "absolute";
        const x = e.clientX;
        const y = e.clientY;
        dragingDiv.style.left = `${x - width / 2}px`;
        dragingDiv.style.top = `${y - width / 2}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});
