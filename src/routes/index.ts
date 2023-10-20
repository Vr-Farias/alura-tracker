import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import TarefasVue from "@/views/Tarefas.vue";
import ProjetosVue from "@/views/Projetos.vue";
import FormProjetoVue from "@/views/Projetos/FormProjeto.vue";
import ListaProjetosVue from "@/views/Projetos/ListaProjetos.vue";

const rotas: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Tarefas",
        component: TarefasVue,
    },
    {
        path: "/projetos",
        component: ProjetosVue,
        children: [
            
    {
        path: "",
        name: "Projetos",
        component: ListaProjetosVue,
    },
    {
        path: "novo",
        name: "Novo Projeto",
        component: FormProjetoVue,
    },
    {
        path: ":id",
        name: "Editar Projeto",
        component: FormProjetoVue,
        props: true,
    },
        ]
    }
    ];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
});

export default roteador;