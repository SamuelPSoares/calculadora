

function operacaoMatematica (codigo)
{
    var num1 = document.getElementById('primeiroNumero').value
    var num2 = document.getElementById('segundoNumero').value

    var resultadoElement = document.getElementById('resultado')

    if (isNaN(num1) && isNaN(num2)) {
        resultadoElement.value = 'Erro'
        return
    }

    var resultado = ''

    if(codigo == 1)
    {
        //
    }
    else if(codigo == 2)
    {
        //
    }
    else if(codigo == 3)
    {
        //
    }
    else if(codigo == 4)
    {
        resultado = num1 * num2
    }

    resultadoElement.value = resultado
}