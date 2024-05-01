document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value.trim();
  var congregation = document.getElementById('congregation').value.trim();
  var phone = document.getElementById('phone').value.trim();

  var errors = false;

  // Verifica se o nome está vazio
  if (name === '') {
    document.getElementById('nameError').textContent = 'O nome do convidado é obrigatório.';
    errors = true;
  } else {
    document.getElementById('nameError').textContent = '';
  }

  // Verifica se a congregação está vazia
  if (congregation === '') {
    document.getElementById('congregationError').textContent = 'A congregação é obrigatória.';
    errors = true;
  } else {
    document.getElementById('congregationError').textContent = '';
  }

  // Se não houver erros, cadastra o usuário
  if (!errors) {
    var user = {
      name: name,
      congregation: congregation,
      phone: phone
    };

    // Aqui você pode enviar os dados do usuário para onde precisar
    console.log('Novo usuário:', user);

    // Resetando os campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('congregation').value = '';
    document.getElementById('phone').value = '';

    // Exibindo a mensagem de sucesso
    document.getElementById('successMessage').style.display = 'block';
  }
});
if (!errors) {
  var user = {
    name: name,
    congregation: congregation,
    phone: phone
  };

  // Armazena os dados no localStorage
  localStorage.setItem('userData', JSON.stringify(user));

  // Exibindo a mensagem de sucesso
  document.getElementById('successMessage').style.display = 'block';
}
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([data.name, data.congregation, data.phone]);

  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value.trim();
  var congregation = document.getElementById('congregation').value.trim();
  var phone = document.getElementById('phone').value.trim();

  var formData = {
    name: name,
    congregation: congregation,
    phone: phone
  };

  fetch('URL_DA_API', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('successMessage').style.display = 'block';
    } else {
      console.error('Erro ao enviar os dados:', response.statusText);
    }
  })
  .catch(error => {
    console.error('Erro ao enviar os dados:', error);
  });
});
<script>
  function redirectToUserData() {
    window.location.href = "dados_usuario.html"
  }
</script>
  