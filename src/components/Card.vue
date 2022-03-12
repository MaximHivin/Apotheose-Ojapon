<template>

        <div class="card">
            <div class="card__top">
                <div class="card__top-img">
                     <img :src="image">
                </div>
            </div>

            <div class="card__bottom">
                <h3 v-html="name"></h3>
                <div class="card__bottom-localisation">
                    <img src="../assets/map-pin.svg">
                    <p v-html="localisation"></p>
                </div>
                <ul class="genres-list">
                    <!-- The first <li> only displays when no tags have been set on the POI -->
                    <li v-if="genres.length == 0" class="card__bottom-tag">À voir</li>
                    <li v-else v-for="genre in genres" :key="genre.slug" v-html="genre.name" class="card__bottom-tag"></li>
                </ul>
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
        genres: Object
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
    margin: 0;
}

.card__bottom-localisation{
    display: flex;
    align-items: center;
}

.card__bottom-localisation p {
    color: var(--regular-black);
    margin: 0.8em;
    font-size: 1.8em;
    font-family: 'Fellix Regular';
}

.card__bottom-tag{
    font-family: 'Fellix Regular';
    font-size: 1.6em;
    color: var(--secondary-color);
}
.card__bottom-tag::after {
    content: ", ";
    padding-right: 0.2em;
}
.card__bottom-tag:last-child::after {
    content: "";
}

.genres-list {
    list-style-type: none;
    display: flex;
    padding-left: 0;
}

</style>