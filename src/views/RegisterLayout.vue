<template>
<div class="main_container">
    <NavbarConnected v-if="this.$store.state.token"/>
    <HeaderLayout v-else />
    <RegistrationForm/>
</div>
  
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue';
import NavbarConnected from '@/components/NavbarConnected.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';


export default {
    name: 'RegisterLayout',
    components: {
        HeaderLayout,
        NavbarConnected,
        RegistrationForm
        
    }

}
</script>

<style>

</style>
