<template>
<div class="d-flex justify-space-between align-center flex-column menu">
  <div>
    <div text class="d-flex align-center flex-column pa-2 mt-3">
      <v-icon style="font-size: 25px" color="#4D4D4D">mdi-home</v-icon>
      <span class="font">{{labelHome}}</span>
    </div>

    <div class="mt-4 d-flex align-center flex-column pa-2">
      <v-icon style="font-size: 25px" color="#4D4D4D">mdi-account-hard-hat</v-icon>
      <span class="font" style="text-align: center">{{labelAssistencia}}</span>
    </div>

    <div class="mt-4 d-flex align-center flex-column pa-2">
      <v-btn :color="corButtonAdm" class="mb-1" style="border-radius: 10px">
        <v-icon style="font-size: 23px" color="white">mdi-cogs</v-icon>
      </v-btn>
      <span class="font">{{labelButtonAdm}}</span>
    </div>
  </div>

  <v-btn fab class="mb-6 mt-4 d-flex align-center" :color="corButtonIN">
    <span style="color: white; font-size: 18px">{{labelButtonIN}}</span>
  </v-btn>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  @Prop({ type: String, default: 'Home' }) labelHome: string;
  @Prop({ type: String, default: 'Assistência' }) labelAssistencia: string;
  @Prop({ type: String, default: '#971E27' }) corButtonAdm: string;
  @Prop({ type: String, default: 'Administração' }) labelButtonAdm: string;
  @Prop({ type: String, default: 'IN' }) labelButtonIN: string;
  @Prop({ type: String, default: '#971E27' }) corButtonIN: string;
}
</script>

<style scoped>
.v-btn--fab.v-size--default {
  height: 30px !important; 
  width: 30px !important;
}
.font{
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
} 
.menu{
  width: 90px; 
  height: 100%; 
  z-index: 99; 
  border-right: solid 2px #d3d3d388
}
</style>