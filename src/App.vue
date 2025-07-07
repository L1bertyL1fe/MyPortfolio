<template>
  <div class="app">
    <main class="app__main">
      <Header />
      <router-view />
    </main>
  </div>

  <Footer/>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped lang="scss">
.app {
  .app__main  {
    background-image: url('./assets/backImageForCard.png');
    width: 90%;
    margin: auto;
    min-height: 100vh;
    border-radius: 0.8rem;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  }
}

</style>