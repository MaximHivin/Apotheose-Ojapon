<template>
  <HeaderLayout/>
  <RegistrationForm/>
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';


export default {
    name: 'RegisterLayout',
    components: {
        HeaderLayout,
        RegistrationForm
        
    }

}
</script>

<style>

</style>