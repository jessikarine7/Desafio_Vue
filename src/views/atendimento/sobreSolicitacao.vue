<template>
<div class="d-flex flex-colum " style="width: 100%">
  <v-navigation-drawer
    v-model="forum"
    absolute
    temporary
    left
    width="300"
  >
    <v-list-item class="d-flex flex-column pa-4">
      <v-list-item-content class="d-flex justify-start">
        <v-list-item-title class="d-flex justify-space-between align-center mt-2 mb-5">
          <span class="spanProdutosN">Fórum</span> 
          <v-btn small icon @click="forum=false">
            <v-icon style="font-size:17px">mdi-close</v-icon>
          </v-btn>
        </v-list-item-title>
        
        <v-container class="d-flex align-center justify-end">
          <span class="mr-2" style="color:#8C8C8C; font-size: 10px">15/01/2022 15:30</span>
          <span class="spanProdutosN">Isaque Nilton</span>
        </v-container>

        <v-container class="d-flex align-center flex-column mb-4" style="background:#971E27; border-radius: 10px 0px 10px 10px;">
          <v-img
            src="forum.png"
            max-width="220" 
            max-height="220"
            class="mb-2"
          ></v-img>

          <span class="pa-1" style="color: white; font-size: 12px; font-weght: 400; text-align: left">
            Ok! Estou enviando mais uma evidência, 
            talvez ajude. O mecânico pegou um detalhe 
            no farolete dianteiro esquerdo
          </span>
        </v-container>

        <v-container class="d-flex align-center justify-start">
          <span class="mr-2" style="color:#8C8C8C; font-size: 10px">15/01/2022 15:30</span>
          <span class="spanProdutosN">Jonas Brother</span>
        </v-container>

        <v-container class="d-flex justify-start elevation-2 ma-1 mb-4" style="border-radius: 0px 10px 10px 10px;">
          <span style="color: #4D4D4D; font-size:12px">
            Lorem ipsum dolor sit amet. Et rerum suscipit 
            aut repellat error hic veritatis fugit non 
            dolorem praesentium et quas recusandae. Est 
            ullam consequatur sed sunt dolore est labore 
            illum ea corporis culpa sit quaerat internos. 
          </span>
        </v-container>

        <v-container class="d-flex justify-end align-end" style="background:#E6E6E6">
          <v-file-input 
            hide-details 
            outlined 
            dense 
            style="background:white"
            class="mr-1"
          ></v-file-input>

          <v-btn icon>
            <v-icon 
              style="font-size:20px" 
              color="#CD202C"
            >mdi-send</v-icon>
          </v-btn>
        </v-container>
        
      </v-list-item-content>
    </v-list-item>
  </v-navigation-drawer>

  <div class="d-flex flex-column" style="width:100%; height:100%">
    <div class="mb-2 d-flex justify-space-between align-center borda">
      <div class="px-4 py-2" style="width: 20%">
        <v-btn 
          icon 
          outlined 
          class="mr-2 btnTop" 
          @click="forum=true" 
          v-model="abrirForum"
        > 
          <v-icon style="font-size: 22px" color="#4D4D4D">mdi-forum</v-icon>
          <span v-if="abrirForum==true">Abrir Fórum</span>
        </v-btn>

        <v-btn icon outlined class="btnTop">
          <v-icon 
            style="font-size: 22px" 
            color="#4D4D4D" 
            @click="modalConfirmSolicitacao=true"
          >mdi-check</v-icon>
        </v-btn>
      </div>

      <div class="px-4 py-2 d-flex align-center justify-end" style="width: 70%">
        <!-- <v-img 
          :src="require('@/assets/imagens/veiculo.png')" 
          max-width="35" 
          max-height="20"
          class="mr-2"
        ></v-img> -->
        <span class="mr-1 spanNome">Solicitação</span>
        <span class="mr-4 spanNumero">12345683</span>
        <v-btn color="#CD202C" dark>Pendente</v-btn>
      </div>
    </div>  

    <v-expansion-panels class="px-4" v-model="panel" multiple :disabled="disabled">
      <v-expansion-panel class="colapse">
        <v-expansion-panel-header class="tituloColapse">
          Sobre a Solicitação
        </v-expansion-panel-header>

        <v-expansion-panel-content class="colapseContent">
          <colapse-sobre-solicitacao
            ref="ColapseSobreSolicitacao"
          ></colapse-sobre-solicitacao>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel class="colapse">
        <v-expansion-panel-header class="tituloColapse">
          Sobre o Produto
        </v-expansion-panel-header>

        <v-expansion-panel-content class="colapseContent">
          <v-container class="d-flex flex-column borda">
            <v-container class="d-flex">
              <span class="mr-2 spanProdutos">Produto: </span> 
              <span class="spanProdutosN">48 - CAMINHÃO 13000</span>
            </v-container>

            <v-container class="d-flex">
              <span class="mr-2 spanProdutos">Chassi: </span> 
              <span class="spanProdutosN">93PB54M32NS502967</span>
            </v-container>

            <v-container class="d-flex">
              <span class="mr-2 spanProdutos">Quilometragem: </span> 
              <span class="spanProdutosN">100.000 km</span>
            </v-container>

            <v-container class="d-flex">
              <span class="mr-2 spanProdutos">Nº Série Motor: </span> 
              <span class="spanProdutosN">36646890</span>
            </v-container>

            <v-container class="d-flex">
              <span class="mr-2 spanProdutos">Data da NF Fabricante: </span> 
              <span class="spanProdutosN">30/05/2011</span>
            </v-container>
          </v-container>

          <div class="d-flex px-2">
            <v-container>
              <span 
                class="spanProdutosN" 
                style="font-size:12px"
              >Chassi ou nº de produto</span>
              
              <!-- <v-img 
                :src="require('@/assets/imagens/arquivo3.png')" 
                max-width="180" 
                max-height="120"
              ></v-img> -->
            </v-container>

            <v-container>
              <span 
                class="spanProdutosN"
                style="font-size:12px"
              >Hodômetro</span>

              <!-- <v-img 
                :src="require('@/assets/imagens/arquivo4.png')"  
                max-width="180" 
                max-height="120"
              ></v-img> -->
            </v-container>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel class="colapse">
        <v-expansion-panel-header class="tituloColapse">
          Sobre a Venda
        </v-expansion-panel-header>

        <v-expansion-panel-content class="colapseContent">
          <div class="d-flex flex-column">
            <v-container class="d-flex">
              <span class="mr-2 spanProdutos">Nome do Proprietário: </span> 
              <span class="spanProdutosN">AMADO BATISTA DA SILVA FLORES JUNIOR</span>
            </v-container>

            <v-container class="d-flex">
              <span class="mr-2 spanProdutos">Cidade/UF: </span> 
              <span class="spanProdutosN">SÃO JOSÉ DO VALE DO RIO PRETO/RJ</span>
            </v-container>

            <v-container class="d-flex">
              <span class="mr-2 spanProdutos">Data da NF de Venda: </span> 
              <span class="spanProdutosN">18/01/2018</span>
            </v-container>
            
            <v-container class="d-flex">
              <span class="mr-2 spanProdutos">Nº NF de venda: </span> 
              <span class="spanProdutosN">662.121</span>
            </v-container>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>

  <v-navigation-drawer
    right
    width="85"
    height="45rem"
  >
    <v-list-item class="d-flex flex-column">
      <v-list-item-content class="d-flex justify-start">
        <v-container class="d-flex flex-column align-center menudireita">
          <div class="d-flex flex-column align-center mb-2">
            <v-btn icon>
              <v-icon style="font-size: 22px" color="#971E27">mdi-information</v-icon>
            </v-btn>
            <span style="font-size: 12px; color: #971E27">Sobre</span>
          </div>

          <div class="d-flex flex-column align-center">
            <v-btn icon>
              <v-icon style="font-size: 22px" color="#8C8C8C">mdi-message-reply-text</v-icon>
            </v-btn>
            <span style="font-size: 12px; color: #8C8C8C">Lorem Ipsum</span>
          </div>
        </v-container>
      </v-list-item-content>
    </v-list-item>
  </v-navigation-drawer>

  <Modal
    :value="modalConfirmSolicitacao"
    :titleBold="true"
    :titleFontSize="'20px'"
    :exibirIconFechar="false"
  >
    <div class="white rounded-lg">
      <v-container class="d-flex justify-center mb-4 rounded-b-0 containerIcon">
        <v-icon color="#F7D002" style="font-size:45px">mdi-alert</v-icon>
      </v-container>
      
      <v-container class="d-flex justify-space-between  flex-column">
        <span class="mb-4 px-6 text">
          Você irá <b>concluir</b> a <b>Solicitação de 
          Atendimento.</b> Esta ação não pode ser 
          desfeita. Deseja prosseguir?
        </span>

        <v-container class="d-flex justify-space-between pa-4">
          <v-btn class="btn" text @click="modalConfirmSolicitacao=false">Cancelar</v-btn>
          <v-btn class="btn" dark color="#F7D002">Concluir Solicitação</v-btn>
        </v-container>
      </v-container>
    </div>
  </Modal>
