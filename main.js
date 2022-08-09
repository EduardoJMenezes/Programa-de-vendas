//variáveis
let somaCheeseBurguer = 0;
let somaCheeseBacon = 0;
let somaCheeseEgg = 0;
let vendaCheeseBurguer = 0.00;
let vendaCheeseBacon = 0.00;
let vendaCheeseEgg = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//eventos
btnVendas.addEventListener('click', venda, false);
btnEstorno.addEventListener('click', estorno, false);
btnPlanilha.addEventListener('click', planilha, false);

//funções
function venda(e)
{
    if(document.getElementById('CheeseBurguer').checked)
    {
        somaCheeseBurguer += 1;
        vendaCheeseBurguer += 5;
        document.getElementById('resultadoCheeseBurguer').innerHTML = somaCheeseBurguer;
        document.getElementById('vendaCheeseBurguer').innerHTML = vendaCheeseBurguer.toFixed(2);

    }else if(document.getElementById('CheeseBacon').checked)
    {
        somaCheeseBacon += 1;
        vendaCheeseBacon += 8;
        document.getElementById('resultadoCheeseBacon').innerHTML = somaCheeseBacon;
        document.getElementById('vendaCheeseBacon').innerHTML = vendaCheeseBacon.toFixed(2);

    }else if(document.getElementById('CheeseEgg').checked)
    {
        somaCheeseEgg += 1;
        vendaCheeseEgg += 8;
        document.getElementById('resultadoCheeseEgg').innerHTML = somaCheeseEgg;
        document.getElementById('vendaCheeseEgg').innerHTML = vendaCheeseEgg.toFixed(2);
    }
}

function estorno(e)
{
    if(document.getElementById('CheeseBurguer').checked)
    {
        somaCheeseBurguer -= 1;
        vendaCheeseBurguer -= 5;
        if(somaCheeseBurguer < 0)
        {
            somaCheeseBurguer = 0;
            vendaCheeseBurguer = 0;

        }
        document.getElementById('resultadoCheeseBurguer').innerHTML = somaCheeseBurguer;
        document.getElementById('vendaCheeseBurguer').innerHTML = vendaCheeseBurguer.toFixed(2);

    }else if(document.getElementById('CheeseBacon').checked)
    {
        somaCheeseBacon -= 1;
        vendaCheeseBacon -= 8;
        if(somaCheeseBacon < 0)
        {
            somaCheeseBacon = 0;
            vendaCheeseBacon = 0;

        }
        document.getElementById('resultadoCheeseBacon').innerHTML = somaCheeseBacon;
        document.getElementById('vendaCheeseBacon').innerHTML = vendaCheeseBacon.toFixed(2);

    }else if(document.getElementById('CheeseEgg').checked)
    {
        somaCheeseEgg -= 1;
        vendaCheeseEgg -= 8;
        if(somaCheeseEgg < 0)
        {
            somaCheeseEgg = 0;
            vendaCheeseEgg = 0;

        }
        document.getElementById('resultadoCheeseEgg').innerHTML = somaCheeseEgg;
        document.getElementById('vendaCheeseEgg').innerHTML = vendaCheeseEgg.toFixed(2);
    }
}

function planilha(e)
{
    TableToExcel.convert(document.getElementById('table'));
}