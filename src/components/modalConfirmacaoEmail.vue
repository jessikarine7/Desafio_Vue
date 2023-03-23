<template>
<div>
  <!-- modal confirmação de email -->
  <v-dialog v-model="displayConfirmEmail" width="380px">
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
    "createUsuario",
    "updateUsuario",
  ]),
  computed: mapGetters([
    "pegarUsuario",
  ]),
})

export default class App extends Mixins(validacoes) {
  @Prop({ type: Boolean }) displayConfirmEmail: boolean;
  getUsuario!:() => Promise<[]>
  getUsuarioId!:(id:number) => Promise<[]>
  createUsuario!:(params) => Promise<[]> 
  updateUsuario!:(id:number) => []
  todosUsuarios!:() => (object)

  modalConfirmacaoEmail = false;
  itemsUsuarios = [];
  id:number;
  alertSuccess = false;
  alertSuccessText = '';
  switch = false;
  isValid = false;
  disabledColor: string;

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
  }
  async resetFomr(){
    this.$emit('closeModal');
    (this.$refs.form as any).reset();
    window.location.reload();
    //  await this.getUsuario();
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

  async submitUsuario(id:number) {
    this.dataUsuarios.id = id

    if(id != null){
      if (this.isValid){
        await this.updateUsuario(this.dataUsuarios)
        // await this.getUsuario();
        this.$emit('closeModal')
        this.alertas()
        this.alertSuccessText = 'Registro alterado com sucesso.'
      }
      this.resetFomr()

    }else{
      if(this.isValid){
        this.modalConfirmacaoEmail = true
        await this.createUsuario(this.dataUsuarios)
        // await this.getUsuario();    
        this.$emit('closeModal')
        this.alertas()
        this.alertSuccessText = 'Registro salvo com sucesso.'
      }
      this.modalConfirmacaoEmail = false
      this.resetFomr()
    }
  }
}
</script>