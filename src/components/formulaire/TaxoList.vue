<template>
  <div>
    <div>
      <label
        for="search"
      >
        Type the name of a country to search
      </label>

      <input type="text" id="search" v-model="searchTerm" placeholder="Type here..." >

      <ul v-if="searchCountries.length">
        <li>
          Showing {{ searchCountries.length }} of {{ countries.length }} results
        </li>
        <li v-for="country in searchCountries"
            :key="country.name"
            @click="selectCountry(country.name)"
        >
          {{ country.name }}
        </li>
      </ul>

      <p v-if="selectedCountry" >
        You have selected: <span>{{ selectedCountry }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import {ref, computed} from 'vue'
import countries from '@/assets/countries.json';


export default {
    name: 'TaxoList',
    setup() {
      let searchTerm = ref('');
      const searchCountries = computed(() => {
        if (searchTerm.value === '') {
          return []
        }

        let matches = 0

        return countries.filter(country => {
          if (
            country.name.toLowerCase().includes(searchTerm.value.toLowerCase())
            && matches < 10
          ) {
            matches++
            return country
          }
        })
      });

    const selectCountry = (country) => {
      selectedCountry.value = country
      searchTerm.value = ''
    }
    let selectedCountry = ref('')
    return {
      countries,
      searchTerm,
      searchCountries,
      selectCountry,
      selectedCountry
    }
  }
}
</script>

<style>

</style>