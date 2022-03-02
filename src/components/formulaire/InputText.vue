<template>
  <div class="container_inputText">
      <input :type="type" :name="name" :id="id" v-on:keyup="handleKeyUp" :placeholder="placeholder" class="container__inputText-content">
  </div>
</template>

<script>
export default {
    name: 'InputText',
    props: {
        type: String,
        name: String,
        id: String,
        placeholder: String
    },
    data () {
        return {
            localInputValue: ''
        }
    },
    methods: {
        handleKeyUp: function (event) {
        this.$emit('inputChange', {
            name: this.name,
            value: event.target.value
        })
        }
    }
}
</script>

<style>
@import url('../../assets/css/style.css');

.container_inputText{
    max-width: 748px;
}

.container__inputText-content{
    padding-left: 2.4em;
    padding-top: 1.6em;
    padding-bottom: 1.6em; 
    border-radius: 10px;
    border:none;
    background-color:#F1F1F1 ;
    color: var(--secondary-color);
    font-size: 1.6em;
    font-family: 'Fellix Medium';
    font-weight: 500;
    width: 100%;
    box-sizing: border-box; 
}

.container__inputText-content::placeholder{
    color:#ADADAD;
    font-weight: 500;
}

 @media screen and (max-width: 375px){

    .container__inputText-content{
        padding: 1.6em;
    }
} 


</style>