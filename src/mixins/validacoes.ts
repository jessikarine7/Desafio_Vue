import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class validacoes extends Vue{
  rules={
    required: value => !!value || 'Campo obrigatório',
    
    cpfMask: (value) => {
      if (value) {
        value = value.substr(0, 14)
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      }
      return value
    },
    
    email: (value) => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const pattern2 = /^([a-zA-z0-9]){1,}$/;
      return pattern.test(value) || pattern2.test(value) || 'O e-mail informado é inválido.'
    },
  }
}
  // methods:{
  //   filtrarCaracterString(event, quantity) => {
  //     let text = event.target.value.toString() + event.key.toString();
  //     const pattern = /[^a-zA-Z\s]/g
  //     if(quantity) {
  //       text.length > quantity ? event.preventDefault() : '';
  //     }
  //     if (pattern.test(text)) {
  //       event.preventDefault();
  //     } else {
  //       return true;
  //     }
  //   }
  //   filtrarCaracterString=(event, quantity) => {
  //     let text = event.target.value.toString() + event.key.toString();
  //     const pattern = /[^a-zA-Z\s]/g
  //     if(quantity) {
  //       text.length > quantity ? event.preventDefault() : '';
  //     }
  //     if (pattern.test(text)) {
  //       event.preventDefault();
  //     } else {
  //       return true;
  //     }
  //   }
  // }


