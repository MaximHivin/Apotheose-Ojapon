<template>

    <div class="main_container">
        <NavbarConnected v-if="this.$store.state.token"/>
        <HeaderLayout v-else />
    </div>

    <div class="main_container">
      <div class="poi">
        <h2>Que faire, que voir au Japon ?</h2>
          <div class="poi__card__container">
            <Card 
              v-for="poi in poiList" v-bind:key="poi.title" 
              v-bind:name="poi.title.rendered" 
              v-bind:localisation="poi._embedded['wp:term'][0][0].name" 
              v-bind:genres="poi._embedded['wp:term'] ? poi._embedded['wp:term'][1] : []" 
              v-bind:image="poi._embedded['wp:featuredmedia'] ? poi._embedded['wp:featuredmedia'][0].source_url : defaultImg" 
              v-bind:currentId="poi.id"
            />

            <!-- v-bind:tag="poi._embedded['wp:term'] ? poi._embedded['wp:term'][1].name : ''" -->
            
          </div>
 
      </div>
    </div>

</template>

<script>
// import axios from 'axios'
import HeaderLayout from '@/components/HeaderLayout.vue'
import NavbarConnected from '@/components/NavbarConnected.vue'
import Card from '@/components/Card.vue'
import PointsInteret from '@/services/POIService.js'
import defaultImg from '@/assets/images/header_background.jpg'

export default {
    name: 'PointsInteretView',
    components: {
        HeaderLayout,
        NavbarConnected,
        Card
    },
    data() {
        return {
            poiList:null,
            defaultImg
        }
    },
    mounted() {
      PointsInteret.findAll().then(
        (response) => {
          this.poiList = response.data;
        }
      )
    }
}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/frontpi.css');



</style>