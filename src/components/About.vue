<script setup>
import {ref} from 'vue';

const aboutText = ref('');
const fs = require('fs');
const readFile = async () => {
  try{
    const response = await fetch('./about.txt');
    aboutText.value = await response.text();
  }catch(error){
    console.log(error)
  }
}
readFile();
</script>

<template>
  <div class="about--content" v-html="aboutText"></div>

</template>

<style scoped lang="scss">
.about--content {
  white-space: pre-line;
  line-height: 1.6;
  padding: 20px;
}
</style>