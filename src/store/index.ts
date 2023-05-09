import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    itemsUsuarios: [],
    usuarioVisualizar: {},
    itemsSolicitacao: [],
    visualizarSolicitacao: {},
  },
  getters: {
    todosUsuarios(state){
      return state.itemsUsuarios
    },
    pegarUsuario(state){
      return state.usuarioVisualizar
    },
    todasSolicitacoes(state){
      return state.itemsSolicitacao
    },
    pegarSolicitacao(state){
      return state.visualizarSolicitacao
    },
  },
  mutations: {
    preencherUsuarios(state, payload){
      state.itemsUsuarios = payload
    },
    atribuirUsuario(state, payload){
      state.usuarioVisualizar = payload
    },
    preenchersolicitacao(state, payload){
      state.itemsSolicitacao = payload
    },
    atribuirSolicitacao(state, payload){
      state.visualizarSolicitacao = payload
    },
  },
  actions:{
    async getSolicitacao({commit},payload){
      const response = await axios.get(`http://localhost:3000/solicitacoes/GET/solicitacoes?ID=${(payload)}`)
      commit('preenchersolicitacao',response.data)
    },
    async getSolicitacaoId({commit},id){
      const response = await axios.get(`http://localhost:3000/solicitacoes?id=${(id)}`)
      commit('atribuirSolicitacao',response.data[0])
    },
    async getUsuario({commit},payload){
      const response = await axios.get(`http://localhost:3000/usuarios/GET/usuarios?ID=${(payload)}`)
      commit('preencherUsuarios',response.data)
    },
    async getUsuarioId({commit},id){
      const response = await axios.get(`http://localhost:3000/usuarios?id=${(id)}`)
      commit('atribuirUsuario',response.data[0])
    },
    async deleteUsuario({commit},id){
      const response = await axios.delete(`http://localhost:3000/usuarios/${(id)}`)
      commit('preencherUsuarios',response.data[0])
    },
    async createUsuario({commit},payload){
      await axios.post(`http://localhost:3000/usuarios`, payload)
    },
    async updateUsuario({commit},data){
     const response = await axios.put(`http://localhost:3000/usuarios/${(data.id)}`, data)
      commit('preencherUsuarios',response.data[0])
    }
  }
})

export default store