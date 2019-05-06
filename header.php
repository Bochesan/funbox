<?
$buildDest = "/assets/build/";
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Document</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="/media/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="<?=$buildDest?>main.min.css?<?php echo filemtime($_SERVER['DOCUMENT_ROOT'].$buildDest.'main.min.css'); ?>" media="all" />
</head>
<body>
<div class="outer">
    <header class="wrapper">
        <a href="/" class="logo">Logo</a>
        <nav>
            <ul class="main-menu">
                <li class="main-menu__item"><a href="#" class="main-menu__link">Link-1</a></li>
                <li class="main-menu__item"><a href="#" class="main-menu__link">Link-2</a></li>
                <li class="main-menu__item"><a href="#" class="main-menu__link">Link-3</a></li>
                <li class="main-menu__item"><a href="#" class="main-menu__link">Link-4</a></li>
                <li class="main-menu__item"><a href="#" class="main-menu__link">Link-5</a></li>
            </ul>
        </nav>
    </header>
    <main class="main-content wrapper">
