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
  <!--<hr width="100%">-->
</template>

<style>
header {
  display: block;
  border-bottom: 1px solid #A6A5A9;
  font-weight: bold;
  width: 100%;
    /* Rectangle 48 width: 1442px;*/
box-sizing: border-box;
height: 101px;
position: absolute;
left: -1px;
top: -1px;
  }

  header h2 {
    color: #0d5adc;
    /* Каталог     display: inline-block; width: 70%; */
position: absolute;
width: 241px;
height: 18px;
left: 165px;
top: 41px;

font-weight: 900;
font-size: 18px;
line-height: 21px;
letter-spacing: 0.05em;
  }

  header h3 {
    display: inline-block;
    text-transform: uppercase;
    width: 10%;
    /* Сравнение
    color: #3B4157;
background: #F4F9FC;
height: 1691px;
width: 1440px;
height: 14px;
width: 70px;
left: 1020px;
left: 1500px;
top: 43px;
*/
position: absolute;
left:70%;
top: 35%;
  }

  header p {
    display: inline-block;
    /* Личный кабинет width: 98px;
height: 14px;
left: 1138px;
top: 43px;
left: 1670px;
top: 50px;
*/
position: absolute;
font-weight: 900;
font-size: 12px;
line-height: 14px;
/* identical to box height
color: #3B4157;
 */
letter-spacing: 0.02em;
left:80%;
top: 45%;
  }

  header a {
    text-decoration: none;
    color: var(--color-text);
  }

  #userlogo {
    margin: 0 2em;
/* Vector
background: #3B4157;
right: 11.46%;
top: 2.37%;
bottom: 96.45%;
 */
position: absolute;
left: 87.15%;
top: 45%;
  }

</style>
