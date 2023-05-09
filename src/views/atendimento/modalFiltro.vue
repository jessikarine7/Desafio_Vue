<template>
<div>
  <v-dialog v-model="displayFiltro" width="800px">
    <div class="elevation-2 d-flex justify-space-between pa-4" style="background: #F5F5F5">
      <h1>sKLMssss</h1>
    </div>
  </v-dialog>
</div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'; 

export default class App extends Vue {
  @Prop({ type: Boolean }) displayFiltro: boolean;
}
</script>

