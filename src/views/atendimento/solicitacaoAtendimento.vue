<template>
<div class="pa-6" style="width: 100%">

  <!-- <ModalFiltro
    :displayFiltro="displayModalFiltro"
  ></ModalFiltro> -->

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
      width="380"
    >
      <v-list-item class="d-flex flex-column justify-space-between">
        <v-list-item-content class="d-flex justify-start">
          <v-list-item-title class="d-flex justify-space-between justify-center">
            <span>Filtros</span> 
            <v-icon style="font-size:17px">mdi-close</v-icon>
          </v-list-item-title>

          <v-form class="d-flex flex-column mt-6">
            <v-select 
              filled
              chips
              dense
              multiple        
              label="Responsável Agrale"
              :items="['Responsável 1', 'Responsável 2']"
              clearable
              class="mb-2"
            ></v-select>

            <v-select 
              filled
              chips
              dense
              multiple
              label="Linha de Produto"
              :items="['Caminhão', 'Chassi']"
              clearable
              class="mb-2"
            ></v-select>

            <v-select 
              filled
              chips
              dense
              multiple
              label="Grupo de Ocorrência"
              :items="['Carroceria', 'Eixo dianteiro']"
              clearable
              class="mb-2"
            ></v-select>

            <span>Pesquisar entre período:</span>

            <v-text-field
              type="date"
              filled
              dense
              label="Data Inicial"
              class="mt-2 mb-2"
            ></v-text-field>

            <v-text-field
              type="date"
              filled
              dense
              label="Data Final"
              class="mt-2 mb-2"
            ></v-text-field>

          </v-form>

          <v-container class="d-flex justify-space-between align-end">
            <v-btn style="text-transform: capitalize;" text>Cancelar</v-btn>
            <v-btn style="text-transform: capitalize;" dark color="#CD202C">
              <v-icon class="mr-1" style="font-size:17px">mdi-filter</v-icon>
              <span>Aplicar Filtros</span> 
            </v-btn>
          </v-container>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

  <h3>Solicitações de Atendimento</h3>

  <div style="width: 100%" class="py-2 d-flex">
    <v-card outlined label class="card card1 px-4 pt-2 mr-4">
      <span class="spanNome">Todas as Solicitações</span>
      <span class="spanNumero">272</span>  
    </v-card>

    <v-card outlined label class="card card2 px-4 pt-2 mr-4">
      <span class="spanNome">Pendente Agrale</span>
      <span class="spanNumero">20</span>  
    </v-card>

    <v-card outlined label class="card card3 px-4 pt-2 mr-4">
      <span class="spanNome">Pendente Distribuidor</span>
      <span class="spanNumero">250</span>  
    </v-card>

    <v-card outlined label class="card card4 px-4 pt-2">
      <span class="spanNome">Concluída</span>
      <span class="spanNumero">5</span>  
    </v-card>
  </div>

  <div class="d-flex justify-end mt-2 mb-4" style="width: 100%">
    <div class="vazio" style="width: 120%"></div>

    <v-text-field 
      name="pesquisa"
      class="mr-2 pesquisa"
      @blur="pesquisa = false"
      @click="pesquisa = true"
      :style="pesquisa == true ? 'width: 130%' : 'Width:20%'"
      v-model="search"
      @input="pesquisaTabela"
      outlined 
      clearable
      color="#CD202C"
      :label="labelPesquisa"
      prepend-inner-icon="mdi-magnify"
      hide-details
      dense
      style="border-radius: 8px"
      single-line
      :placeholder="placeholderPesquisa"
    ></v-text-field>

    <v-btn  class="py-5 btn" outlined @click="drawer = !drawer">
      <v-icon class="mr-1">mdi-filter-variant</v-icon>
      Filtros
    </v-btn>

  </div>

  <div style="width: 100%">
    <v-card class="pa-4">
      <div class="d-flex justify-space-between align-center">
        <div class="d-flex align-center">
          <!-- <v-img src="/@/public/veiculo.png"  height="40" width="40"></v-img> -->
          <span class="spanNome mr-2">Solicitação</span>
          <span class="spanNumero" style="font-size: 16px;">12345683</span>
        </div>

        <div class="d-flex align-center">
          <v-btn 
            style="background: #F5F5F5;" 
            class="mr-4 btnListagem" 
            color="#E10000" 
            text
          >01:30</v-btn>

          <v-btn 
            class="btnListagem" 
            style="background:#CD202C;" 
            dark
          >Pendente Agrale</v-btn>
        </div>
      </div>

      <div class="d-flex flex-column">
        <span 
          class="spanNumero my-2" 
          style="font-size: 16px; color:#4D4D4D;"
        >
          Motor está falhando constantemente
        </span>

        <span class="text mb-4">
          Lorem ipsum dolor sit amet. 
          Et rerum suscipit aut repellat 
          error hic veritatis fugit non 
          dolorem praesentium et quas 
          recusandae. Est ullam consequatur
          sed sunt dolore est labore illum
          ea corporis culpa sit quaerat
          internos. Ut dignissimos quibusdam 
          est exercitationem modi et impedit 
          dolorem! Et voluptas libero nam 
          dolor error cum nisi minus ea 
          cumque reprehenderit cum maiores
          nihil ab eligendi aliquid. Et 
          fuga velit aut corporis cumque 
          et magnam ipsum? Est temporibus 
          aspernatur sed repudiandae 
          voluptatem est quia porro cum 
          distinctio laboriosam non rerum 
          expedita aut quia voluptatem. 
          Et beatae incidunt aut dolor 
          consequatur a dolor quis sit 
          omnis neque et quod magni. Et 
          debitis blanditiis est perspiciatis 
          optio ut eveniet ipsam. 
        </span>

        <div class="d-flex justify-space-between" style="width: 100%">
          <div style="border-top: 1px solid #E6E6E6; width: 50%" class="d-flex justify-space-between align-center">
            <div class="d-flex flex-column">
              <span 
                class="spanNumero mt-2" 
                style="font-size: 14px; color:#4D4D4D;"
              >Jonas Brother</span>

              <span class="spanNome" style="color:#4D4D4D;">
                22256.1 - DEUSDETE SOUSA SANTIAGO E CIA LTDA
              </span>
            </div>

            <div class="d-flex flex-column mt-2" style="text-align: right; border-right: 1px solid #E6E6E6">
              <span class="spanNome mr-4">Recebimento</span>
              <span class="spanNome mr-4">15/01/2023 18:30</span>
            </div>
          </div>

          <div class="d-flex justify-end align-center" style="border-top: 1px solid #E6E6E6; width: 50%">
            <v-btn class="mr-2" icon style="background: #8C8C8C; width: 28px; height: 28px">
              <v-icon color="white" style="font-size: 17px">mdi-account</v-icon>
            </v-btn>
            <span class="spanNome">Sem Responsável Agrale</span>
          </div>
        </div>
      </div>
    </v-card>
  </div>

  <div class="text-center">
    <v-container >
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              color="#971E27"
              v-model="page"
              class="my-4"
              :length="10"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'; 
