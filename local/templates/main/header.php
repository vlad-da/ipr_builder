<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
global $APPLICATION;
?>
<!DOCTYPE html>
<html lang="<?=LANGUAGE_ID?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200;300;400;500;600;700&family=Nunito+Sans:opsz,wght@6..12,200;6..12,300;6..12,400;6..12,600;6..12,700;6..12,800&display=swap" rel="stylesheet">
    <?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/dist/style.css");?>
    <?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/index.js");?>
    <title><?=$APPLICATION->ShowTitle();?></title>
    <?$APPLICATION->ShowCSS();?>
    <?$APPLICATION->ShowHead();?>
</head>
<body>
    <div class="app">
        <header>
            <div class="menu">
                <div class="layout">
                    <div class="upbar">
                        <div class="upbar__logo">
                            <div class="upbar__text">
                                Правозащитник
                                <span class="upbar__text_white">юридическая компания</span>
                            </div>
                        </div>
                        <div class="navbar">
                            <ul class="navbar__list">
                                <li class="navbar__item">
                                    <a class="navbar__link" href="#">
                                        Услуги
                                    </a>
                                </li>
                                <li class="navbar__item">
                                    <a class="navbar__link" href="#">
                                        О компании
                                    </a>
                                </li>
                                
                                <li class="navbar__item">
                                    <a class="navbar__link" href="#">
                                        Отзывы
                                    </a>
                                </li>
                                <li class="navbar__item">
                                    <a class="navbar__link" href="#">
                                        Новости
                                    </a>
                                </li>
                                <li class="navbar__item">
                                    <a class="navbar__link" href="#">
                                        Контакты
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="upbar__call">
                            Заказать звонок
                        </div>
                    </div>
                </div>
            </div>
        </header>
    <?=$APPLICATION->ShowPanel();?>
       
        <main>