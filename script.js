function showMessage() {
    alert("Let's build something amazing together!");
}

// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

// Typing Animation
const text = ["Developer", "Designer", "Problem Solver"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        document.querySelector(".typing").innerHTML = currentText;

        if (j == text[i].length) isDeleting = true;
        if (j == 0) {
            isDeleting = false;
            i++;
        }

        setTimeout(type, 100);
    }
}

type();