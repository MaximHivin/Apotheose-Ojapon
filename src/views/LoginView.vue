<template>
  <HeaderLayout/>
  <ConnectionLayout/>
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue';
import ConnectionLayout from '@/components/ConnectionLayout.vue';

export default {
    name: 'LoginView',
    components: {
        HeaderLayout,
        ConnectionLayout
    }

}
</script>

<style>

</style>