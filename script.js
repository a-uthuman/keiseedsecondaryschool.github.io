// MENU
function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 4000);

// CHAT
function openChat() {
    document.getElementById("chatBox").style.display = "block";
}

function closeChat() {
    document.getElementById("chatBox").style.display = "none";
}

function sendMessage(e) {
    if (e.key === "Enter") {
        const input = document.getElementById("userInput");
        const chat = document.getElementById("chatBody");
        let msg = input.value.toLowerCase();

        chat.innerHTML += `<p>${input.value}</p>`;

        let reply = "Please contact the school office for more details.";

        if (msg.includes("admission")) {
            reply = "Admissions are open for S1–S4. Visit the school with report card.";
        }
        if (msg.includes("fees")) {
            reply = "Fees depend on class and boarding status. Call +256 782 875 082.";
        }

        chat.innerHTML += `<p class="bot">${reply}</p>`;
        input.value = "";
        chat.scrollTop = chat.scrollHeight;
    }
}