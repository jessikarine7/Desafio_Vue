// import Vue from 'vue';
// import Vuex from 'vuex';
// import axios from 'axios';

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     count: 0,
//     itemsSolicitacao: [],
//     visualizarSolicitacao: {},
//   },
//   getters: {
//     todasSolicitacoes(state){
//       return state.itemsSolicitacao
//     },
//     pegarSolicitacao(state){
//       return state.visualizarSolicitacao
//     },
//   },
//   mutations: {
//     preenchersolicitacao(state, payload){
//       state.itemsSolicitacao = payload
//     },
//     atribuirSolicitacao(state, payload){
//       state.visualizarSolicitacao = payload
//     },
//   },
//   actions:{
//     async getSolicitacao({commit},payload){
//       const response = await axios.get(`http://localhost:3000/solicitacoes/GET/solicitacoes?ID=${(payload)}`)
//       commit('preenchersolicitacao',response.data)
//     },
//     async getSolicitacaoId({commit},id){
//       const response = await axios.get(`http://localhost:3000/solicitacoes?id=${(id)}`)
//       commit('atribuirSolicitacao',response.data[0])
//     },
//   }
// })

// export default store