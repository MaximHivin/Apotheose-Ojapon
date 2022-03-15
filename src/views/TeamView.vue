<template>
    <div>
        <NavbarConnected v-if="this.$store.state.token"/>
            <HeaderLayout v-else />
            <BurgerMenu />
        
        <div class="separateur"></div>

        <h1 class="titre_team">L'équipe du projet</h1>

        <div class="team_container">
            <CirclePi localisationPI="Lead Dev Back/Git Master Back" namePI="Aurélie"/>
            <CirclePi localisationPI="Product Owner/Dev Fullstack" namePI="Xavier"/>
            <CirclePi localisationPI="Scrum Master/Dev Fullstack" namePI="Bastien"/>
        </div>
        <div class="team_container">
            <CirclePi localisationPI="Lead Dev Front" namePI="Valentin"/>
            <CirclePi localisationPI="Dev Front/Git Master Front" namePI="Maxime"/>
        </div>

    </div>
</template>

<script>

import HeaderLayout from '@/components/HeaderLayout.vue'
import NavbarConnected from '@/components/NavbarConnected.vue'
import BurgerMenu from '@/components/BurgerMenu.vue'
import CirclePi from '@/components/CirclePi.vue'

export default {
    name: "TeamView",
     components: {
    NavbarConnected,
    HeaderLayout,
    BurgerMenu,
    CirclePi,
    

  }

}

</script>

<style scoped>

@import url('../assets/css/style.css');
@import url('../assets/css/homepage.css');

.separateur {
    border-top: 1px solid var(--primary-color);
}

.titre_team {
    font-size: 3.4em;
    font-family: "Fellix Light";
    color: var(--grey-color);
    text-align: center;

}

.team_container {
    display: flex;
    justify-content: center;
    padding: 6em;
    gap: 8em;
}


</style>