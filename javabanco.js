document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Obtém os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var congregation = document.getElementById('congregation').value;
    var phone = document.getElementById('phone').value;

    // Cria um objeto para representar as informações do usuário
    var userInfo = {
        name: name,
        congregation: congregation,
        phone: phone
    };

    // Armazena as informações localmente (pode ser no armazenamento local do navegador)
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    // Lógica após o recebimento dos dados
    // Aqui você pode adicionar uma mensagem de sucesso ou redirecionar o usuário para outra página, por exemplo
    alert("Informações recebidas com sucesso!");

    // Limpa o formulário após o envio
    document.getElementById('infoForm').reset();
});
