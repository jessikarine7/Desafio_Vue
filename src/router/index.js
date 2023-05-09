// import Vue from "vue";
// import VueRouter from "vue-router";
// import Util from "@/lib/util";

// Vue.use(VueRouter);


// export const appRoutes = [
//   {
//     path: "/usuarios",
//     name: "usuarios",
//     permission: "",
//     meta: { title: "usuarios" },
//     component: () => import("@/views/usuarios/usuariosAgrale.vue"),
//     children: [
//       {
//         path: "/solicitacao",
//         permission: "",
//         meta: { title: "solicitacao" },
//         name: "solicitacao",
//         component: () => import("@/views/atendimento/solicitacaoAtendimento.vue"),
//       },
//     ]
//   },
// ];


// const routes = [loginRoutes, ...appRoutes, ...errorRoutes];

// const router = new VueRouter({
//   mode: "hash",
//   base: process.env.BASE_URL,
//   routes,
// });


// export default router;