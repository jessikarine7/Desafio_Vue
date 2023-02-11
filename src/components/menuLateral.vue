<template>
  <div class="white elevation-1 d-flex justify-space-between align-center flex-column" style="width: 110px; height: 100%; z-index: 99">
    <div>
      <div text class="d-flex align-center flex-column pa-2 mt-6">
        <v-icon style="font-size: 30px" color="#4D4D4D">mdi-home</v-icon>
        <span class="font">Home</span>
      </div>

      <div class="mt-4 d-flex align-center flex-column pa-2">
        <v-icon style="font-size: 30px" color="#4D4D4D">mdi-account-hard-hat</v-icon>
        <span class="font">Assistência</span>
        <span class="font">Técnica</span>
      </div>

      <div class="mt-4 d-flex align-center flex-column pa-2">
        <v-btn  color="#971E27" class="mb-1" style="border-radius: 10px">
          <v-icon style="font-size: 23px" color="white">mdi-cogs</v-icon>
        </v-btn>
        <span class="font">Administração</span>
      </div>
    </div>

    <v-btn fab class="mb-6 d-flex align-center"  color="#971E27">
      <span style="color: white; font-size: 18px">IN</span>
    </v-btn>

  </div>
</template>

<script lang="ts">
import "mdi-icons/css/materialdesignicons.min.css";

export default {

}
</script>

<style scoped>
.v-btn--fab.v-size--default {
  height: 30px !important; 
  width: 30px !important;
}

/* .chip >>> .v-chip__content{
  flex-direction: column !important;
}
.v-chip.v-size--default {
  border-radius: 0px;
  font-size: 14px;
  max-height: 70px !important; 
}*/
.font{
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
} 
</style>