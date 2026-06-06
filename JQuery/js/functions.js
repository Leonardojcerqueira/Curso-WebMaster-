

/*
$(document).ready(function(){
   alert("Olá mundo!");
})

$(function(){
  alert("Olá mundo!")
})

$(window).on('load',function(){
    alert("Olá mundo");
})
*/

$(function(){
/*
    //var timer;

    
    function validarCliqueHover(){

        $('.artigo1').click(function(){
            $('.artigo2').css('background-color','purple');
        });

        $('.artigo1').hover(function(){
            $('.artigo2').css('background-color','red');
        },function(){
            $('.artigo2').css('background-color','rgb(100, 100, 100)');
        });
    }

    function validarFormulario(){

        $('textarea').focus(function(){
            console.log("Foco!");
        }).blur(function(){
            console.log("retiramos o foco!");
        });

        $('select').change(function(){
            console.log('meu select foi alterado!');
        });
    }

    validarFormulario();
    validarCliqueHover();
    */
    /*
    $(window).scroll(function(){
        // Evento quando o scroll ocorre
    });

    $(window).resize(function(){

        clearTimeout(timer);

        timer = setTimeout(function(){
            location.href = "https://www.google.com";
        },1000);

    });

    $('a').click(function(e){
        //e.preventDefault();
    
    });

    $('.box').click(function(e){
        e.stopPropagation();
    })

    $('body').click(function(){
      $('.box').css('opacity', '0.1');
    })
    */
/*
    var el = $('div.box');

    el.css('background-color', 'green');

    function text(){
        el.css('colo','red');
    }

    Teste();
*/
/*
   //var elWidth = ($('.box').width());

   //Pegamos a largura do nosso elemento.
   $('.box').width('900');

   //Setamos a largura.
   $('.box').css('width','900px');

   //width/height = Dimensão calculada total com base no padding.
   //innerWidth/innerHeight = Dimensão  calculada total INCLUINDO o padding.
   //outerWidth/outerHeight = Dimensão calculada total INCLUINDO o padding e margin(se o parametro for true).

   console.log("Width: "+$('.box').width());
   console.log("InnerWidth: "+$('.box').innerWidth());
   console.log("outerWidth: "+$('.box').outerWidth(true));

   console.log("height: "+$('.box').height());
   console.log("Inner height: "+$('.box').innerHeight());
   console.log("outer height: "+$('.box').outerHeight(true));
*/

/*
    var el = $('.box');

    var meutexto = 'olá mundo!';
    el.html("<div class=\"teste\">"+meutexto+"</div>");
    el.html(el.html() + '<h1 class="texto1">Meu texto via javascript!</h1>');

    $('.box2').text("<div></div>");
    $('.box2').text($('.box2').text() + "Olá mundo!");

    $('input[type=text]').val("Olá Mundo!");
    $('textarea').val("Olá Mundo!");
*/
/*
    $('input[type=button]').click(function(){
     var str = $('input[type=text]').val();
     //split separa  nossa string  com base no delimitador
     //var var2 = v.split("@");
     //console.log(var2);

     //substr recorta nossa string
     //console.log(str.substr(1,4));

/*
     var splitstr = str.split("@");

     if(splitstr[1] == 'hotmail.com'){
        $('input[type=text]').css('opacity','0');
     }else{
        console.log("A condição não bateu");
     }

    console.log(str);
    })
*/
   // Funcão append() para adicionar conteúdo/elementos no final do elemento selecionado
   // $('.box div').eq(0).append('<h3>Meu elemento adicionado dinamicamente')

   //var el = $('<h>Meu conteúdo</h3>').appendTo($('.box'));

   //el.css('color','red');

   //$('.box').prepend('<h3>Olá mundo</h3>');

   //var el = $('<h>Meu conteúdo</h3>').prependTo($('.box')).css('color','red');

    //var t = '<p>Meu Conteúdo após a div box</p>';
    // $('.box').after(t);

    //$('.box').before(t);

    //$(t).insertAfter($('.box')).css('color','red');
    //$(t).insertBefore($('.box')).css('color','red');
/*
    setTimeout(function(){
    $('.box').eq(1).remove();
    },3000);
*/
/*
  $('a').click(function(){
    $('.teste').css('display','block');
    return false;
  })
*/

/*  
     $('a').click(function(){
      alert('Olá mundo!')
    });

    $('body').on('click','a',function(){
        alert('Olá mundo!');
        return false;
    });

    setTimeout(function(){
        $('body').html('<a href="">Meu link!</a>');
    },3000)
*/
/*
   var func = function(){
    $('input[type=text]').eq($(this).index()).css('background','green');
   }

  $('input[type=text]').keyup(func);

  $('input[type=text]').keydown(func);
*/
  
/*
$('.form_contato').submit(function(){
    
    var container = $('.container');
    var content = 'Nome: ' + $('input[name=nome]').val() +
    '<hr>E-mail: ' + $('input[name=email]').val() +
    '<hr>Telefone' + $('input[name=telefone]').val();

    container.html(content);

    return false;
})
*/
/*
$('.box1').fadeOut(2000,function(){
    $('.box2').fadeIn(1000,function(){
        console.log("Terminamos noss animação!")
    })
});
*/
/*
   var timer;
   var timeOut = function(){
    $('.box2').animate({
   'width':'40%',
   'height': '500px',
   'marginLeft': '100px',
   'paddingTop': '200px'
   },2000);
}

$('body').click(function(){
    alert("Animação com timeout foi cancelada");
    clearTimeout(timer);
})

  $('.box1').animate({
   'width':'40%',
   'height': '500px',
   'marginLeft': '100px',
   'paddingTop': '200px'
},2000,function(){
    timer = setTimeout(timeOut,3000);
});
*/
/*
var timer;

 $('body').click(function(){
    console.log("Intervalo cancelado");
    clearInterval(timer);
 })
 
timer = setInterval(function(){
    alert('Olá mundo');

},3000);
*/
/*
   $('.box1').addClass('minhaclasse');

   //$('.minhaclasse').remove();

   $('.box1').removeClass('minhaclasse');

   $('.box1 > .child1 > .child2').css('color', 'purple');

    var el = $('.box1').find('.child1').find('.child2');

    el.css('color','green')

    $('minhatag').attr('meuattr','outrovalor');

    alert($('minhatag').attr('meuattr'));
*/
/*
   var el = $('#source .texto').clone();

   $('#source .texto').appendTo('#container');
*/
/*
  var frase = 'guilherme@homatil.com';

  var verifica = frase.match(/^(.*?)(@)(.*?)$/);

  if(verifica != null){
    console.log("Encontramos algo!")
    console.log(verifica[1]);
    console.log(verifica[2]);
    console.log(verifica[3]);
  }else{
    console.log("Nâo encontramos nada!");
  }
 */
/*
  //Funções da abrir e fechar o formulário
  abrirJanela();
  verificarCliqueFechar();

function abrirJanela(){
   $('.btn').click(function(e){
    e.stopPropagation();
    $('.bg').fadeIn();
   });
 }

 function verificarCliqueFechar(){
    var el = $('body, .closeBtn');

    el.click(function(){
        $('.bg').fadeOut();
    })

    $('.form').click(function(e){
        e.stopPropagation();
    })

 }

   //Eventos do formulário
   
$('input[type=text]').focus(function(){
    resetarCampoInvalido($(this));
});

$('form#form1').submit(function(e){

    //e.preventDefault();

    var nome = $('input[name=nome]').val();
    var telefone = $('input[name=telefone]').val();
    var email = $('input[name=email]').val();

    if(verificarNome(nome) == false){

        aplicarCampoInvalido($('input[name=nome]'));
        return false;

    }else if(verificarTelefone(telefone) == false){

        aplicarCampoInvalido($('input[name=telefone]'));
        return false;

    }else if(verificarEmail(email) == false){
        aplicarCampoInvalido($('input[name=email]'));
        return false;
    }else{
        alert("Formulário enviado com sucesso!");
    }

    // Se chegou até o final é porque está tudo ok!

});

  //Funções para estilizar o campo do Formulário

   function aplicarCampoInvalido(el){
        el.css('color','red')
        el.css('border','2px solid red');
        el.val('Campo Inválido!');
        //el.data('invalido','true');
   }

   function resetarCampoInvalido(el){
        el.css('color','#ccc')
        el.css('border','1px solid #ccc');
        el.val('');
   }

   //Funções para verificar nossos campos

      function verificarNome(nome){
    // Contando a quantidade de espaços e os respectivos valores
    if (nome == ' ') {
        return false;
    }
    var amount = nome.split(' ').length;
    var splitStr = nome.split(' ');
    if(amount >= 2){
        for(var i = 0; i < amount; i++){
            if(splitStr[i].match(/^[A-Z][a-z]+$/)){
                
            }else{
                return false;
            }

        }

    }else{
        return false;
    }
   }

   function verificarTelefone(telefone){
    if(telefone == ' '){

        return false;
    }


    if(telefone.match(/^\([0-9]{2}\)[0-9]{4,5}-[0-9]{4}$/) == null){
        return false;
    }

    }  

    function verificarEmail(email){
        if(email == '')
        return false;

        if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
        return false;
    }


    }
    */
/*
    verificarCliqueMenu();

    function verificarCliqueMenu(){
        $('a').click(function(){
            var href = $(this).attr('href');
            $.ajax({
                'beforeSend': function(){
                    console.log("Estamos Chamando o beforeSend")
                },
                'timeout': 100000,
                'url':href,
                'error': function(jqXHR,texteStatus,errorThrown){
                    if (jqXHR.statusText == 'Not Found'){
                        console.log("Página não encontrada")
                    }
                },
                'success': function(data){
                    //$('#container').html(data);
                    $('#container').html('');
                    $(data).appendTo('#container').fadeIn();
                }
                
            })
            return false;
        })
    }    
*/
//JS SOCIALS NÃO FUNCIONOU!!!
/*
$('#social').jsSocials({
    showLabel: false,
    showCount: false,
    shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
});
*/

//Plugin mask

$('input[name=Telefone]').mask('(99)99999-9999');
$('input[name=data]').mask('99/99/9999');

});
