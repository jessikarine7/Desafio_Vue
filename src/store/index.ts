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
    getUsuario({commit},payload){
      axios.get(`http://localhost:3000/usuarios/GET/usuarios?ID=${(payload)}`)
      .then((response) => {
        commit('preencherUsuarios',response.data)
        console.log(response.data);
      })
    },
    getUsuarioId({commit},id){
      return axios.get(`http://localhost:3000/usuarios?id=${(id)}`)
      .then((response) => {
        commit('atribuirUsuario',response.data[0])
        console.log(response.data[0]);
      })
    },
    deleteUsuario({commit},id){
      return axios.delete(`http://localhost:3000/usuarios/${(id)}`)
      .then((response) => {
        commit('preencherUsuarios',response.data[0])
        console.log(response.data[0]);
      })
    },
    // createUsuario({commit}, payload){
    //   axios.post(`http://localhost:3000/usuarios/POST/usuarios?ID=${(payload.id)}`)
    //   .then((response) => {
    //     commit('preencherUsuarios',response.data)
    //     console.log(response.data);
    //   })
    // }
  }
})

export default store