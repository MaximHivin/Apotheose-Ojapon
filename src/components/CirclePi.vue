<template>
            <div class="card__pi">
        <div class="card__pi__left"><img src="../assets/images/circlepi1.png"></div>
        <div class="card__pi__right">
         <span class="card__pi__right-tag">Lieu du point d'intérêt</span>
            <span class="card__pi__right-name">Point d'intérêt 1</span>
        </div>
    </div>




  <!-- <div class="container_circlepi">
      <div class="circlepi">
          <div class="circlepi__left">
              <img src="../assets/images/circlepi1.png">
          </div>

          <div class="circlepi__right">
              <p>Lieu du point d'intérêt<br>
              <span>Nom du point d'intérêt</span></p>
          </div>
      </div>
  </div> -->
</template>

<script>
export default {

}
</script>

<style>
@import url('../assets/css/style.css');



.card__pi{
    display:flex;
    align-items: center;
}

.card__pi__right{
    margin-left: 2.4em
}

.card__pi__right-tag{
    display:block;
    font-size: 1.6em;
    color: #fff;
    font-family: 'Fellix Light';
}

.card__pi__right-name{
    display: block;
    font-size: 1.8em;
    color: #fff;
    font-family: 'Fellix SemiBold';
}




@media screen and (max-width: 375px){
    .card__pi{
        width: 302px;
        justify-content: center;
    }

    .card__pi__left img{
        display: block;
        margin: 0 auto;
    }

    .card__pi__right{
        margin-left: 2.4em;
    }

    .card__pi__right-tag, .card__pi__right-name{
        text-align: left;
    }
}

</style>