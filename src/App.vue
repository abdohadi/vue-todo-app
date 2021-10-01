<template>
  <div>
    <home></home>
    <!-- <list></list> -->
  </div>
</template>

<script>
import Home from './components/Home.vue';
// import List from './components/List.vue';

export default {
  name: 'App',
  components: {
    Home
    // List
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-color);
    margin: 90px;
    margin-top: 50px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    border-bottom: 1px solid var(--border-color);
  }

  .header h2 {
    font-size: 2rem;
  }

</style>
