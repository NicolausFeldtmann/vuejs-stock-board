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
        :logoPath="item.logoPath"
        :lastQuartalRev="revenueData[key] ? revenueData[key].slice(-1)[0] : 'N/A'">
      </BaseCard>

    </div>

    <div class="middleSection">
      <CourseBoard>
        
      </CourseBoard>

      <RevBreakDown>

      </RevBreakDown>
    </div>

    <div class="bottomSection">
      <NetIncome></NetIncome>
      <GrossMargin></GrossMargin>
      <RevGross></RevGross>
    </div>

  </div>

</template>

<script>
import BaseCard from './components/BaseCard.vue';
import CourseBoard from './components/CourseBoard.vue';
import GrossMargin from './components/GrossMargin.vue';
import NetIncome from './components/NetIncome.vue';
import RevBreakDown from './components/RevBreakDown.vue';
import RevGross from './components/RevGross.vue';

//import { stockService } from './services/stockService';
import { stockConfig } from './services/stockConfig';
import { stockService } from './services/stockService';

export default {
  name: 'App',
  components: {
    BaseCard,
    CourseBoard,
    RevBreakDown,
    NetIncome,
    GrossMargin,
    RevGross
  },
  data() {
    return {
      stockConfig,
      revenueData: {}
    };
  },
  async created() {
    for (const key in this.stockConfig) {
      const sheetName = this.stockConfig[key].sheetName;
      try {
        this.revenueData[key] = await stockService.getRevenue(sheetName);
      } catch (error) {
        console.error(`Failed to fetch revenue data for ${sheetName}`, error);
        this.revenueData[key] = ['N/A'];
      }
    }
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 96px 0px 96px 0px;
  width: 100%;
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
  width: 1240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.magSeven{
  background: radial-gradient(71.11% 100% at 50% 0%, #011b2e 14.6%, #01325533 100%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 0px 24px 0px;
  width: 1240px;
  height: 190px;
  border-radius: 16px;
}

.middleSection{
  display: flex;
  flex-direction: row;
  margin: 24px 0px 24px 0px;
  width: 1240px;
  justify-content: space-between;
}

.bottomSection{
  display: flex;
  flex-direction: row;
  width: 1240px;
  justify-content: space-between;
}
</style>
