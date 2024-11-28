const dragingDiv = document.querySelector("#dragingDiv");
const categoryDivs = document.querySelectorAll(".category");

let isDragging = false;

dragingDiv.addEventListener("mousedown", (e) => {
    isDragging = true;
});

let width = parseInt(dragingDiv.style.width);
let height = parseInt(dragingDiv.style.height);

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        dragingDiv.style.position = "absolute";
        const x = e.clientX;
        const y = e.clientY;

        dragingDiv.style.left = `${x - width / 2}px`;
        dragingDiv.style.top = `${y - height / 2}px`;

        categoryDivs.forEach(categoryDiv => {
            const categoryRect = categoryDiv.getBoundingClientRect();
            const draggingRect = dragingDiv.getBoundingClientRect();
            const isOverlap = !(
                draggingRect.right < categoryRect.left ||
                draggingRect.left > categoryRect.right ||
                draggingRect.bottom < categoryRect.top ||
                draggingRect.top > categoryRect.bottom
            );

            if (categoryDiv && dragingDiv) {
                if (isOverlap) {
                    console.log("Overlap detected with categoryDiv:", categoryDiv);
                    categoryDiv.style.backgroundColor = "yellow";
                    categoryDiv.appendChild(dragingDiv);
                    categoryDiv.style.position = "relative"; 
                    dragingDiv.style.position = "absolute"; 
                    dragingDiv.style.top = "50%"; 
                    dragingDiv.style.left = "50%";
                    categoryDiv.appendChild(dragingDiv);
                } else {
                    categoryDiv.style.backgroundColor = "";
                    if (categoryDiv.contains(dragingDiv) ){
                        categoryDiv.removeChild(dragingDiv);
                    }                    
                }
            }
            
        });
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});
