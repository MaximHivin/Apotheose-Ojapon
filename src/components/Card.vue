<template>
<div class="card">

      <img class="card__img" alt="image" src="../assets/japan-card1.jpg">
      
    <div class="card__content">
        <h3>Nom du point d'intérêt</h3>
        <div class="card__content__map-pin">
             <span class="card__contgent__map__pin-content"><img class="pin" alt="logo map pin" src="../assets/map-pin.svg">Localisation</span>
        </div>
        <span class="card__content-tag">Tag 2, Tag 3</span>
    </div>

</div>
</template>

<script>
export default {
    name: 'Card',


}
</script>

<style>

@import url('../assets/css/style.css');


.card {
    width: 536px;
    box-shadow: 0px 7px 40px #0000001A;
    border-radius: 5px;
    background-color: #fff;
    padding-bottom: 2.4em;
   
}

.card__img {
    height: 250px;
    width: 536px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

}

.card__content{
    padding-left: 2.4em;
}

.card__content__map-pin span{
    display: flex;
    align-items: center;
}

.card__content__map-pin img {
    margin-right: 0.8em;
}

h3{
    font-family: 'Fellix Semibold';
    font-size: 2.4em;
    margin-bottom: 0.8em;
    color: var(--primary-color);
}

/* h3,span {
    display: flex;
    justify-content: left;
    padding-left: 3em;
    color: #1d1d1d;
} */

/* .map-pin {
    display: flex;
    color: #adadad;
    line-height: 2;
} */

/* .pin {
    margin-right: 1em;
} */

.card__contgent__map__pin-content {
    color: var(--regular-black);
    font-family: 'Fellix Regular';
    font-size: 1.8em;
    margin-bottom: 0.8em;
}

.card__content-tag{
    color: var(--secondary-color);
    font-family: 'Fellix Regular';
    font-size: 1.8em;
}

/* span.tag {
    margin-top: 20px;
    color: #1d1d1d;
} */

@media screen and (max-width: 375px) {
    
    .card {
        max-width: 302px;
        margin: 0 auto;
    }

    .card__img {
       width: 302px;
       height: 135px; 
    }

    h3{
        font-size: 1.8em
    }

    .card__contgent__map__pin-content, .card__content-tag{
        font-size: 1.4em;
    }

    /* .card {
        width: 30.2em;
        height: 256px;
    }



    h2 {
        font-size: 18px;
    }

    .map-pin {
        font-size: 14px;
        line-height: 1.5;
    }

    .pin {
        height: 18px;
        width: 22px;
    }

    .card__content-tag {
        font-size: 14px;
    } */
}

</style>