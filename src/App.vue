<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  {{info}}
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'App',
  data(){
    return{
      info: null
    }
  },
  mounted(){
    let data = {name: 'John', age: 99}
    axios.post('https://api.coindesk.com/v1/bpi/currentprice.json', data, {
      headers: {Authorization: 'text'}
    })
      .then(response => (this.info = response))
      .catch((error) => {
        alert(error)
      })
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