import { mapGetters, mapActions } from "vuex";
// import ModalFiltro from './modalFiltro.vue';

@Component({
  components:{
    // ModalFiltro
  },
  methods:mapActions([
    "getSolicitacaoId",
    // "getSolicitacao"
  ]),
  computed: mapGetters([
    "pegarSolicitacao"
  ]),
})

export default class App extends Vue {
  getSolicitacaoId!:() => Promise<[]>
  pegarSolicitacao!:() => (object)
  // getSolicitacao!:() => Promise<[]>
  @Prop({ type: String, default: 'Pesquisa' }) labelPesquisa: string;
  @Prop({ type: String, default: 'Pesquisar por Solicitação, Título, Descrição, Solicitante ou Distribuidor' }) placeholderPesquisa: string;

  itemsSolicitacao = [];
  status = true;
  displayModalFiltro = false;
  drawer= null;
  pesquisa = true;
  search = '';
  emits = ['pesquisar'];
  page= 1

  pesquisaTabela(value){
    this.$emit('pesquisar', value);
  }

  // @Watch('$store.state.visualizarSolicitacao')
  // async carregar(id:number){
  //   await this.getSolicitacaoId();
  // }
  // mounted() {
  //   this.carregar()
  // }
}
</script>

<style scoped>
@import "@/assets/scss/_base.scss";

.v-btn:not(.v-btn--round).v-size--default{
  height: 40PX !important;
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
::v-deep .v-text-field--outlined.v-input--is-focused fieldset, .v-text-field--outlined.v-input--has-state fieldset {
  border: solid 1.5px #971E27 !important;
  color:#971E27 !important;
}
.v-list-item {
  min-height: 0px !important; 
}
.v-list-item__content {
  align-items: flex-start !important; 
  display: flex; 
  flex: none !important;
}
.container {
  padding: 0px !important; 
}
.text{
  color: #8C8C8C;
  font-size: 12px;
  text-align: justify;
}
.btnListagem{
  font-size: 15px;
  border-radius:8px;
  text-transform: capitalize;
}
.btn{
  text-transform: capitalize;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #8C8C8C;
  color:#4D4D4D;
}
.card{
  display: flex;
  align-items: flex-start !important;
  flex-direction: column !important;
  flex-wrap: wrap !important;
  width: 25%;
  height: 15%;
  border-radius: 8px;
}
.card1{
  background-color:#f5f5f5; 
  border: 1px solid #8C8C8C;
}
.card2{
  border: 1px solid #971E27 !important;
}
.card3{
  border: 1px solid #062650 !important;
}
.card4{
  border: 1px solid #107154 !important;
}
.spanNome{
  color: #8C8C8C;
  font-size: 14px
}
.spanNumero{
  font-size: 25px; 
  font-weight: 700;
  color: #8C8C8C;
}
</style>