</div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import ColapseSobreSolicitacao from './colapseSobreSolicitacao.vue';
// import Modal from "@/components/shared/modals/modal.vue";

@Component({
  components:{
    ColapseSobreSolicitacao,
  },
  name: "sobreSolicitacao" 
})

export default class sobreSolicitacao extends Vue {
  // modalConfirmSolicitacao = false;
  // forum = false;
  // abrirForum = false;
  // panel = [0];
  // disabled = false;
  // modal = false;
}

</script>

<style scoped>
::v-deep .v-text-field--outlined fieldset{
  border-color: white !important;
}
/* ::v-deep .v-navigation-drawer{
  flex-direction: none !important;
} */
::v-deep .v-list-item{
  align-items: flex-start !important;
}
::v-deep .v-list-item__content {
  align-items:flex-start !important;
  align-self: none !important; 
  padding: 0px !important;
}
::v-deep .container{
  padding: 6px !important;
  margin-right: 0px !important; 
  margin-left: 0px !important; 
}
.menudireita{
  width: 90px;
  height:100%; 
  border-left: 1px solid #E6E6E6;
}
.spanProdutos{
  font-size: 13px;
}
.spanProdutosN{
  font-size: 13px;
  font-weight: 700;
  color:#1A1A1A;
}
.borda{
  border-bottom: 1px solid #E6E6E6;
}
.colapse{
  background: #F5F5F5 !important;
}
.colapseContent{
  background-color: white;
  border-radius:8px;
  margin: 6px;
  padding: 6px;
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
.v-btn--round{
  border-radius: 8px !important;
}
</style>