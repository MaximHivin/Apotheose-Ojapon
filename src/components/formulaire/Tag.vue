<template>
     <ul class="list_tag">
         <li>
             <label for="tag">Nom du tag</label>
             <input type="checkbox" name="tag" id="tag" class="tag">
        </li>
                 <li>
             <label for="tag">Nom du tag</label>
             <input type="checkbox" name="tag" id="tag" class="tag">
        </li>
     </ul>
     <a href="#" class="tag_button">Afficher les filtres</a>
</template>

<script>

export default {

}
</script>

<style>
[type="checkbox"]{
    width: 32px;
    height: 32px;
}

.list_tag{
    display: flex;
    list-style-type: none;
}

.list_tag li{
    font-size: 24px;
    color: #ADADAD;
    font-weight: 500;
    margin-right: 8px;
}

.tag_button{
    color:#CE1137;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    display:none;
}


@media screen and (max-width: 375px){
    .list_tag{
        display: none;
    }
    .tag_button{
        display:block;
    }
}



</style>