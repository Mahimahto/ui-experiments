let container = document.getElementById("container")
let words = ["Apple", "Mango", "Orange", "Banana", "Apple",
    "Mango", "Orange", "Banana", "Apple", "Mango", "Orange",
    "Banana", "Apple", "Mango", "Orange", "Banana", "Apple",
    "Mango", "Orange", "Banana", "Apple", "Mango", "Orange",
    "Banana", "Apple", "Mango", "Orange", "Banana", "Apple",
    "Mango", "Orange", "Banana", "Apple", "Mango", "Orange", "Banana", "Apple", "Mango", "Orange", "Banana"]
// console.log(words)
for (let i = 0; i < words.length; i++) {

    let textDiv = document.createElement("div")
    //    console.log(textDiv)
    let word = document.createElement("p")
    //   console.log(words[i]);
    word.textContent = words[i]
    //  console.log(word);
    textDiv.append(word)
    //  console.log(textDiv)
    container.appendChild(textDiv)
}


// let textDiv = document.querySelector("div")
// textDiv.addEventlistener("mousemove", (e) => {
//    const X = e.clientX;
//   const Y = e.clientY;
//   textDiv.style.left = `${X - 25}px`; // 
//   textDiv.style.top = `${Y- 25}px`
//  console.log("Hello")
// })

let textDiv = document.getElementById("div");
let isDragging = false;
let offsetX, offsetY
container.addEventListener("mousedown", (e) => {  //start dragging 
    isDragging = true;
    offsetX = e.clientX - container.offsetLeft
    offsetY = e.clientY - container.offsetTop
    container.style.cursor = 'dragging'

    container.addEventListener("mousemove", (e) => { // move container while the mouse help down
        if (isDragging) {
            const X = e.clientX;
            const Y = e.clientY;
            container.style.left = `${X - offsetX}px`; // change position of div
            container.style.top = `${Y - offsetY}px`
            // console.log("Hello")

            container.addEventListener("mouseup", () => { //end dragging
                isDragging = false;
                container.style.cursor = 'pointer'
            })
        }
    })

})


