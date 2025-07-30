<script lang="ts">
export default {
   data() {
    return {
      title2: 'Каталог',
      title3: 'Сравнение'
    }

  }
}
</script>

<template>
  <header>
    <h2>{{ title2 }}</h2>
    <h3>{{ title3 }}</h3>
    <a href=/lk.html><p>Личный кабинет</p> <img src="/img/user.svg" alt="User's logo" id="userlogo" width="20" height="20"></a>
  </header>
</template>

<style>
header {
    display: block;
    width: 100%;
    font-weight: bold;
  }

  header h2 {
    color: #0d5adc;
    display: inline-block;
    width: 70%;
  }

  header h3 {
    color: var(--color-heading);
    display: inline-block;
    text-transform: uppercase;
    width: 10%;
  }

  header p {
    display: inline-block;
  }

  header a {
    text-decoration: none;
    color: var(--color-text);
  }

  #userlogo {
    margin: 0 2em;
  }

</style>
