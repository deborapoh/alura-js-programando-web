                                        //se não colocar nada na frente, reconhece como uma tag
                                        //se colocar o # na frente, reconhece como um id
var botao = document.querySelector('#adicionar-paciente');

botao.addEventListener('click', function(event) {

    event.preventDefault(); //impede o comportamento padrão

    //selecionar o que tá nos campos
    var campoNome = document.querySelector('#campo-nome');
    var campoPeso = document.querySelector('#campo-peso');
    var campoAltura = document.querySelector('#campo-altura');
    
    var pacienteNovo = "<tr class='paciente'>" + 
						"<td class='info-nome'>" + campoNome.value + "</td>" +
						"<td class='info-peso'>" + campoPeso.value + "</td>" +
						"<td class='info-altura'>" + campoAltura.value + "</td>" +
						"<td class='info-imc'>" + campoPeso.value / (campoAltura.value * campoAltura.value) + "</td>" + 
					"</tr>"

    //document.querySelectorAll(''); para selecionar um array
    // var tabela = document.getElementsByTagName('table')[0];
    //ou
    var tabela = document.querySelector('table');
    //textContent para texto e innerHTML para html
    tabela.innerHTML = tabela.innerHTML + pacienteNovo;

    //apagar os campos após serem gravados
    campoNome.value = "";
    campoPeso.value = "";
    campoAltura.value = "";

});


//uma tag dentro da tag form, fica com o comportamente de submeter um formulário, o que faz com que a página recarregue