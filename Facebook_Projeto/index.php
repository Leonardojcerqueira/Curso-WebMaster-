<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Open+Sans&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <title>Login Facebook</title>
    <link rel="stylesheet" href="Style.css" >

</head>
<body>

    <header>
        <div class="center">
            <div class="logo">
                <h2>Facebook</h2>
            </div><!--logo-->
            <form method="post" class="form-login">
             <div class="form-element">
                <p>E-mail ou telefone:</p>
                <input type="email">
             </div><!--form-element-->
             <div class="form-element">
                <p>Senha:</p>
                <input type="password">
             </div><!--form-element-->  
             <div class="form-element">
                <input type="submit" name="acao" value="Enviar">
             </div><!--form-element-->
            </form><!--form-login-->
             <div class="clear"></div> 
        </div><!--center-->
    </header>

    <section class="main">
     <div class="center">
        <div class="img-pessoas">
            <img src="img1.png" />
        </div><!--img-pessoas-->

        <div class="abrir-conta">
            <h2>Abra sua conta</h2>
            <h3>É gratuito e sempre será!</h3>

            <form class="criar-conta">
              <div class="W50">
                <input placeholder="Nome" type="text">
              </div><!--w50-->

               <div class="W50">
                <input placeholder="Sobrenome" type="text">
              </div><!--w50-->

               <div class="W100">
                <input placeholder="E-mail" type="email">
              </div><!--w100-->

               <div class="W100">
                <input placeholder="Senha" type="password">
              </div><!--w100-->

              <div class="W100">
                <h2>Data de Nascimento</h2>
                <select name="nascimento-dia" class="nascimento">
                <?php
                for ($i = 1; $i <= 31; $i++) {
                ?>
                   <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                 <?php
                 }
                 ?>
                </select>
                <select name="nascimento-mes" class="nascimento">
                    <option value="1">Junho</option>
                </select>
                <select name="nascimento-ano" class="nascimento">
                    <option value="1">1990</option>
                </select>
                <div class="clear"></div>
              </div><!--w100-->

            <div class="W100">
                <input type="submit" name="acao" value="Cadastrar">
            </div><!--w100-->

            <div class="clear"></div> 
            </form><!--criar-conta-->
        </div><!--abrir-conta-->

     <div class="clear"></div> 
     </div><!--center-->
    </section><!--main-->
    
</body>
</html>