<template>
        <div class="cardguide">
            <Supprimer @click = "DeleteGuide" />
            <div class="cardguide__top">
                <div class="cardguide__top-img">
                     <img :src="image">
                </div>
            </div>

            <div class="cardguide__bottom">
                <h3>{{ name }}</h3>
                <a href="#">Accéder à ce guide</a>
            </div>
        </div>

</template>

<script>
import Supprimer from '@/components/CTA/Supprimer.vue'
import GuidesService from '@/services/GuidesService.js'

export default {
    name: 'CardGuide',
    components:{
        Supprimer
    },
    props: {
        name: String,
        url: String,
        image: String,
        id: Number
    },
    
    methods:{
        DeleteGuide: function(){
            GuidesService.delete(this.id)
            this.$emit('onDeleteCardGuide')
        }
    }     
}
</script>

<style>

@import url('../assets/css/style.css');

.cardguide{
    width: 31%;
    margin-right: 3.2em;
    margin-bottom: 3.2em;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: relative;
}

.cardguide__top{
    position: relative;
    width: 100%;
    padding-bottom: 50%;
}

.cardguide__top-img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index:2;
}

.cardguide__bottom{
    padding-top: 2.4em;
    padding-left: 2.4em;
    padding-bottom: 2.4em;
    background-color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.cardguide__bottom h3{
    color: var(--secondary-color);
    font-size: 2.4em;
    font-family: 'Fellix SemiBold';
    margin-bottom: 0.8em;
}

.cardguide__bottom a {
    font-family: 'Fellix SemiBold';
    color: var(--primary-color);
    font-size: 1.6em;
}

</style>