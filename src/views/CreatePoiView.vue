<template>
    <div class="main_container">
        <NavbarConnected v-if="this.$store.state.token"/>
        <HeaderLayout v-else />
    </div>

        <PoiForm/>
    
    
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue';
import NavbarConnected from '@/components/NavbarConnected.vue';
import PoiForm from '@/components/PoiForm.vue';


export default {
    name: 'CreatePoiView',
    components: {
        HeaderLayout,
        NavbarConnected,
        PoiForm
        
    }

}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/createguide.css');
</style>