function subscribe() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (email) {
        // Aqui você pode adicionar a lógica para enviar o email para o servidor, se necessário.
        alert(`Obrigado por se inscrever, ${email}! Você receberá novidades em breve.`);
        emailInput.value = ''; // Limpa o campo após a inscrição
    } else {
        alert('Por favor, insira um email válido.');
    }
}
