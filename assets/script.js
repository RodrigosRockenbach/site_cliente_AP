$('#form-contato').submit(function(){
    var nome = $('#nome');
    var email = $('#email');
    var mensagem = $('#mensagem');
    var erro = $('.alert');
    var campo = $('#campo-erro');

    //Removendo o elemento da tela sempre que tentar submeter o formulario.
    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');


    //valida o campo nome
    if(nome.val() == '') {
        erro.removeClass('d-none');
        campo.html('nome');
        nome.focus();
        nome.addClass('is-invalid');

        return false;
    };

    //valida o campo email
    if(email.val() == '') {
        erro.removeClass('d-none');
        campo.html('email');
        email.focus();
        email.addClass('is-invalid');

        return false;
    };

    //valida o campo mensagem
    if(mensagem.val() == '') {
        erro.removeClass('d-none');
        campo.html('mensagem');
        mensagem.focus();
        mensagem.addClass('is-invalid');

        return false;
    };


    // se chegar aqui, enviar os dados!
    return true;
});

// Fazer a div oculta aparecer quando clicar no card
const toggleButtons = document.querySelectorAll('.toggleButton');
const hiddenDivs = document.querySelectorAll('.hiddenDiv');

toggleButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    if (hiddenDivs[index].classList.contains('hidden')) {
      hiddenDivs[index].classList.remove('hidden');
    } else {
      hiddenDivs[index].classList.add('hidden');
    }
  });
});