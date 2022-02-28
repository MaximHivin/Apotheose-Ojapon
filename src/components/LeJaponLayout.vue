<template>
  <div>
      
      <main class="container">
        <div class="container__japan">
          <div class="container__japan__content-left">
            <img src="../assets/japon1.png" alt="logo" class="photo1">
          </div>
          <div class="container__japan__content-right">
            <h2>Découvrez le Japon</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed vestibulum est, ut mattis est. Aliquam 
            viverra, orci nec consectetur gravida, turpis orci semper ex, porttitor faucibus quam diam mollis lacus. Nam 
            blandit nisl eget elit gravida, quis cursus urna condimentum. Nullam auctor et felis sit amet imperdiet. 
            Curabitur varius rutrum vehicula. Phasellus eu varius purus. Pellentesque dignissim fermentum nibh, at 
            porttitor purus posuere a. Morbi nec lacinia nisi, non pellentesque mi. Cras sagittis congue velit, a aliquam 
            nisl. Phasellus gravida felis convallis, congue ipsum feugiat, pretium turpis.<br><br><br>

            Curabitur sit amet sapien sed orci placerat mollis eget sit amet quam. Maecenas et neque tincidunt, ultrices 
            ligula et, vulputate sem. Suspendisse a mauris fringilla erat efficitur auctor. Nullam eget quam a arcu 
            efficitur dignissim ut et erat. Quisque sit amet eros sit amet tellus eleifend interdum a non tortor. 
            Pellentesque non sagittis ipsum. Aenean non sapien ultrices mi aliquet interdum nec at metus</p>
            <img src="../assets/japon2.png" alt="logo" class="photo2">
          </div>
        </div>
      </main>


  </div>
</template>

<script>
export default {
    name: 'LeJaponLayout'
}
</script>

<style>

.container {
    max-width: 1642px;
    margin: 0 auto;
    background-color: green;
}


.container__japan{
    display:flex;
    width: 100%;
    justify-content: center;
}

.container__japan__content-right{
    background-color: grey;
}

.container__japan__content-right p{
    text-align:left;
    margin-left: 56px;
    width: 100%;
    
}

.container__japan__content-right h2{
    text-align: left;
    margin-left: 56px;
    
}


.photo2{
    display:block;
}

/*
*/
h1 {
    color: #ce1137;
    font-size:100px;
    height: 150px;
    position: absolute;
    z-index: 1;
    bottom:700px;
}
h2 {
    color: white;
  
}
p {
    color:white;
    
    
}
span {
    color: white;
    background-color: #ce1137;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 10px;
    height: 20px;
    width: 120px;
    position: relative;
    left: 100rem;
}


</style>