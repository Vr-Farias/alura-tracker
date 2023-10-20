<template>
  <div class="column is-three-quarter conteudo">
    <FormularioTarefas @aoSalvarTarefa="adicionarTarefa" />
    <div class="lista">
      <ListaBox v-if="tarefasConcluidas">
        Não há tarefas nesta lista ):
      </ListaBox>
      <TarefaUnit
        v-for="(tarefa, index) in tarefas"
        :key="index"
        :tarefa="tarefa"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormularioTarefas from "@/components/FormularioTarefas.vue";
import TarefaUnit from "@/components/TarefaUnit.vue";
import ListaBox from "@/components/ListaBox.vue";
import ITarefas from "@/interfaces/ITarefas";

export default defineComponent({
  name: "App",
  components: {
    FormularioTarefas,
    TarefaUnit,
    ListaBox,
  },
  data() {
    return {
      tarefas: [] as ITarefas[],
    };
  },
  computed: {
    tarefasConcluidas(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    adicionarTarefa(tarefa: ITarefas) {
      this.tarefas.push(tarefa);
    },
  },
});
</script>

<style>

</style>
