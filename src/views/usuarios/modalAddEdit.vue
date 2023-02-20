<template>
<div>
  <v-dialog v-model="display" width="800px">
    <div class="elevation-2 d-flex justify-space-between pa-4" style="background: #F5F5F5">
      <div class="d-flex align-center">
        <h1 class="titulo mr-4">
          {{pegarUsuario.id ? 'Editar Usuário Agrale' : 'Criar Usuário Agrale'}}
        </h1>
        <v-switch  
          hide-details 
          dense 
          :label="pegarUsuario.situacao === 'Ativo' ? 'Ativo' : 'Inativo'" 
          color="#CD202C"
          :v-model="pegarUsuario.situacao == 'Ativo' ? this.botaoSwitch = true : this.botaoSwitch = false"
        ></v-switch>
      </div>

      <v-icon 
        @click="$emit('closeModal')" 
        color="#1A1A1A"
      >mdi-close</v-icon>
    </div>

    <div class="white d-flex flex-column pa-5 justify-space-between" style="height:400px">
      <v-form class="form" style="width: 100%">
        <div class="d-flex">
          <v-text-field
            label="Nome Completo"
            filled
            class="mr-4 formAdd"
            style="width: 50%"
            dense
          >aaqui{{pegarUsuario.nome}}</v-text-field>

          <v-text-field
            class="formAdd"
            label="CPF(opcional)"
            filled
            style="width: 50%"
            dense
          >{{pegarUsuario.cpf}}</v-text-field>
        </div>

        <div class="d-flex">
          <div class="d-flex flex-column mr-4" style="width: 50%;" v-if="pegarUsuario.id">
            <v-input
              label="E-mail"
              filled
              class="mr-4 mb-2 input"
              dense
              hide-details
              style="width: 50%"
            ></v-input>
            <span class="span">
              {{pegarUsuario.email}}
            </span>
          </div>

          <v-text-field
            label="E-mail"
            filled
            class="mr-4 formAdd"
            style="width: 50%"
            dense
            v-else
          ></v-text-field>

          <v-select
            label="Perfil de Usuário"
            filled
            style="width: 50%"
            class="formAdd"
            dense
            :items="['Desenvolvedor','Desenvolvedora']"
          >{{pegarUsuario.perfil}}</v-select>
        </div>

        <div class="d-flex justify-end" v-if="pegarUsuario.id" @click="abrirModalExcluir(id)">
          <v-btn outlined class="button" style="border: solid 1px #E6E6E6">
            <v-icon class="mr-1" style="font-size: 18px">mdi-delete</v-icon>
            <span>Excluir usuário</span>  
          </v-btn>
        </div>
      </v-form>

      <div class="d-flex justify-space-between justify-end">
        <v-btn 
          text 
          style="text-transform:none;" 
          @click="$emit('closeModal')"
        >Cancelar</v-btn>

        <v-btn 
          @click="modalConfirmacaoEmail = true" 
          color="#CD202C" 
          dark 
          style="text-transform:none; border-radius: 9px"
        >
          <v-icon 
            style="font-size: 16px"  
            class="mr-2"
          >mdi-content-save</v-icon>

          <span>Salvar</span>  
        </v-btn>
      </div>
    </div>
  </v-dialog>
 
  <!-- modal confirmação de email -->
  <v-dialog v-model="modalConfirmacaoEmail" width="380px">
    <div class="white">
      <div class="d-flex justify-center" style="background: #F6E9B9DB; height: 90px">
        <v-icon 
          style="font-size: 50px" 
          color="#F7D002"
        >mdi-alert</v-icon>
      </div>

      <div class="pa-3 d-flex justify-center flex-column">
        <span class="tituloExcluir" style="text-align: center;">
          Após adicionar um novo usuário, o seu <br>
          e-mail não poderá mais ser alterado. Por <br>
          favor, verifique se o endereço de e-mail <br>
          está correto antes de prosseguir com o <br>
          cadastro.
        </span>

        <span style="text-align: center; font-weight: 800" class="tituloExcluir mt-3">
          inilton@agrale.com.br
        </span>
      </div>

      <div class="pa-3 d-flex justify-space-between">
        <v-btn 
          class="buttonExcluir" 
          text 
          @click="modalConfirmacaoEmail = false"
        >Alterar E-mail</v-btn>

        <v-btn 
          class="buttonExcluir" 
          style="color:#1A1A1A" 
          color="#F7D002"
        >Confirmar E-mail</v-btn>
      </div>
    </div>
  </v-dialog>

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
        <v-btn class="buttonExcluir" dark color="#E10000" @click="deletarUsuario(id)">Excluir</v-btn>
      </div>
    </div>
  </v-dialog>
</div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import { mapGetters, mapActions } from "vuex";

// interface headerItem {
//   text: string,
//   value: string,
// }

@Component({
  methods:mapActions([
    "getUsuario",
    "getUsuarioId",
    "deleteUsuario",
  ]),
  computed: mapGetters([
    "pegarUsuario",
    "todosUsuarios",
  ]),
})

export default class App extends Vue {
  @Prop({ type: Boolean }) display: boolean;
  getUsuario!:() => Promise<[]>
  getUsuarioId!:(id:number) => Promise<[]>
  pegarUsuario!:() => (object)
  deleteUsuario!:(id:number) => []
  todosUsuarios!:() => (object)

  itemsUsuarios = [];
  modalConfirmacaoEmail = false;
  displayModalAdd = false;
  displayModalEdit = false;
  modalExcluir = false;
  botaoSwitch = true;
  id: number;

  async carregarTabela(){
    await this.getUsuario();
  }
  async abrirModalExcluir(id:number){
    await this.getUsuarioId(id)
    this.modalExcluir = true
    this.id = id
    console.log('aqui',  this.getUsuarioId(id));
    debugger
  }
  async deletarUsuario(id:number){
    this.deleteUsuario(id)
    await this.getUsuario();
    this.modalExcluir = false
  }

  mounted() {
    this.carregarTabela();
  }

  // async edicaoUsuario(id:number){
  //   await this.getUsuarioId(id) ? this.displayModalEdit = true : this.displayModalAdd = true
  // }
}
</script>

<style scoped>
.span{
  color:#4D4D4D;
  font-weight:700;
  font-family:Verdana;
  font-size:12px
}
.input.v-input {
  flex:none;
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
.v-input--selection-controls {
  margin-top: 0px !important; 
  padding-top: 0px !important;
}
.button {
  border-radius: 8px !important;
  text-transform: none !important; 
}
.buttonExcluir {
  border-radius: 8px !important;
  text-transform: none !important; 
  width: 150px;
}
.tituloExcluir{
  font-family:  'Verdana';
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #1A1A1A;
}
</style>