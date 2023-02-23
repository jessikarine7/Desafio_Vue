import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class validacoes extends Vue{
  rules = {
    required: value => !!value || 'Campo obrigatório',

    nameValidation: value =>{
      const pattern = /^[a-zA-Z]{1,}(?: [a-zA-Z]+){1,}[a-zA-Z\u00C0-\u00FF ]+/i;       
      return pattern.test(value) || 'Digite ao menos um nome e um sobrenome. Não utilize caracteres especiais.';
    },

    email: value => {
      if (value) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) || 'E-mail inválido'
      } else {
        return true
        // 'Este e-mail já está cadastrado para um usuário no sistema. Por favor, informe outro e-mail.'
      }
    },

    cpf: value => {
      if (value) {
        value = value.replace(/[^\d]+/g, '')
        if (value == '') return false || 'O CPF informado é inválido'

        if (
          value.length != 11 ||
          value == '00000000000' ||
          value == '11111111111' ||
          value == '22222222222' ||
          value == '33333333333' ||
          value == '44444444444' ||
          value == '55555555555' ||
          value == '66666666666' ||
          value == '77777777777' ||
          value == '88888888888' ||
          value == '99999999999'
        )
          return false || 'O CPF informado é inválido'
  
        let add = 0
        for (let i = 0; i < 9; i++) add += parseInt(value.charAt(i)) * (10 - i)
        let rev = 11 - (add % 11)
        if (rev == 10 || rev == 11) rev = 0
        if (rev != parseInt(value.charAt(9))) return false || 'O CPF informado é inválido'
  
        add = 0
        for (let j = 0; j < 10; j++) add += parseInt(value.charAt(j)) * (11 - j)
        rev = 11 - (add % 11)
        if (rev == 10 || rev == 11) rev = 0
        if (rev != parseInt(value.charAt(10))) return false || 'O CPF informado é inválido'
        return true
  
      } else {
        return false
      }
    },
  }
}


