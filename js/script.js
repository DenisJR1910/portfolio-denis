// FUNÇÃO DO FORMULÁRIO

function enviarFormulario() {

    // PEGAR VALORES DOS CAMPOS
    let nome = document.getElementById("nome").value;

    let email = document.getElementById("email").value;

    let mensagem = document.getElementById("mensagem").value;

    // VERIFICAR CAMPOS VAZIOS
    if (nome === "" || email === "" || mensagem === "") {

        alert("Preencha todos os campos!");

        return;
    }

    // VALIDAR E-MAIL
    if (!email.includes("@")) {

        alert("Digite um e-mail válido!");

        return;
    }

    // MENSAGEM SUCESSO
    alert("Mensagem enviada com sucesso!");

    // LIMPAR FORMULÁRIO
    document.getElementById("formulario").reset();
}