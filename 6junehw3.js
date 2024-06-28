const bold = document.querySelector("#bold");
const underline = document.querySelector("#underline");
const italic = document.querySelector("#italic");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const justify = document.querySelector("#justify");
const textarea = document.querySelector("#add-text");
const btn = document.querySelector("button");
const result = document.querySelector(".result");
const text = document.querySelector("#text");

btn.addEventListener("click", () => {
    text.innerText = textarea.value
    if (bold.checked) {
        text.style.fontWeight = 'bold';
    }
    else {
        text.style.fontWeight = 'normal';
    }
    if (underline.checked) {
        text.style.textDecoration = 'underline';
    }
    else {
        text.style.textDecoration = 'none';
    }
    if (italic.checked) {
        text.style.fontStyle = 'italic';
    }
    else {
        text.style.fontStyle = 'normal';
    }
    if (left.checked) {
        text.style.textAlign = 'left';
    }
    else if (right.checked) {
        text.style.textAlign = 'right';
    }
    else if (center.checked) {
        text.style.textAlign = 'center';
    }
    else {
        alert("Choose right, left or center")
        return
    }
    result.style.display = 'flex';
})
