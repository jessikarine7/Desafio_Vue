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

  <v-dialog v-model="display" width="800px">
    <div class="elevation-2 d-flex justify-space-between pa-4" style="background: #F5F5F5">
      <div class="d-flex align-center">
        <h1 class="tituloModal mr-4">
          {{pegarUsuario.id ? 'Editar Usuário Agrale '+ pegarUsuario.id : 'Criar Usuário Agrale'}}
        </h1>
        <v-switch  
          hide-details 
          dense 
          @change="dataUsuarios.situacao"
          :label="pegarUsuario.situacao == true? 'Ativo': 'Inativo'" 
          color="#CD202C"
          :input-value="pegarUsuario.situacao"
          @input="dataUsuarios.situacao = $event"
        ></v-switch>
      </div>

      <v-icon 
        @click="resetFomr()" 
        color="#1A1A1A"
      >mdi-close</v-icon>
    </div>

    <div class="white d-flex flex-column pa-5 justify-space-between" style="height:400px">
      <v-form class="form" ref="form" style="width: 100%">
        <div class="d-flex">
          <v-text-field
            label="Nome Completo"
            filled
            color="#8C8C8C"
            class="mr-4 form"
            style="width: 50%"
            dense
            :value="pegarUsuario.nome"
            @input="dataUsuarios.nome = $event"
            clearable
          ></v-text-field>

          <v-text-field
            class="form"
            
            label="CPF(opcional)"
            v-mask="'###.###.###-##'"
            hide-details
            filled
            style="width: 50%"
            dense
            color="#8C8C8C"
            :value="pegarUsuario.cpf"
            @input="dataUsuarios.cpf = $event"
            clearable
          ></v-text-field>
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
            :rules="[rules.required, rules.email]"
            filled
            class="mr-4 form"
            style="width: 50%"
            color="#8C8C8C"
            dense
            v-else
            clearable
            validate-on-blur
            :value="pegarUsuario.email"
            @input="dataUsuarios.email = $event"
          ></v-text-field>

          <v-select
            label="Perfil de Usuário"
            filled
            style="width: 50%"
            class="form"
            dense
            color="#8C8C8C"
            clearable
            :value="pegarUsuario.perfil"  
            @input="dataUsuarios.perfil = $event"
            :rules="[rules.required]"
            :items="['Desenvolvedor','Desenvolvedora']"
          ></v-select>
        </div>

        <div class="d-flex justify-end" v-if="pegarUsuario.id">
          <v-btn 
            outlined 
            class="btn" 
            style="border: solid 1px #E6E6E6" 
            @click="abrirModalExcluir(pegarUsuario.id)"
          >
            <v-icon class="mr-1" style="font-size: 18px">mdi-delete</v-icon>
            <span>Excluir usuário</span>  
          </v-btn>
        </div>
      </v-form>

      <div class="d-flex justify-space-between justify-end">
        <v-btn 
          text 
          class="btn"
          @click="resetFomr()"
        >Cancelar</v-btn>

        <v-btn 
          v-if="pegarUsuario.id"
          @click="submitUsuario(pegarUsuario.id)" 
          color="#CD202C" 
          dark 
          class="btn"
        >
          <v-icon 
            style="font-size: 16px"  
            class="mr-2"
          >mdi-content-save</v-icon>
          <span>Salvar</span>  
        </v-btn>

        <v-btn 
          v-else
          @click="modalConfirmacaoEmail = true" 
          color="#CD202C" 
          dark 
          class="btn"
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

        <span class="tituloExcluir mt-3" style="text-align: center;">
          {{dataUsuarios.email}}
        </span>
      </div>

      <div class="pa-3 d-flex justify-space-between">
        <v-btn 
          class="btn btnExcluir" 
          text 
          @click="modalConfirmacaoEmail = false"
        >Alterar E-mail</v-btn>

        <v-btn 
          class="btn btnExcluir" 
          style="color:#1A1A1A" 
          color="#F7D002"
          @click="submitUsuario(pegarUsuario.id)"
        >Confirmar E-mail</v-btn>
      </div>
    </div>
  </v-dialog>

  <!-- modal de excluir -->
  <v-dialog v-model="modalExcluir" width="340px">
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
        > Tem certeza de que deseja excluir este <br> 
          usuário? Essa ação não pode ser revertida.
        </span>
      </div>

      <div class="px-3 pb-3 mt-1 d-flex justify-space-between">
        <v-btn 
          class="btn btnExcluir" 
          text 
          @click="modalExcluir = false"
          >Cancelar</v-btn>

        <v-btn 
          class="btn btnExcluir" 
          dark 
          color="#E10000" 
          @click="deletarUsuario(id)"
        >Excluir</v-btn>
      </div>
    </div>
  </v-dialog>
