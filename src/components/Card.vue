<template>

        <div class="card">
            <div class="card__content-top">
                    <!-- <img class="card__img" alt="image" src="../assets/japan-card1.jpg"> -->
            </div>

            <div class="card__content__bottom">
                <h3>{{namePI}}</h3>
                    <span class="card__content__bottom-localisation">
                        <img class="pin" alt="logo map pin" src="../assets/map-pin.svg"><p>Localisation</p>
                     </span>
                <div class="card__content_bottom-tag">
                    <p>Tag 2, Tag 3</p>
                </div>

            </div>

        </div>

</template>

<script>
export default {
    name: 'Card',
    props: {
        namePI: String
    }


}
</script>

<style>

@import url('../assets/css/style.css');


.card {
    box-shadow: 0px 7px 40px #0000001A;
    border-radius: 5px;
    background-color: #fff;
}

.card__content-top{
    width:100%;
    height: 250px;
    background-image: url('../assets/japan-card1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}


.card__content__bottom{
    padding: 2.4em;
}

.card__content__bottom h3{
    color: var(--secondary-color);
    font-family: 'Fellix SemiBold';
    font-size: 2.4em;
}

.card__content__bottom-localisation{
    display:flex;
    align-items: center;
}

.card__content__bottom-localisation p, .card__content_bottom-tag p{
    margin-left: 0.8em;
    color: var(--regular-black);
    font-family: 'Fellix Regular';
    font-size: 1.8em;
}

.card__content_bottom-tag p{
    margin-left: 0;
    color: var(--secondary-color);
}


</style>