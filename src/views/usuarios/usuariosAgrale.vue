<template>
<div class="pa-2 d-flex flex-grow-1 flex-column">
  <h1 class="pa-3" style="font-size: 25px">Usuários Agrale</h1> 

  <div class="d-flex justify-end mr-3 mb-2">
    <v-btn outlined class="mr-2 button">
      <v-icon style="font-size: 20px">mdi-magnify</v-icon>
      <span>Pesquisa</span> 
    </v-btn>

    <v-btn @click="displayModalAddEdit = true" class="button" color="#971E27">
      <v-icon color="white" style="font-size: 20px">mdi-plus</v-icon>
      <span style="color: white">Novo</span>
    </v-btn>
  </div>

  <!-- modal manutenção -->
  <ModalAddEdit
    :display="displayModalAddEdit"
    @closeModal="displayModalAddEdit = false"
  ></ModalAddEdit>

  <!-- modal Visualização -->
  <ModalVisualizar
    :displayVisualizar="displayModalVisualizar"
    @closeModal="displayModalVisualizar = false"
  ></ModalVisualizar>

  <!-- modal de excluir -->
  <v-dialog v-model="modalExcluir" width="340px">
    <div class="white">
      <div class="d-flex justify-center" style="background: #FFD3D3; height: 90px">
        <v-icon style="font-size: 50px" color="#E10000">mdi-alert-octagon</v-icon>
      </div>

      <div class="pa-3 d-flex justify-center">
        <span class="tituloExcluir" style="text-align: center;">Tem certeza de que deseja excluir este <br> 
        usuário? Essa ação não pode ser revertida.</span>
      </div>

      <div class="px-3 pb-3 mt-1 d-flex justify-space-between">
        <v-btn class="buttonExcluir" text @click="modalExcluir = false">Cancelar</v-btn>
        <v-btn class="buttonExcluir" dark color="#E10000">Excluir</v-btn>
      </div>
    </div>
  </v-dialog>

  <div class="pa-3">
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:[`item.situacao`] = {item}>
        <v-btn
          :color="item.situacao == 'Ativo' ? '#107154' : '#CCCCCC'"
          dark
          style="text-transform:none; border-radius: 9px"
        >
          <span>{{item.situacao}}</span>
        </v-btn>
      </template>

      <template v-slot:[`item.opcoes`]>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon  v-bind="attrs" v-on="on">
              <v-icon >mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>

          <v-list class="d-flex flex-column" dense>
            <v-list-item @click="displayModalVisualizar = true"> 
              <v-icon style="font-size: 20px" class="mr-2">mdi-eye</v-icon>
              <v-list-item-title>Visualizar</v-list-item-title>
            </v-list-item>

            <v-list-item @click="displayModalAddEdit = true">
              <v-icon style="font-size: 20px" class="mr-2">mdi-pencil</v-icon>
              <v-list-item-title>Editar</v-list-item-title>
            </v-list-item>

            <v-list-item @click="modalExcluir = true">
              <v-icon style="font-size: 20px" class="mr-2">mdi-delete</v-icon>
              <v-list-item-title>Excluir</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template> 
    </v-data-table>
  </div>

</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ModalAddEdit from './modalAddEdit.vue' 
import ModalVisualizar from './modalVisualizar.vue'

interface headers {
  text: string,
  value: string,
}

@Component({
  components:{
    ModalAddEdit,
    ModalVisualizar
  }
})

export default class App extends Vue {
  // @Prop(Array) display: string[];
  // headers: number[] = [];

  switch = true;
  displayModalAddEdit = false;
  modalExcluir = false;
  displayModalVisualizar = false;

  headers = [
    { text: 'Código', value: 'codigo' },
    { text: 'Nome Completo', value: 'nome' },
    { text: 'E-mail', value: 'email' },
    { text: 'Perfil do Usuário', value: 'perfil' },
    { text: 'Situação', value: 'situacao' },
    { text: '', value: 'opcoes' },
  ];

  desserts = [
    {     
      codigo: 159,
      nome: 'Jéssica Karine Santos',
      email: 'jessica.santos@keyworks.com.br',
      perfil: 'Desenvolvedora',
      situacao: 'Ativo',
      opcoes: '',
    },
  ];
        
  mounted() {
    // this.headers = [1,2,3];
    console.log(this.headers);
  }
}
</script>

<style scoped>
.button {
  border-radius: 8px !important;
  text-transform: none !important; 
  border: solid 1px #d3d3d3da;
  color:#4D4D4D;
}
.buttonExcluir {
  border-radius: 8px !important;
  text-transform: none !important; 
  width: 130px;
}
.tituloExcluir{
  font-family:  'Verdana';
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #1A1A1A;
}
.v-btn:not(.v-btn--round).v-size--default {
  padding: 0 10px !important;
}
.v-list-item:hover{
  background-color:  #5350501c !important;
}
.v-list{
  padding: 0px 0 !important; 
}
.v-input--selection-controls {
  margin-top: 0px !important; 
  padding-top: 0px !important;
}
</style>