</div>
</template>

<script lang="ts">
import { Component, Prop, Mixins, Watch } from 'vue-property-decorator';
import { mapGetters, mapActions } from "vuex";
import {validacoes} from '@/mixins/validacoes';

@Component({
  methods:mapActions([
    "getUsuario",
    "getUsuarioId",
    "deleteUsuario",
    "createUsuario",
    "updateUsuario",
  ]),
  computed: mapGetters([
    "pegarUsuario",
    "todosUsuarios"
  ]),
})

export default class App extends Mixins(validacoes) {
  @Prop({ type: Boolean }) display: boolean;
  getUsuario!:() => Promise<[]>
  getUsuarioId!:(id:number) => Promise<[]>
  deleteUsuario!:(id:number) => []
  pegarUsuario!:() => (object)
  createUsuario!:(params) => Promise<[]> 
  updateUsuario!:(id:number) => []
  todosUsuarios!:() => (object)

  modalConfirmacaoEmail = false;
  modalExcluir = false;
  itemsUsuarios = [];
  id:number;
  alertSuccess = false;
  alertSuccessText = '';
  switch = false;
  // rules=['cpf','required', 'email'];

  dataUsuarios: any = {
    id: 0,
    nome: "",
    email: "",
    perfil: "",
    situacao: "",
    switch: true,
    opcoes: "",
    cpf: ""
  }

  @Watch('$store.state.usuarioVisualizar')
  carregarUsuarios(value){
    this.dataUsuarios = value
    console.log('watch',value);
  }
  resetFomr(){
    this.$emit('closeModal');
    (this.$refs.form as any).reset();
    window.location.reload();
  }
  alertas(){
    this.alertSuccess = true
    if(this.alertSuccess === true){
      this.alertSuccessText
      setTimeout(() => {
        this.alertSuccess = false;
      }, 3000);
    }
  }
  abrirModalExcluir(id:number){
    this.id = id
    this.modalExcluir = true
  }
  async deletarUsuario(id:number){
    this.deleteUsuario(id)
    await this.getUsuario()
    this.modalExcluir = false
    this.$emit('closeModal')
    this.alertas()
    this.alertSuccessText = 'Usuário [e-mail do usuário] excluído com sucesso.';
  }
  async submitUsuario(id:number) {
    console.log('data', id);
    this.dataUsuarios.id = id

    if(id != null){
      await this.updateUsuario(this.dataUsuarios)
      await this.getUsuario();
      this.$emit('closeModal')
      this.alertas()
      this.alertSuccessText = 'Registro alterado com sucesso.'

    }else{
      this.modalConfirmacaoEmail = true
      if(this.modalConfirmacaoEmail === true){
        await this.createUsuario(this.dataUsuarios)
        this.alertas()
        this.alertSuccessText = 'Registro salvo com sucesso.'
        await this.getUsuario();    
      }
      this.resetFomr()
      this.$emit('closeModal')
      this.modalConfirmacaoEmail = false
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/_base.scss";

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
.v-input--selection-controls {
  margin-top: 0px !important; 
  padding-top: 0px !important;
}
</style>