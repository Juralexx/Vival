<!DOCTYPE html>
<html>
    <head>
        <?php echo (!empty($title)) ? '<title>'.$title.'</title>' : '<title> Forum </title>'; ?>

        <meta charset ="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Favicon -->
        <link rel="icon" type="image/x-icon" href="./img/favicon.ico" />

        <!-- Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" /></script>
        
        <!-- CSS -->
        <link rel="stylesheet" type="text/css" href="./css/Reinitialize.css" />
        <!--link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" /-->
        <link rel="stylesheet" type="text/css" href="./css/swiper-bundle.css" />
        <link rel="stylesheet" type="text/css" href="./css/swiper-bundle.min.css" />
        <link rel="stylesheet" type="text/css" href="./css/animate.min.css" />
        <link rel="stylesheet" type="text/css" href="./css/style.css" />
 
        <!-- JQuery -->
        <link href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" rel="stylesheet" />

        <!-- Fonts -->
        <link href="https://fr.allfont.net/allfont.css?fonts=Faktum" />
        <link href="https://fonts.google.com/specimen/Spartan?query=spartan" />

        <!-- Fontawesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/dfbc03fdcb.js" crossorigin="anonymous"></script> 

        <?php
            $lvl = (isset($_SESSION['level'])) ? (int) $_SESSION['level'] : 1;
            $id = (isset($_SESSION['id'])) ? (int) $_SESSION['id'] : 0;
            $pseudo = (isset($_SESSION['pseudo'])) ? $_SESSION['pseudo'] : '';

            include_once("./includes/fonctions.php");
        ?>
    </head> 

