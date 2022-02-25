<template>
  <div class="card">

      <img class="img-card" alt="image" src="../assets/japan-card1.jpg">
      <h2>Nom du point d'intérêt</h2>

        <div class="map-pin">
                 <span><img class="pin" alt="logo map pin" src="../assets/map-pin.svg">Localisation</span>
               <br>
        </div>

      <span class="tag">Tag 2, Tag 3</span>
      


  </div>
</template>

<script>
export default {
    name: 'Card',


}
</script>

<style>

.card {
    width: 536px;
    height: 429px;
    box-shadow: 0px 7px 40px #0000001A;
    border-radius: 5px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
   
}

.img-card {
    height: 250px;
    width: 536px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

}

h2, span {
    display: flex;
    justify-content: left;
    padding-left: 24px;
    color: #1d1d1d;
    
}

.map-pin {
    display: flex;
    color: #adadad;
}

span {
    color: #adadad;
}

span.tag {
    color: #1d1d1d;
}

</style>