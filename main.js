

function operacaoMatematica (codigo)
{
    var num1 = document.getElementById("primeiroNumero").value;
    var num2 = document.getElementById("segundoNumero").value;

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
        if(num2 == 0)
        {
            alert("Tira esse Zero dae");
        }
        
        var resp = num1/num2;
        document.getElementById("resultado").value = resp;

    }
    else if(codigo == 4)
    {
        //
    }
}