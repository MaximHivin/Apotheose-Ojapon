<template>

        <div class="card">
            <div class="card__top">
                <div class="card__top-img">
                     <img :src="image">
                </div>
            </div>

            <div class="card__bottom">
                <h3>{{ name }}</h3>
                <div class="card__bottom-localisation">
                    <img src="../assets/map-pin.svg">
                    <p>{{ localisation }}</p>
                </div>
                <p class="card__bottom-tag">{{ tag }}</p>
            </div>
        </div>

</template>

<script>
export default {
    name: 'Card',
    props: {
        name: String,
        localisation: String,
        url: String,
        image: String,
        tag: String
    }
}
</script>

<style>

@import url('../assets/css/style.css');

.card{
    width: 31%;
    margin-right: 1.6em;
    margin-bottom: 1.6em;
}

.card__top{
    position: relative;
    width: 100%;
    padding-bottom: 50%;
}

.card__top-img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index:2;
}

.card__bottom{
    padding-top: 2.4em;
    padding-left: 2.4em;
    padding-bottom: 2.4em;
    background-color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.card__bottom h3{
    color: var(--secondary-color);
    font-size: 2.4em;
    font-family: 'Fellix SemiBold';
}

.card__bottom-localisation{
    display: flex;
    align-items: center;
}

.card__bottom-localisation p {
    color: var(--regular-black);
    margin-left: 0.8em;
    font-size: 1.8em;
    font-family: 'Fellix Regular';
}

.card__bottom-tag p{
    font-family: 'Fellix Regular';
    font-size: 1.6em;
    color: var(--secondary-color);
}

</style>