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
  <section class="lejapon">
    <!-- <div class="lejapon-word">日本の歴史</div> -->
    <div class="lejapon__content-left">
      <img src="../assets/card-japan.jpg" alt="">
    </div>

    <div class="lejapon__content-right">
          <div class="lejapon__content__right-text">
            <h2>Découvrez le Japon</h2>
            <p><b>Le Japon</b> (en japonais : 日本, Nihon, /ɲihoꜜɴ/ Écouter ou Nippon, /ɲippoꜜɴ/ Écouter) est un <b>pays insulaire</b> de l'Asie de l'Est, situé entre l'océan Pacifique et la mer du Japon, à l'est de la Chine, de la Corée du Sud, de la Corée du Nord et de la Russie, et au nord de Taïwan. Étymologiquement, <b>les kanjis</b> (caractères chinois) qui composent le nom du Japon signifient « pays (国, koku) d'origine (本, hon) du Soleil (日, ni) » ; c'est ainsi que le Japon est désigné comme le <b>« pays du soleil levant »</b>.
            <br><br>
            Le Japon forme, depuis 1945, un <b>archipel de 6 852 îles</b> (de plus de 100 m2), dont les quatre plus grandes sont Hokkaidō, Honshū, Shikoku et Kyūshū, représentant à elles seules 95 % de la superficie terrestre du pays. L'archipel s'étend sur plus de <b>trois mille kilomètres</b>. La plupart des îles sont montagneuses, parfois volcaniques. Ainsi, le plus haut sommet du Japon, le mont Fuji (3 776 m), est un volcan dont la dernière éruption a eu lieu en 1707. Le Japon est le onzième pays le plus peuplé du monde.</p>
            <Button btnName="En savoir plus" />
         </div>
         <div class="lejapon__content__right-img">
           <img src="../assets/card-japan.jpg" alt="">
         </div>
    </div>

  </section>
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