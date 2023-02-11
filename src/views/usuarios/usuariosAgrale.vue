<template>
<div class="pa-2 d-flex flex-grow-1 flex-column">
  <h1 class="pa-3">Usuários Agrale</h1> 

  <div class="d-flex justify-end mr-3 mb-2">
    <v-btn outlined class="mr-2">
      <v-icon>mdi-magnify</v-icon>
      Pesquisa
    </v-btn>

    <v-btn color="#971E27">
      <span style="color: white">Adicionar</span>
    </v-btn>
  </div>

  <div class="pa-3">
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    ></v-data-table>
  </div>

</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface headerItem {
  text: string,
  value: string,
}

@Component
export default class App extends Vue {
  // @Prop(Array) headers: string[];

  // headers: number[] = [];

  headers = [
    { text: 'Código', value: 'codigo' },
    { text: 'Nome Completo', value: 'nome' },
    { text: 'E-mail', value: 'email' },
    { text: 'Perfil do Usuário', value: 'perfil' },
    { text: 'Situação', value: 'situacao' },
  ];

  desserts = [
    {
      codigo: 159,
      nome: 'Jéssica Karine Santos',
      email: 'jessica.santos@keyworks.com.br',
      perfil: 'Desenvolvedora',
      situacao: 'Ativo',
    },
  ];
        
  mounted() {
    // this.headers = [1,2,3];
    console.log(this.headers);
  }
}
</script>