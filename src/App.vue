<template>

  <header>
    <div class="headerBar"></div>
    <h1 class="headerH1">The Magificent Seven Companies</h1>
  </header>

  <div class="content">

    <div class="magSeven">
      
      <BaseCard 
        v-for="(item, key) in stockConfig" 
        :key="key" 
        :name="item.name"
        :logoPath="item.logoPath">
      </BaseCard>

    </div>

  </div>

</template>

<script>
import BaseCard from './components/BaseCard.vue';
//import { stockService } from './services/stockService';
import { stockConfig } from './services/stockConfig';

export default {
  name: 'App',
  components: {
    BaseCard
  },
  data() {
    return {
      stockConfig,
      data: {}
    };
  },
  async created() {

  }
}
</script>

<style>
body{
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  box-sizing: border-box;
}

header{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 96px 0px 96px 0px;
}

.headerH1{
  color: white;
  margin: 0px 0px 0px 24px;
}

h1{
  color: white;
}

.headerBar{
  background-color: rgb(95, 218, 253);
  width: 96px;
  height: 32px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.content{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.magSeven{
  background: radial-gradient(71.11% 100% at 50% 0%, #011b2e 14.6%, #01325533 100%);
  display: flex;
  flex-direction: row;
  padding: 24px;
  width: 1240px;
  height: 190px;
  border-radius: 16px;
}
</style>
