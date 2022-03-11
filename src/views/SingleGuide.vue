<template>
<div class="main_container">
      <NavbarConnected />
</div>
  <section class="singleguide">
      <div class="main_container">
        <router-link to="/listeguidesdevoyages">
        <Retour textBtn="Retour à la liste des guides" />
        </router-link>
        <SingleGuideDetailLayout v-if="nameguidesingle" v-bind:name="nameguidesingle.title.rendered" />
      </div>
  </section>
</template>

<script>
import NavbarConnected from '@/components/NavbarConnected.vue'
import Retour from '@/components/CTA/Retour.vue'
import GuidesService from '@/services/GuidesService.js'
import SingleGuideDetailLayout from '@/components/SingleGuideDetailLayout.vue'

export default {
    components:{
        NavbarConnected,
        Retour,
        SingleGuideDetailLayout
    },
    data(){
        return{
            nameguidesingle: null,
            currentId: this.$route.params.id
        }
    },
    mounted(){
        GuidesService.findById(this.$route.params.id).then(
            (response) => {
                console.log('RESPONSE', response.data);
                this.nameguidesingle = response.data
            }
        )
        
    }
}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/singleguide.css')


</style>