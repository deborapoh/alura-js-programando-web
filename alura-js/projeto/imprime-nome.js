//array de pacientes
var trsPacientes = document.getElementsByClassName("paciente");                        

//chama a função para percorrer o array de pacientes recebendo como parâmetro o array e o comportamento de imprimir o nome
percorreArray(trsPacientes, imprimeNome);                        

//função para imprimir o nome dos pacientes do array
function imprimeNome(pacienteTr) {                        

    //atribui o nome, peso e altura dos pacientes às respectivas variáveis
    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];                         
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];                         
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];                        

    //cria um objeto do tipo paciente com os atributos nome, peso e altura
    var pacienteAtual = {                         
        nome : tdNome.textContent,                         
        peso : tdPeso.textContent,                         
        altura : tdAltura.textContent,
        //dentro do próprio objeto chama a função para calcular o imc                        
        pegaImc: function() {                        
            if(this.altura != 0){                        
                var imc = this.peso / (this.altura * this.altura);                        
                return imc;                        
            } else{                        

                console("Não posso dividir por zero!");                        
            }                        
        }                        
    };
    //imprime no console os nomes dos pacientes
    console.log(pacienteAtual.nome);                         
}

