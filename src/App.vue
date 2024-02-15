<template>
  <v-app>
    <div class="d-flex align-start flex-grow-1">
      <menuLateral/>
      <div class="white d-flex flex-grow-1 flex-row flex-wrap">
        <menuSuperior/>
        <!-- <solicitacaoAtendimento/> -->
        <sobreSolicitacao/>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import usuarios from './views/usuarios/usuarios.vue';
import menuLateral from './components/menuLateral.vue';
import menuSuperior from './components/menuSuperior.vue';
// import solicitacaoAtendimento from './views/atendimento/solicitacaoAtendimento.vue'
import sobreSolicitacao from './views/atendimento/sobreSolicitacao.vue'

@Component({                            
  components: {
    usuarios,
    menuLateral,
    menuSuperior,
    // solicitacaoAtendimento,
    sobreSolicitacao
  },
})

export default class App extends Vue {
  name: 'app'
}

</script>

<style>
</style>
