<template>

    <div class="main_container">
      <HeaderLayout />
    </div>

    <div class="main_container">
      <div class="poi">
        <h2>Liste des points d'intérêts</h2>
          <div class="poi__card__container">
            <Card v-bind:name="namePI.title.rendered" v-bind:localisation="namePI._embedded['wp:term'][0][0].name"
            v-bind:genre="namePI._embedded['wp:term'][1][0].name" 
            v-bind:image="namePI._embedded['wp:featuredmedia'][0].source_url" v-for="namePI in namesPI" v-bind:key="namePI.title" v-bind:tag="namePI._embedded['wp:term'][1].name" />
          </div>
 
      </div>
    </div>

</template>

<script>
// import axios from 'axios'
import HeaderLayout from '@/components/HeaderLayout.vue'
import Card from '@/components/Card.vue'
import PointsInteret from '@/services/PointsInteret.js'
export default {
    name: 'PointsInteretView',
    components: {
        HeaderLayout,
        Card
    },
    data() {
        return {
            namesPI:null
        }
    },

    mounted() {
      PointsInteret.findAll().then(
        (response) => {
          this.namesPI = response.data;
        }
      )
    }
}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/frontpi.css');



</style>