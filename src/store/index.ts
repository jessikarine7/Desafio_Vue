import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    itemsUsuarios: [],
    usuarioVisualizar: {},
  },
  getters: {
    todosUsuarios(state){
      return state.itemsUsuarios
    },
    pegarUsuario(state){
      return state.usuarioVisualizar
    },
  },
  mutations: {
    preencherUsuarios(state, payload){
      state.itemsUsuarios = payload
    },
    atribuirUsuario(state, payload){
      state.usuarioVisualizar = payload
    },
  },
  actions:{
    async getUsuario({commit},payload){
      return await axios.get(`http://localhost:3000/usuarios/GET/usuarios?ID=${(payload)}`)
      .then((response) => {
        commit('preencherUsuarios',response.data)
        console.log(response.data);
      })
    },
    async getUsuarioId({commit},id){
      return await axios.get(`http://localhost:3000/usuarios?id=${(id)}`)
      .then((response) => {
        commit('atribuirUsuario',response.data[0])
        console.log(response.data[0]);
      })
    },
    async deleteUsuario({commit},id){
      return await axios.delete(`http://localhost:3000/usuarios/${(id)}`)
      .then((response) => {
        commit('preencherUsuarios',response.data[0])
        console.log(response.data[0]);
      })
    },
    async createUsuario({commit}, payload){
     return await axios.post(`http://localhost:3000/usuarios/POST/usuarios?ID=${(payload.id)}`)
      .then((response) => {
        commit('preencherUsuarios',response.data)
        console.log(response.data);
      })
    },
    async updateUsuario({commit},data){
      return await axios.put(`http://localhost:3000/usuarios/${(data.id)}`, data)
      .then((response) => {
        commit('preencherUsuarios',response.data[0])
        console.log(response.data[0]);
      })
    },
  }
})

export default store