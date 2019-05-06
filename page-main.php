<? require_once $_SERVER['DOCUMENT_ROOT'] . '/header.php'; ?>

<h1>Ты сегодня покормил&nbsp;кота?</h1>

<div class="product-container">
    <div class="product-box">
        <div class="product-box__container">
            <img src="/media/images/cat.png" alt="Cat" class="product-box__image product-box__image--pos">
            <div class="product-box__title">Сказочное заморское яство</div>
            <div class="product-box__name">Нямушка</div>
            <div class="product-box__composition">с фуа-гра</div>
            <div class="product-box__count">
                <span class="product-box__count-num">10</span>
                <span>порций</span>
            </div>
            <div class="product-box__gift">
                <span class="product-box__gift-num"></span>
                <span>мышь в подарок</span>
            </div>
            <div class="product-box__size">
                <span class="product-box__size-num">0,5</span>
                <span>кг</span>
            </div>
        </div>
        <div class="product-box__footnote">Чего сидишь? Порадуй котэ, <span class="product-box__footnote-button">купи.</span></div>
    </div>

    <div class="product-box selected">
        <div class="product-box__container">
            <img src="/media/images/cat.png" alt="Cat" class="product-box__image product-box__image--pos">
            <div class="product-box__title">Сказочное заморское яство</div>
            <div class="product-box__name">Нямушка</div>
            <div class="product-box__composition">с рыбой</div>
            <div class="product-box__count">
                <span class="product-box__count-num">40</span>
                <span>порций</span>
            </div>
            <div class="product-box__gift">
                <span class="product-box__gift-num">2</span>
                <span>мыши в подарок</span>
            </div>
            <div class="product-box__size">
                <span class="product-box__size-num">2</span>
                <span>кг</span>
            </div>
        </div>
        <div class="product-box__footnote">Головы щучьи с чесноком да свежайшая сёмгушка.</div>
    </div>

    <div class="product-box disabled">
        <div class="product-box__container">
            <img src="/media/images/cat.png" alt="Cat" class="product-box__image product-box__image--pos">
            <div class="product-box__title">Сказочное заморское яство</div>
            <div class="product-box__name">Нямушка</div>
            <div class="product-box__composition">с курой</div>
            <div class="product-box__count">
                <span class="product-box__count-num">100</span>
                <span>порций</span>
            </div>
            <div class="product-box__gift">
                <span class="product-box__gift-num">5</span>
                <span>мышей в подарок</span>
            </div>
            <div class="product-box__size">
                <span class="product-box__size-num">5</span>
                <span>кг</span>
            </div>
        </div>
        <div class="product-box__footnote">Печалька, с курой закончился.</div>
    </div>
</div>

<? require $_SERVER['DOCUMENT_ROOT'] . '/footer.php'; ?>
