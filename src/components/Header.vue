<script setup lang="js">
</script>

<template>
  <header class="header">
      <div class="header__description">
        <img src="./icons/logo.png" alt="logo" class="header__logo">
        <h2>Vue Portfolio</h2>
        <p>Портфолио начинающего фронт разработчика</p>
      </div>


    <ul class="header__nav-list">
      <li class="header__nav-item">
        <img src="./icons/about.png" alt="about" class="nav-icon">
        <button>О себе</button>
      </li>

      <li class="header__nav-item">
        <img src="./icons/projects.png" alt="projects" class="nav-icon">
        <button>Личные проекты и опыт</button>
      </li>

      <li class="header__nav-item">
        <img src="./icons/goal.png" alt="goal" class="nav-icon">
        <button>Цели на будущее</button>
      </li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid slategray;
  padding: 10px;
}

.header__description {
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: Monotype Corsiva;
}

.header__logo {
  width: 250px;
}

.header__nav-list {
  display: flex;
  gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.header__nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.nav-icon {
  width: 30px;
  height: 30px;
}

h2 {
  margin: 0 auto;
  font-size: 1.5rem;
}

p {
  margin: 0 auto;
  font-size: 0.9rem;
}

button {
  background: none;
  border: none;
  padding: 5px 10px;
  font-family: inherit;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #333;
  border-radius: 4px;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}
</style>

