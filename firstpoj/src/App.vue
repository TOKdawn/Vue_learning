<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 v-html="zpy"></h1>
    <ul>
        <li v-for="item in items" v-bind:class="{redclass:item.sex,xxx}">
            {{item.name}}
        </li>
    </ul>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
      Hello
  },
  data:function(){
      return{
          zpy:'<h1>textzpy</h1>',
          items:[
              {
                  name:'tassadar',
                  sex:true

              },
              {
                  name:'kanruige',
                  sex:false

              }
          ],
          xxx:'blueclass',
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.redclass{
    color: #e91e63;
}
.blueclass{
    color: #2196f3;
}
</style>
