<template>

<body class="black_color">
  <div class="header__desktop">
        <HeaderLayout />
        <div class="main_container">

          <div class="header__desktop-title">
            <span>日本</span>
            <h1>Japan</h1>
          </div>

          <div class="header__desktop__action">
            <div class="header__desktop__action__container-search">
              <InputSearch />
            </div>
            <div class="header__desktop__action__container-btn">
               <Button btnName="Rechercher" />
            </div>
          </div>

          <div class="header__desktop-pi">
            <CirclePi localisationPI="Localisation" namePI="Nom du point d'intérêt" /><CirclePi localisationPI="Localisation" namePI="Nom du point d'intérêt" /><CirclePi localisationPI="Localisation" namePI="Nom du point d'intérêt" />
          </div> 

        </div>
  </div>
<div class="main_container">

</div>

</body>




</template>

<script>
// @ is an alias to /src

import HeaderLayout from '@/components/HeaderLayout.vue'
import InputSearch from '@/components/formulaire/InputSearch.vue'
import Button from '@/components/Button.vue'
import CirclePi from '@/components/CirclePi.vue'


export default {
  name: 'HomeView',
  components: {

    HeaderLayout,
    InputSearch,
    Button,
    CirclePi

  }
}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/homepage.css');
</style>