<?php 
$property = json_decode($arResult['DISPLAY_PROPERTIES']['CONTENT']['~VALUE'], true);
[
    'my_blocks__info' => [
        'cardHeader' => $cardHeader,
        'cardText' => $cardText,
        'card-title-1' => $cardTitle1,
        'card-desc-1' => $cardDesc1,
        'card-title-2' => $cardTitle2,
        'card-desc-2' => $cardDesc2,
        'card-title-3' => $cardTitle3,
        'card-desc-3' => $cardDesc3,
        'card-title-4' => $cardTitle4,
        'card-desc-4' => $cardDesc4,
        'card-title-5' => $cardTitle5,
        'card-desc-5' => $cardDesc5,
        'card-title-6' => $cardTitle6,
        'card-desc-6' => $cardDesc6,
    ],
] = array_column($property['blocks'], null, 'name');

$cards = [
    'card1' => [
        $cardTitle1['value'],
        $cardDesc1['value'],
    ],
    'card2' => [
        $cardTitle2['value'],
        $cardDesc2['value'],
    ],
    'card3' => [
        $cardTitle3['value'],
        $cardDesc3['value'],
    ],
    'card4' => [
        $cardTitle4['value'],
        $cardDesc4['value'],
    ],
    'card5' => [
        $cardTitle5['value'],
        $cardDesc5['value'],
    ],
    'card6' => [
        $cardTitle6['value'],
        $cardDesc6['value'],
    ],
];
?>
<section class="services">
    <div class="layout">
        <div class="services__wrapper">
            <div class="services__title">
                <?= $cardHeader['value']?>
            </div>
            <div class="services__desc">
            <?= $cardText['value']?>
            </div>
            <div class="services__list">
                <?php foreach($cards as $card):?>
                <div class="services-list-item">
                    <div class="services-list-item__title">
                        <?= $card[0]?>
                    </div>
                    <div class="services-list-item__desc">
                        <?= $card[1]?>
                    </div>
                </div>
                <?php endforeach;?>
            </div>
            <div></div>
        </div>
        <div class="services__button">
            наши услуги
        </div>
    </div>
</section>