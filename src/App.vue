<template>
  <div>
    <home v-if="showHome" @toggle-page="togglePage($event)"></home>
    <list v-else @toggle-page="togglePage" :list-data="viewedList"></list>
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
      showHome: true,
      viewedList: []
    }
  },

  methods: {
    togglePage(data = null) {
      this.showHome = !this.showHome;

      if (data)
        this.viewedList = data;
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
