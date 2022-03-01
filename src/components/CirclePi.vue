<template>
  <div class="container_circlepi">
      <div class="circlepi">
          <div class="circlepi__left">
              <img src="../assets/images/circlepi1.png">
          </div>

          <div class="circlepi__right">
              <p>Lieu du point d'intérêt<br>
              <span>Nom du point d'intérêt</span></p>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>


.container_circlepi{
    max-width: 322px;
}

.circlepi{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.circlepi__left img{
    width: 150px;
    height: 150px;
    border-radius: 100%;
}

.circlepi__right{
    font-size: 16px;
    color: #1d1d1d;
    text-align: start;
    margin-left: 24px;
}

.circlepi__right span{
    font-size: 18px;
    font-weight: 600;
}

@media screen and (max-width: 375px){
    .container_circlepi{
        max-width: initial;
    }
    .circlepi{
        display: block;
    }
    .circlepi__right{
        text-align: center;
        margin-left:0;
    }
}

</style>