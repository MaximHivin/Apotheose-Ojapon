<template>
  <HeaderLayout/>
  <PoiForm/>
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue';
import PoiForm from '@/components/PoiForm.vue';


export default {
    name: 'CreatePoiView',
    components: {
        HeaderLayout,
        PoiForm
        
    }

}
</script>

<style>

</style>