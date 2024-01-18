<script>
        function cadastrarCliente() 
            // Obter os valores do formulário
            var nome = document.getElementById('nome').value;
            var email = document.getElementById('email').value;
            var telefone = document.getElementById('telefone').value;

            // Validar se todos os campos foram preenchidos
            if (nome && email && telefone) {
                // Exibir os dados do cliente no console (você pode enviar para um servidor aqui)
                console.log('Cliente cadastrado:');
                console.log('Nome:', nome);
                console.log('E-mail:', email);
                console.log('Telefone:', telefone);

                // Limpar o formulário após o cadastro
                document.getElementById('cadastroForm').reset();
            } else {
                alert('Por favor, preencha todos os campos.');
            }

function validarCadastro() {
            // Obter os valores do formulário
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmPassword').value;

            // Validar se todos os campos foram preenchidos
            if (username && password && confirmPassword) {
                // Validar se as senhas coincidem
                if (password === confirmPassword) {
                    // Exibir os dados do usuário no console (você pode enviar para um servidor aqui)
                    console.log('Usuário cadastrado:');
                    console.log('Nome de Usuário:', username);
                    console.log('Senha:', password);

                    // Limpar o formulário após o cadastro
                    document.getElementById('cadastroForm').reset();
                } else {
                    alert('As senhas não coincidem. Por favor, digite novamente.');
                }
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        }
        
    </script>
