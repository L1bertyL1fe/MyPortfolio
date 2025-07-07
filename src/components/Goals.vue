<template>
  <div class="goals__container">
    <h2 class="goals__title"> Мои цели🚀</h2>

    <div class = 'goals__track'>
      <div v-for = "(goal, index) in goals"
           :key = index
           class="goal__card">
        <img src = './icons/delete.png' @click="deleteGoal(index)" class = 'goal__delete' alt="delete">
        <div class = 'goal__title'>{{goal.title}}</div>
        <div class = 'goal__description'>{{goal.description}}</div>
      </div>
    </div>
    <button @click = 'showWindow = true' class = 'goals__addCard'>+</button>
  </div>

  <div v-if = 'showWindow' class = 'addWindow'>
      <div class = 'addWindow__content'>
          <h3>Добавь новую цель и я её достигну</h3>
          <input v-model="newTitle" placeholder="Название цели" class = 'addWindow__content-input'>
          <textarea v-model="newDescription" placeholder="Описание цели" class = 'addWindow__content-textarea'></textarea>
        <div class="addWindow-buttons">
          <button @click = 'addNewGoal' class = 'addWindow__content-addButton'>Добавить</button>
          <button @click = 'showWindow = false' class = "addWindow__content-cancelButton">Отмена</button>
        </div>
      </div>
  </div>

</template>

<script setup>
import {ref} from "vue";


const goals = ref([
  {
    title: "VUE 📚",
    description: 'Изучить и освоить VUE',
  },
  {
    title: "Пройти стажировку в СД 🎓",
    description: 'У меня огромное желание пройти стажировку в СД и для этого я буду работать и изучать что-то новое каждый день',
  },
  {
    title: "Стать Fullstack 👨‍💻",
    description: 'В будущем я хочу быть Fullstack разработчиком и благодаря СД я изучаю что происходит со стороны front',
  },
  {
    title: "Быть счастливым ❤️‍🔥",
    description: 'Кайфовать от того что ты делаешь, именно этим я и занимаюсь',
  }
]);
const newTitle = ref('');
const newDescription = ref('');
const showWindow = ref(false)
const addNewGoal = () => {
  if((newTitle.value.trim() && newDescription.value.trim())){
    goals.value.push({
      title: newTitle.value,
      description: newDescription.value
    })
  }
  newTitle.value = '';
  newDescription.value = '';
  showWindow.value = false;
};


const deleteGoal = (index) => {
  goals.value.splice(index, 1);
};
</script>

<style scoped>
.goals__container {
  position: relative;
  padding-bottom: 400px;
}

.goals__title{
  text-align: center;
  font-size: 28px;
  color: black;
  position: relative;
  font-family: Courier,sans-serif ;
}

.goals__track {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 10px;
}

.goal__card{

  background-color: white;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #42b983;
  position: relative;
  padding: 15px;
}
.goal__delete{
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
}

.goal__delete:hover {
  transform: scale(1.4);
}
.goal__title{
  text-align: center;
  margin-bottom: 5px;
  font-family: Courier,sans-serif;
  font-weight: bold;
}

.goal__description{
  font-family: Courier,sans-serif;
  margin-left: 10px;
  line-height: 1.5;
}

.goal__card:hover{
  background-color: #f0f0f0;
  transform: translateY(-6px);
}

.goals__addCard{
  position: absolute;
  bottom: 0;
  right: 0;
}

.goals__addCard {
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #42b983;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.goals__addCard:hover {
  transform: scale(1.1);
}

.addWindow{
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.addWindow__content {
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}
.addWindow__content h3{
  text-align: center;
  margin-bottom: 20px;
  font-family: Courier, sans-serif;
}

.addWindow__content-input,
.addWindow__content-textarea{
  width: 90%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 6px;
  font-family: Courier, sans-serif;
}

.addWindow__content-textarea{
  min-height: 120px;
}

.addWindow-buttons{
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.addWindow__content-addButton{
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: Courier, sans-serif;
}

.addWindow__content-cancelButton {
  padding: 10px 20px;
  background-color: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: Courier, sans-serif;
}

.addWindow__content-addButton:hover {
  background-color: #3aa876;
}

.addWindow__content-cancelButton:hover {
  background-color: #e0e0e0;
}
</style>