

$('section#domingo-perfeito').waypoint(
    function(direcao){
        if(direcao == "down"){
            $('div.folha1').addClass('animate__animated animate__fadeInUp')
            $('div.folha3').addClass('animate__animated animate__fadeInUp')
            $('div.camarao').addClass('animate__animated animate__fadeInUp')
            $('div.tomate').addClass('animate__animated animate__fadeInUp')

        }
        if(direcao == "up"){

            $('div.folha1').removeClass('animate__animated animate__fadeInUp')
            $('div.folha3').removeClass('animate__animated animate__fadeInUp')
            $('div.camarao').addClass('animate__animated animate__fadeInUp')
            $('div.tomate').addClass('animate__animated animate__fadeInUp')
        }
    
    },{
       offset:'550px;'
    })

   
/*waypoint = detecta quando o usuário desce ou sobe o scroll 
$('section#domingo-perfeito').waypoint(function(direcao){
    /* se o valor que estiver dentro da variável(direção) direção
    for igual(==) a palavra down então({) 
        if(direcao == "down"){
            /*addClass = é a classe da biblioteca animate.css que queremos aplicar
            como efeito do elemento  
            $('div.folha1').addClass('animate__animated animate__fadeOutRight')
        }

        if(direcao == "up"){

        }

})

*/