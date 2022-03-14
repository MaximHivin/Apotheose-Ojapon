<template>
  <div class="singlepoidetail">
      <h2>{{ name }}</h2>
      <div class="singlepoidetail-img">
          <img :src="image">
      </div>
      <div class="singlepoidetail__tag">
          <div class="singlepoidetail__tag-genre">
            <span v-for="genre in genres" :key="genre.name" >{{ genre.name }}</span>
          </div>

        <div class="singlepoidetail__tag-localisation">
            <h4>Localisation :</h4>
            <span v-for="localisation in localisations" :key="localisation.name" ><img src="../assets/map-pin.svg">  {{ localisation.name }}</span>
        </div>

        <div class="singlepoidetail__tag-saison">
            <h4>Saison(s) recommandée(s) :</h4>
            <span v-for="saison in saisons" :key="saison.name" > {{ saison.name }}</span>
        </div>


      </div>
      <span>{{ tag }}</span>
      <div class="singlepoidetail-text">
          <h4>Description :</h4>
          <div v-html="description"></div>
      </div>
  </div>
</template>

<script>
export default {
    name:'SinglePoiDetailLayout',
    props:{
        name: String,
        image: String,
        tag: String,
        description: String,
        genres: String,
        localisations: String,
        saisons: String
    }
}
</script>

<style>
@import url('../assets/css/style.css');


.singlepoidetail h2 {
    color: var(--primary-color);
    font-size: 5.4em;
    font-family: 'Fellix Bold';
    padding:0;
}

.singlepoidetail-img{
    position: relative;
    width:100%;
    padding-bottom: 40%;
    
}

.singlepoidetail-img img{
    position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
    z-index:2
}

.singlepoidetail__tag{
    margin-top: 4em;
    margin-bottom: 4em;
}

.singlepoidetail h4{
    font-size: 2em;
    color: var(--secondary-color);
    font-family: 'Fellix SemiBold';
}

.singlepoidetail__tag-localisation span, .singlepoidetail__tag-saison span{
    display:flex;
    align-items: center;
    font-size: 1.6em;
    font-family: 'Fellix SemiBold';
    color: var(--primary-color);
}

.singlepoidetail__tag-localisation img {
    margin-right: 0.8em;
}

.singlepoidetail__tag-genre span{
    color: var(--primary-color);
    font-size: 1.6em;
    font-family: 'Fellix Medium';
    background-color: var(--light-black);
    padding: 0.8em 1.6em;
    margin-right: 1.6em;
    border-radius: 5px;
}

.singlepoidetail-text p{
    font-size: 1.8em;
    color: var(--secondary-color);
    font-family: 'Fellix Regular';
}

</style>