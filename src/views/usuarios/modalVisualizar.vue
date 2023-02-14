<template>
<div>
  <!-- modal manutenção -->
  <ModalAddEdit
    :display="displayModalAddEdit"
    @closeModal="displayModalAddEdit = false"
  ></ModalAddEdit>

  <v-dialog v-model="displayVisualizar" width="800px">
    <div class="elevation-2 d-flex justify-space-between pa-4" style="background: #F5F5F5">
      <div class="d-flex align-center">
        <h1 class="titulo mr-4">Usuário Agrale 015</h1>
        <v-btn               
          hide-details
          dense 
          :color="this.status === true ? '#107154' : '#CCCCCC'"
          v-model="this.status"
          class="button"
        >
          <span :style="{color: this.status === true ? '#fff' : '#4D4D4D'}">
            {{this.status === true ? 'Ativo' : 'Inativo'}}
          </span>
        </v-btn>
      </div>

      <v-icon 
        @click="$emit('closeModal')" 
        color="#1A1A1A"
        style="border-radius: 50%"
      >mdi-close</v-icon>
    </div>

    <div class="white d-flex flex-column pa-5 justify-space-between" style="height:400px">
      <v-form class="pa-4"  style="width: 100%; border: solid 1px #E6E6E6; border-radius: 10px" >
        <div class="d-flex pb-10">
          <v-input
            label="Nome Completo"
            filled
            class="mr-4 formAdd"
            style="width: 50%"
            dense
            :messages="['Isaque Nilton', 'color: #4D4D4D']"
          ></v-input>

          <v-input
            class="formAdd"
            label="CPF(opcional)"
            filled
            style="width: 50%;"
            dense
            :messages="['000.000.000-00']"
          ></v-input>
        </div>

        <v-row style="border: solid 0.1px #E6E6E6"></v-row>

        <div class="d-flex pt-10">
          <v-input
            label="E-mail"
            filled
            class="mr-4 formAdd"
            style="width: 50%"
            dense
            :messages="['inilton@agrale.com.br', 'color: #4D4D4D']"
          ></v-input>

          <v-input
            label="Perfil de Usuário"
            filled
            style="width: 50%"
            class="formAdd"
            dense
            :messages="['Coordenador Assistência Técnica', 'color: #4D4D4D']"
          ></v-input>
        </div>
      </v-form>

      <div class="d-flex justify-space-between justify-end">
        <v-btn 
          text 
          style="text-transform:none;" 
          @click="$emit('closeModal')"
        >Fechar</v-btn>

        <v-btn 
          outlined
          color="Editar" 
          style="text-transform:none; border-radius: 9px"
          @click="abrirModalEditar"
        >
          <v-icon 
            style="font-size: 16px"  
            class="mr-2"
          >mdi-pencil</v-icon>

          <span>Editar</span>  
        </v-btn>
      </div>
    </div>
  </v-dialog>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import ModalAddEdit from './modalAddEdit.vue' 

@Component({
  components:{ModalAddEdit}
})

// interface cpf {
//   cpf: string,
// }

export default class App extends Vue {
  @Prop({ type: Boolean }) displayVisualizar: boolean;

  displayModalAddEdit = false;
  status = true;

  abrirModalEditar(){
    this.displayModalAddEdit = true
    this.$emit('closeModal')
  }
}
</script>

<style scoped>
.formAdd{
  /* background: #F5F5F5; */
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  /* color: #4D4D4D; */
}
.titulo{
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  letter-spacing: -1px;
}
.button {
  border-radius: 8px !important;
  text-transform: none !important; 
}
</style>