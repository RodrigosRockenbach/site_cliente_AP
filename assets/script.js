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

//Div Oculta no Html 
const oculto = document.querySelector("#divOculta");

function showMore() {
    if(oculto.style.display === 'block') {
      oculto.style.display = 'none';
    } else{
      oculto.style.display = 'block';
    }
}

