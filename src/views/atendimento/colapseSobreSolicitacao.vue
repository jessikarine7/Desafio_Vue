<template>
<div>
  <div class="d-flex justify-space-between pa-2">
    <div class="d-flex align-center justify-center">
      <v-btn class="mr-2" icon dark  style="background: #004165">JB</v-btn>
      <div class="d-flex flex-column">
        <span class="spanNumero">Jonas Brother</span>
        <span class="spanNome">30087.5 AGRAMAOTO COMERCIO DE VEICULOS LTDA</span>
      </div>
    </div>

    <div class="d-flex flex-column justify-end" style="text-align: right">
      <span style="color: #4D4D4D; font-size: 14px">Recebimento</span>
      <span style="color: #4D4D4D; font-size: 14px">15/01/2023 18:30</span>
    </div>
  </div>

  <div class="d-flex flex-column pa-4 borda">
    <h3 class="spanNumero mb-2">Motor está falhando constantemente</h3>
    <span class="text">
      Lorem ipsum dolor sit amet. 
      Et rerum suscipit aut repellat 
      error hic veritatis fugit non 
      dolorem praesentium et quas 
      recusandae. Est ullam consequatur 
      sed sunt dolore est labore illum 
      ea corporis culpa sit quaerat internos. 
      Ut dignissimos quibusdam est exercitationem 
      modi et impedit dolorem! Et voluptas libero 
      nam dolor error cum nisi minus ea cumque 
      reprehenderit cum maiores nihil ab eligendi 
      aliquid. Et fuga velit aut corporis cumque 
      et magnam ipsum? Est temporibus aspernatur 
      sed repudiandae voluptatem est quia porro 
      cum distinctio laboriosam non rerum expedita 
      aut quia voluptatem. Et beatae incidunt aut 
      dolor consequatur a dolor quis sit omnis 
      neque et quod magni. Et debitis blanditiis 
      est perspiciatis optio ut eveniet ipsam. 
    </span>
  </div>

  <div class="borda d-flex justify-space-between px-3 py-2">
    <div class="d-flex align-center">
      <v-btn class="mr-2" icon dark style="background: #971E27" >
        <v-img 
          :src="require('@/assets/agrale-logo-branca-small.png')" 
          max-width="25" 
          max-height="25"
        ></v-img>
      </v-btn>
      <span class="spanNome">Isaque Nilton</span>
    </div>

    <div class="d-flex flex-column justify-end" style="text-align: right">
      <span style="color: #4D4D4D; font-size: 14px">Análise inicial</span>
      <span style="color: #4D4D4D; font-size: 14px">15/01/2023 18:30</span>
    </div>
  </div>

  <div class="borda d-flex justify-space-between px-3 py-6">
    <div class="d-flex flex-column align-start">
      <span class="spanNome">Categoria de Atendimento</span>
      <span class="spanNumero">Atendimento Técnico</span>
    </div>

    <div class="d-flex flex-column justify-end" style="text-align: right">
      <v-btn icon @click="atendimentoTecnico == true">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </div>

    <div v-if="atendimentoTecnico = true">
      <v-select
        
        label="Atendimento Técnico"
      ></v-select>
    </div>
  </div>

  <div class="borda d-flex justify-space-between px-3 py-6">
    <div class="d-flex flex-column align-start">
      <span class="spanNome">Grupo de Ocorrência</span>
      <span class="spanNumero">Carroceria, Eixo Dianteiro, Eixo Traseiro e Motor, Item 02</span>
    </div>

    <div class="d-flex flex-column justify-end" style="text-align: right">
      <v-btn icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </div>
  </div>

  <div class="d-flex flex-column pb-2" style="width: 100%">
    <h3 class="spanNumero px-3 pt-3 pb-2">Arquivos da Solicitação</h3>

    <div class="d-flex">
      <div class="d-flex px-3" style="width: 50%">
        <v-img 
          class="mr-5" 
          :src="require('@/assets/imagens/arquivo1.png')" 
          max-width="100" 
          max-height="100"
        ></v-img>

        <div class="d-flex flex-column">
          <span style="font-size: 13px; color: #4D4D4D">Comentário</span>
          <span class="spanNome">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
      </div>

      <div class="d-flex px-3" style="width: 50%">
        <v-img  
          class="mr-5" 
          :src="require('@/assets/imagens/arquivo2.png')" 
          max-width="100" 
          max-height="100"
        ></v-img>

        <div class="d-flex flex-column">
          <span style="font-size: 13px; color: #4D4D4D">Comentário</span>
          <span class="spanNome">Acredito que possa ter relação com a bomba</span>
        </div>
      </div>
    </div>
  </div>
 
</div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'; 

export default class App extends Vue {

  atendimentoTecnico = false;

}
</script>

<style scoped>
.borda{
  border-bottom: 1px solid #E6E6E6;
}
.tituloColapse{
  color:#4D4D4D;
  font-weight:700;
  font-size:14px;
}
.spanNumero{
  font-size: 15px; 
  font-weight: 700;
  color:#1A1A1A;
}
.spanNome{
  color: #1A1A1A;
  font-size: 15px
}
.text{
  color: #8C8C8C;
  font-size: 12px;
  text-align: justify;
}
.btnTop >>> .v-btn--round {
  border-radius: 25% !important;
}
.v-btn--outlined {
  border: thin solid #E6E6E6 !important;
}
::v-deep .v-expansion-panel-content__wrap{
  padding: 0px 0px 0px !important;
}
.v-expansion-panel-header{
  padding: 10px !important;
}
.v-expansion-panel--active > .v-expansion-panel-header{
  min-height: 0px !important;
}
</style>