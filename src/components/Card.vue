<template>
<div class="card">

      <img class="img-card" alt="image" src="../assets/japan-card1.jpg">

      <h3>Nom du point d'intérêt</h3>

        <div class="map-pin">

                <span>
                     <img class="pin" alt="logo map pin" src="../assets/map-pin.svg">
                Localisation</span>
        
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

@import url('../assets/css/style.css');


.card {
    width: 352px;
    height: 429px;
    box-shadow: 0px 7px 40px #0000001A;
    border-radius: 5px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    background-color: #fff;
   
}

.img-card {
    height: 250px;
    width: 352px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

}

h3{
    font-family: 'Fellix Semibold';
    color:
}

h3,span {
    display: flex;
    justify-content: left;
    padding-left: 24px;
    color: #1d1d1d;
}

.map-pin {
    display: flex;
    color: #adadad;
    line-height: 2;
}

.pin {
    margin-right: 8px;
}

span {
    color: #adadad;
    font-family: 'Fellix Bold';
}

span.tag {

    margin-top: 20px;
    color: #1d1d1d;
}

@media screen and (max-width: 375px) {

    .card {
        width: 302px;
        height: 256px;
    }

    .img-card {
       width: 302px;
       height: 135px; 
    }

    h2 {
        font-size: 18px;
    }

    .map-pin {
        font-size: 14px;
        line-height: 1.5;
    }

    .pin {
        height: 18px;
        width: 22px;
    }

    span.tag {
        font-size: 14px;
    }
}

</style>