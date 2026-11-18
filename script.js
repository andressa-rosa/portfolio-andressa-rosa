
// Formulário 
const formulario = document.getElementById("formulario-contato");
const retorno = document.getElementById("retorno");

// Verificação dos campos preenchidos
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        retorno.textContent = "Por favor, preencha todos os campos";
        retorno.className = "erro";
        return;
    }

 // Verificação do formato de e-mail
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {
        retorno.textContent = "Digite um formato de e-mail válido";
        retorno.className = "erro";
        return;
    }

// Mensagem de envio
    retorno.textContent = "Mensagem enviada com sucesso!";
    retorno.className = "sucesso";


    formulario.reset();
});

//Tema claro/escuro
const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro");
});

// Rolagem devagar
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(event) {
        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            event.preventDefault();

            destino.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });
});