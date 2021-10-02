<template>
  <div>
    <home v-if="showHome" @togglePage="togglePage"></home>
    <list v-else></list>
  </div>
</template>

<script>
import Home from './components/Home';
import List from './components/List';

export default {
  name: 'App',
  components: {
    Home,
    List
  },
  data() { 
    return {
      showHome: true
    }
  },

  methods: {
    togglePage() {
      this.showHome = !this.showHome;
    }
  },

  created() {
    window.storage = window.localStorage;

    if (! (window.lists = JSON.parse(window.storage.getItem('todoLists')))) {
      window.storage.setItem('todoLists', JSON.stringify([]));
      window.lists = JSON.parse(window.storage.getItem('todoLists'));
    }

    window.listsLength = window.lists.length;
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
