<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div
          v-for="(project, index) in myProjects"
          :key="project.id"
          class="carousel-item"
          :class="{ active: activeIndex === index }"
      >
        <img :src="project.image"  :alt="project.title">
        <div class="carousel-caption">
          <h5>{{ project.title }}</h5>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>

    <button class="carousel-control prev" @click="prevSlide">‹</button>
    <button class="carousel-control next" @click="nextSlide">›</button>
  </div>

</template>

<script setup>
  import {ref} from "vue";
  import sqlImage from "@/components/projectsPhoto/sql.jpg";
  import travelImage from "@/components/projectsPhoto/travel.jpg";
  import whereWas from "@/components/projectsPhoto/whereWas.jpg";
  import zz from "@/components/projectsPhoto/zz.jpg";
  import gosling from "@/components/projectsPhoto/gosling.jpeg";

  const myProjects = ref([
    {
      id: 1,
      title: "SQL Course",
      description: 'Сайт для изучения SQL',
      image: sqlImage
    },
    {
      id: 2,
      title: "Travel in Russia",
      description: 'Красивые места в России',
      image: travelImage
    },
    {
      id: 3,
      title: "Where i was",
      description: 'Сайт для отметок где ты был',
      image: whereWas
    },
    {
      id: 4,
      title: "Знаки зодиака",
      description: 'Нейронка которая по фото говорит что за знак зодиака на картинке',
      image: zz
    },
    {
      id: 5,
      title: "А вообще я много чего делал",
      description: 'За время своей учебы в проге, я перепробовал много чего, Написать БД на джава - изи, ' +
          'написать нейронку для предсказания курса доллара - не изи, написть тг бота - сюдааааааа, ну и конечно 2д игры на юнити, куда без этого :) ',
      image: gosling
    },

  ]);

  const activeIndex = ref(0);
  const nextSlide = () => {
    activeIndex.value = (activeIndex.value + 1) % myProjects.value.length;
  };

  const prevSlide = () => {
    activeIndex.value = (activeIndex.value - 1 + myProjects.value.length) % myProjects.value.length;
  };

</script>

<style scoped>
.carousel {
  background: #f0f0f0;
  padding: 20px;
  margin: 20px auto;
  font-family: Courier, sans-serif;
  border-radius: 8px;
  width: 90%;
  height: 80%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.carousel-inner {
  position: relative;
  height: 700px;
  overflow: hidden;
}


.carousel-item {
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}


.carousel-item.active {
  display: flex;
}


.carousel-item img {
  max-width: 100%;
  max-height: 500px;
  margin-bottom: 15px;
  border-radius: 5px;
}


.carousel-caption {
  text-align: center;
  padding: 10px;
}


.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.3);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}

.carousel-control:hover {
  background: rgba(0,0,0,0.5);
}
</style>