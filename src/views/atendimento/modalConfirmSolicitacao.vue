<template>
<div>
  <!-- modal de confirmação da Solicitação -->
  <v-dialog v-model="displayModalConfirm" width="340px" class="rounded-lg">
    <div class="white rounded-lg" style="height:240px">
      <v-container class="d-flex justify-center mb-4 rounded-b-0 containerIcon">
        <v-icon color="#F7D002" style="font-size:45px">mdi-alert</v-icon>
      </v-container>
      
      <v-container class="d-flex justify-center flex-column">
        <span class="mb-4 px-6 text">
          Você irá <b>concluir</b> a <b>Solicitação de 
          Atendimento.</b> Esta ação não pode ser 
          desfeita. Deseja prosseguir?
        </span>

        <v-container class="d-flex justify-space-between pa-4">
          <v-btn class="btn" text @click="modalConfirm=false">Cancelar</v-btn>
          <v-btn class="btn" dark color="#F7D002">Concluir Solicitação</v-btn>
        </v-container>
      </v-container>
    </div>
  </v-dialog>
</div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'; 

export default class App extends Vue {
  @Prop({ type: Boolean }) displayModalConfirm: boolean;
  modalConfirm = true
}
</script>

<style scoped>
.btn{
  text-transform: capitalize; 
  font-size: 14px;
}
.text{
  text-align: center; 
  font-size:14px
}
.containerIcon{
  background: #F6E9B9DB; 
  height:80px;
}
</style>