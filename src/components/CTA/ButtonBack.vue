<template>
<!-- 
  <div class="card__back">
      <a href="#" class="card__back-text">{{ linkContent }}
      <img alt="arrow right" src="@/assets/images/long_arrow.svg"></a>
  </div> -->
  
  <div class="container__card__back">
      <a href="#" class="card__back">
        <div class="card__back__content">
           <div class="card__back__content-left">
                <span>{{ linkContent }}</span>
            </div>
             <div class="card__back__content-right">
                <img alt="arrow right" src="@/assets/images/long_arrow.svg">
            </div>
        </div>
    </a>
  </div>

</template>

<script>
export default {
    name: 'ButtonBack',
    props: {
        linkContent: String
    }

}
</script>

<style scoped>
@import url('../../assets/css/style.css');


    .container__card__back{
        width: 812px;
        margin-bottom: 1.6em;
        margin-right: 1.6em;
        display: inline-block;
    }

    .card__back{
        text-decoration: none;
        width: 100%;
    }

    .card__back__content{
        background-color: var(--primary-color);
        padding: 4em;
        display:flex;
        align-items: center;
        justify-content: space-between;
    }

    .card__back__content-left{
        color:#fff;
        font-size: 2.4em;
        font-family: 'Fellix SemiBold';
        margin-right: 8em;
    }

    @media screen and (max-width: 375px) {

        .container__card__back{
            width: 100%;
            margin-right: 0;
        } 

        .card__back{
            width: 100%;
            display:block;
        }
        .card__back__content{
            padding: 2.4em;
        }
        
        .card__back__content-left{
            font-size: 1.6em;
            margin-right: 0;
            width: 100%;
            font-family: 'Fellix SemiBold';
        }

        .card__back__content-right{
            display:none; 
        }

    }

</style>