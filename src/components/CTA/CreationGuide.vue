<template>
  <div class="link-to">
      <a href="x" class="create-link">{{ linkContent }}</a>
      <img alt="arrow right" src="@/assets/arrow-right.svg">
  </div>
</template>

<script>

export default {
    name: 'CreationGuide',
    props: {
        linkContent: String
    }

}

</script>

<style>

    .link-to {
        position: relative;
        display: flex;
        align-items: center;
        text-align: left;
        margin-bottom: 1em;
        padding-left: 4em;
        width: 812px;
        height: 110px;
        background-color: #CE1137;
        
    }

    img {
        position: absolute;
        right: 4em;
        width: 63px;
        height: 32px;
    }

    .create-link {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
    }

    @media screen and (max-width: 375px) {

        .link-to {
            width: 302px;
            height: 49px;
            margin: 10px auto;
            padding-left: 16px;
        
        }

        img {
            display: none;
        }

        .create-link {
            font-size: 1.4em;
            
        }

    }

</style>