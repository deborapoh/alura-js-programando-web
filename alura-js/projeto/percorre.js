              //array de pacientes  função
function percorreArray(trPacientes, comportamento) {                        
    //percorrer o array
    for(var posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++){                    

        var pacienteTrAtual = trPacientes[posicaoAtual];                
        comportamento(pacienteTrAtual);                
    }                    
}