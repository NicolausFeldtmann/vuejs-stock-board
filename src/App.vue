<template>
  <div>
    <BaseCard>
      <h1>Überschrift</h1>
      <p>Dies ist ein Beispieltext, der in der Card-Komponente eingefügt wird.^</p>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from './components/BaseCard.vue';
import { stockService } from './services/stockService';

export default {
  name: 'App',
  components: {
    BaseCard
  },
  async created() {
    this.data = await stockService.fetchData('$AAPL')
    console.log('Loaded data', this.data);
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
  padding: 100px;
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  box-sizing: border-box;
}
</style>
