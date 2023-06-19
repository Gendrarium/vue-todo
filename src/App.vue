<template>
  <div id="app">
    <app-header />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "@/components/AppHeader.vue";

export default Vue.extend({
  components: {
    AppHeader,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
  flex: 1 1 auto;

  &__home {
    margin: auto;
  }
}
</style>
