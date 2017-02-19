function montaPaciente(pacienteTr){                        

    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];                         
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];                         
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];                        

    var paciente = {                         
        nome : tdNome.textContent,                         
        peso : tdPeso.textContent,                         
        altura : tdAltura.textContent,                        
        pegaImc: function() {                        

            if(this.altura != 0){                        
                var imc = this.peso / (this.altura * this.altura);                        
                return imc;                        
            } else{                        

                console("Não posso dividir por zero!");                        
            }                        
        }                        
    };                
    return paciente;                       
}

var trsPacientes = document.getElementsByClassName("paciente");

for(var posicaoAtual = 0; posicaoAtual < trsPacientes.length; posicaoAtual++){

    var pacienteTr = trsPacientes[posicaoAtual];

    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
    var pacienteAtual = montaPaciente(pacienteTr); //aqui chamamos a nova função

    var imc = pacienteAtual.pegaImc();
    tdImc.textContent = imc;

    console.log(imc); 
}