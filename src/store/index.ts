import IProjetos from "@/interfaces/IProjetos";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO } from "./tipo-mutations";
import INotificacoes from "@/interfaces/INotificacoes";
import { TipoNotificacao } from "@/interfaces/INotificacoes";

interface Estado {
    projetos: IProjetos[],
    notificacoes: INotificacoes[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
    state: {
        projetos: [],
        notificacoes: [{
            titulo: 'Sucesso!',
            texto: 'teste',
            tipo: TipoNotificacao.SUCESSO,
            id: 1
        },
        {
            titulo: 'Atenção!',
            texto: 'teste',
            tipo: TipoNotificacao.ATENCAO,
            id: 2
        },
        {
            titulo: 'Falha!',
            texto: 'teste',
            tipo: TipoNotificacao.FALHA,
            id: 3
        }]
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string){
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjetos
            state.projetos.push(projeto);
        },
        [ALTERA_PROJETO](state, projeto: IProjetos){
            const indice = state.projetos.findIndex(proj => proj.id === projeto.id);
            state.projetos[indice] = projeto;
        },
        [EXCLUIR_PROJETO](state, id: string){
            state.projetos = state.projetos.filter(proj => proj.id !== id);
        },
}
});

export function useStore(): Store<Estado> {
    return vuexUseStore(key);
}