<template>
  <div>
    <home v-if="showHome" @toggle-page="togglePage($event)"></home>
    <list v-else @toggle-page="togglePage" :data="listData"></list>
  </div>
</template>

<script>
import Home from './components/Home';
import List from './components/List';
import Storage from './classes/Storage';

export default {
  name: 'App',
  components: {
    Home,
    List
  },
  data() { 
    return {
      showHome: true,
      listData: {}
    }
  },

  methods: {
    togglePage(listData = null) {
      this.showHome = !this.showHome;

      if (listData)
        this.listData = listData;
    }
  },

  created() {
    window.storage = new Storage;
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-color);
    margin: 0 90px;
    padding-bottom: 90px;
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
