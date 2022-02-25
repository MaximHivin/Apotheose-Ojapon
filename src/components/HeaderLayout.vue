<template>
  <div>
      <header>
          <div class="container">
              <img src="../assets/logo.png" alt="logo">
              <nav class="desktop">
                  <router-link v-for="link in links" :key="link.name" :to="link.route">{{ link.name }}</router-link>  
              </nav>
              <ul class="login">
                  <li class="inscription">Inscription</li>
                  <li class="connect">Se Connecter</li>
              </ul>
          </div>
      </header>
      
  </div>
</template>

<script>
export default {
    name:'HeaderLayout',
    data () {
            return {
                links: [
                    {
                        name: 'Accueil',
                        route: '/'
                    },
                    {
                        name: 'Le Japon',
                        route: '/le_japon'
                    },
                    {
                        name: 'Points d\'intérêts',
                        route: '/pointsinterets'
                    },
                    {
                        name: 'Blogs Voyageurs',
                        route: '/blogs'
                    },
                    {
                        name: 'FAQ',
                        route: '/faq'
                    },
                    {
                        name: 'Contact',
                        route: '/contact'
                    }
                    
                ]
            }
        }

}
</script>

<style scoped>

.container {
    display: flex;
    margin-left: 5em;
}

a {
    margin: 1em;
    color: white;
}

ul {
    display: inline-flex;
    margin-left: 10em;
    list-style-type: none;

}
li {
    color: white;
}
.inscription {
        margin: 18px;
}

.connect {
    background-color: #ce1137;
    border-radius: 8%;
    padding: 0.5em;
    margin-top: 10px;
    height: 1rem;
    
}
nav {
    margin-left: 15em;
}

</style>