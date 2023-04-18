<template>
<div>
  <v-alert
    dismissible
    type="success"
    width="30%"
    color="#107154"
    class="alerts"
    v-show="alertSuccess"
    transition="scroll-x-reverse-transition"
  >
    {{ alertSuccessText }}
  </v-alert>

  <v-dialog v-model="displayExcluir" width="340px">
    <div class="white">
      <div class="d-flex justify-center" style="background: #FFD3D3; height: 90px">
        <v-icon 
          class="iconModalExcluir" 
          color="#E10000"
        >mdi-alert-octagon</v-icon>
      </div>

      <div class="pa-3 d-flex justify-center">
        <span 
          class="tituloExcluir" 
          style="text-align: center;"
        >
          Tem certeza de que deseja excluir este <br> 
          usuário? Essa ação não pode ser revertida.
        </span>
      </div>

      <div class="px-3 pb-3 mt-1 d-flex justify-space-between">
        <!-- <v-btn 
          class="btn btnExcluir" 
          text 
          @click="fecharModal()"
        >Cancelar</v-btn> -->

        <!-- <v-btn 
          class="btn btnExcluir" 
          dark 
          color="#E10000" 
          @click="deletarUsuario(pegarUsuario.id)"
        >Excluir</v-btn> -->
      </div>
    </div>
  </v-dialog>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import { mapActions,mapGetters } from "vuex";

@Component({
  // methods:mapActions([
  //   "getUsuario",
  //   "deleteUsuario",
  // ]),
  // computed: mapGetters([
  //   "pegarUsuario",
  // ]),
})

export default class App extends Vue {
  @Prop({ type: Boolean }) displayExcluir: boolean;
  // getUsuario!:() => Promise<[]>
  // deleteUsuario!:(id:number) => []
  // pegarUsuario!:() => (object)

  id: number; 
  displayModalExcluir = false; 
  alertSuccess = false;
  alertSuccessText = '';

  // async deletarUsuario(id:number){
  //   this.deleteUsuario(id)
  //   await this.getUsuario();
  //   this.fecharModal()

  //   this.alertSuccess = true;
  //   this.alertSuccessText = 'Usuário [e-mail do usuário] excluído com sucesso.';
  //   setTimeout(() => {
  //     this.alertSuccess = false;
  //   }, 5000);

  //   window.location.reload();
  // }
  fecharModal(){
    this.$emit('closeModal');
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_base.scss";
</style>