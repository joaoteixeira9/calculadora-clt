function fnHorasExtras(salario, horastrabalhadas, cargahoraria) {
    let horasextras = 0
    if(horastrabalhadas > cargahoraria){
        horasextras = (horastrabalhadas - cargahoraria) * salario
    }

    return horasextras
}

function fnFormatarMonetario(valor){
    console.log(valor)
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

document.getElementById('bt-calcular').addEventListener('click', function(){
    
    let salario = $('#salario').val()
    
    let horastrabalhadas = $('#horas-trabalhadas').val()
    
    let cargahoraria = $('#carga-horaria').val()
    

    let horasextras = fnHorasExtras(salario, horastrabalhadas, cargahoraria)
    $('#resposta').html(fnFormatarMonetario(horasextras))
})