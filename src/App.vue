<template>
  <div class = 'app'>

    <main class="app__main">
      <Header />

    </main>

  </div>
</template>

<script setup>
  import Header from "@/components/Header.vue";
   import About from "@/components/About.vue";
</script>

<style scoped lang="scss">
.app {
  .app__main {
    background-color: white;
    width: 90%;
    margin: auto;
    height: 100vh;
    border-radius: 0.8rem;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  }
}

</style>
