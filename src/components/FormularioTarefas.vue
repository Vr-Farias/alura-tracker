<template>
  <div class="box formulario">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="formulario">
        <input type="text" 
        class="input" 
        placeholder="Informe a tarefa" 
        v-model="descricao" />
      </div>
      <div class="column">
        <TemporizadorTarefa @aoTempoFinalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemporizadorTarefa from "./TemporizadorTarefa.vue";

export default defineComponent({
  name: 'FormularioTarefas',
  emits: ['aoSalvarTarefa'],
  components: {
    TemporizadorTarefa,
  },
  data () {
    return {
    descricao: '',
  }
},
  methods: {
    finalizarTarefa(decorrido: number) : void{
      this.$emit('aoSalvarTarefa', {
        descricao: this.descricao,
        tempo: decorrido
      })
      this.descricao = ''
    }
  }
});
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>