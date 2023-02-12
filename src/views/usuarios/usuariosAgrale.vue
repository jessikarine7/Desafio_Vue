<template>
<div class="pa-2 d-flex flex-grow-1 flex-column">
  <h1 class="pa-3" style="font-size: 25px">Usuários Agrale</h1> 

  <div class="d-flex justify-end mr-3 mb-2">
    <v-btn outlined class="mr-2 button">
      <v-icon style="font-size: 20px">mdi-magnify</v-icon>
      <span>Pesquisa</span> 
    </v-btn>

    <v-btn @click="modalAdd = true" class="button" color="#971E27">
      <span style="color: white">Adicionar</span>
    </v-btn>
  </div>

  <v-dialog v-model="modalAdd" width="700px">
    <div class="d-flex justify-space-between pa-3 elevation-1" style="width:700px;background: #5A5353">
      <h1 style="font-size: 20px">Criar Usuário Agrale</h1>
      <v-icon @click="modalAdd = false">mdi-close</v-icon>
    </div>

    <div class="white d-flex pa-3 elevation-1" style="height:400px">
      <v-form  style="width: 100%">
        <div class="d-flex">
          <v-text-field
            label="Nome Completo"
            filled
            class="mr-4"
            style="width: 50%"
          ></v-text-field>
          <v-text-field
            label="CPF"
            filled
            style="width: 50%"
          ></v-text-field>
        </div>

        <div class="d-flex">
          <v-text-field
            label="E-mail"
            filled
            class="mr-4"
            style="width: 50%"
          ></v-text-field>
          <v-select
            label="Perfil de Usuário"
            filled
            style="width: 50%"
          ></v-select>
        </div>
      </v-form>
    </div>
  </v-dialog>

  <div class="pa-3">
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:item[opcoes]>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon  v-bind="attrs" v-on="on">
              <v-icon >mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>

          <v-list class="d-flex flex-column" dense>
            <v-list-item>
              <v-list-item-title>Visualizar</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Editar</v-list-item-title>
            </v-list-item>

            <v-list-item>
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
// import modalAdd from './modalAdd.vue' 

interface headerItem {
  text: string,
  value: string,
}

@Component({
  // components:{modalAdd}
})

export default class App extends Vue {
  // @Prop(Array) headers: string[];
  // headers: number[] = [];

  modalAdd = false;

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
  border-radius: 7px !important;
  text-transform: none !important; 
  border: solid 1px #d3d3d3da;
  color: #5A5353;
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
</style>