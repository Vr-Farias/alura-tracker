<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioTarefas @aoSalvarTarefa="adicionarTarefa" />
      <div class="lista">
        <TarefaUnit v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <ListaBox v-if="tarefasConcluidas"> 
          Não há tarefas nesta lista ): 
        </ListaBox>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import FormularioTarefas from "./components/FormularioTarefas.vue";
import TarefaUnit from "./components/TarefaUnit.vue";
import ITarefas from "./interfaces/ITarefas";
import ListaBox from "./components/ListaBox.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormularioTarefas,
    TarefaUnit,
    ListaBox,
  },
  data() {
    return {
      tarefas: [] as ITarefas[],
      modoEscuroAtivo: false,
    };
  },
  computed: {
    tarefasConcluidas(): boolean {
      return this.tarefas.length === 0;
    },
  }
  ,
  methods: {
    adicionarTarefa(tarefa: ITarefas) {
      this.tarefas.push(tarefa);
    },
    trocarTema (modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    }
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #000;
  --texto-primario: #fff;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>
