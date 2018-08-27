<template>
  <div id="app">
    <div name="NavbarName">
      <Navbar></Navbar>
    </div>
    <router-view/>
 
  </div>
</template>
<script>


// let tasksRef = db.ref('tasks')

import Navbar from '@/components/Navbar.vue'
  export default{
    name: 'NavbarName', 
    components: {
      Navbar
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
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
