// Inicializa EmailJS e gerencia envio do formulário de contato
emailjs.init("qna299-pLR4jWP5p6");

const form = document.querySelector(".contact-form form");
const button = form.querySelector(".submit-btn");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    button.disabled = true;
    button.textContent = "Enviando...";

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    await emailjs.send("service_pifn8vn", "template_4354z7l", templateParams);

    button.textContent = "Enviado!";
    form.reset();

    setTimeout(() => {
        button.disabled = false;
        button.textContent = "Enviar";
    }, 3000);
});
