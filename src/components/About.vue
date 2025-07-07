<script setup>
import {ref} from 'vue';

const aboutText = ref('');
const readFile = async () => {
  try{
    const response = await fetch('./src/components/text/about.txt');
    aboutText.value = await response.text();
  }catch(error){
    console.log(error)
  }
}
readFile();

console.log(aboutText);
</script>

<template>
  <div class="about__content">
    <div class = "about__container">
      <img src = "./icons/meme.jpg" class = 'about__container--image'>
      <p class = "about__container--text">{{aboutText}}</p>
    </div>
  </div>

</template>

<style scoped lang="scss">
.about__content {
  white-space: pre-line;
  line-height: 1.6;
  padding: 20px;
}

.about__container{
  width:100%;
  height:50%;
  margin-top: 100px;
  border-radius: 0.8rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  display: flex;
}

.about__container--text{
  margin-left: 10px;
  font-size: 16px;
  font-family: Courier, sans-serif;
}
.about__container--image{
  width:20%;
  height: 20%;
  margin: auto;
}
</style>