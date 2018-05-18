$('#inic').on('click', function (e) {
    console.log(e);
	window.location.href = 'View/Usuario/usuario.html';
});

$('#registrar').on('click', function (e) {
    console.log(e);
	window.location.href = 'view/Registro/registrar.html';
});

$('.campo').on('click', function (e) {
    console.log('maquina');
    $(this).css("font-family", "dubai");
    $(this).css("font-weight", "600");
});
