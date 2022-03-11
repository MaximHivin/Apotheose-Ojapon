<template>

    <div class="main_container">
        <NavbarConnected v-if="this.$store.state.token"/>
    </div>
    <div class="poi__back-background">
      <div class="main_container">
        <router-link :to="{name:'GuideDeVoyageDetail', params:{currentId:currentId}}">
          <Retour textBtn="Retour à mon guide" />
        </router-link>
      <div class="poi__back">

        <h2>Liste des points d'intérêt</h2>
          <div class="poi__back__card__container">
            <Card v-bind:name="namePI.title.rendered" v-bind:localisation="namePI._embedded['wp:term'][0][0].name"
            v-bind:genre="namePI._embedded['wp:term'][1][0].name" 
            v-bind:image="namePI._embedded['wp:featuredmedia'][0].source_url" v-for="namePI in namesPI" v-bind:key="namePI.title" v-bind:tag="namePI._embedded['wp:term'][1].name" />
          </div>

      </div>

      </div>
    </div>

</template>

<script>
import NavbarConnected from '@/components/NavbarConnected.vue'
import Card from '@/components/Card.vue'
import PointsInteret from '@/services/POIService.js'
import Retour from '@/components/CTA/Retour.vue'

export default {
  components:{
    NavbarConnected,
    Card,
    Retour
  },
  data(){
    return{
      namesPI:null,
      currentId: this.$route.params.id
    }
  },
  mounted(){
    PointsInteret.findAll().then(
      (response) => {
        this.namesPI = response.data
      }
    )
  }
}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/backpoi.css');

</style>