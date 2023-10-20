
<template>
  <div class="box">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="formulario">
        <input
          class="input"
          type="text"
          placeholder="Informe a tarefa"
          v-model="descricao"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option
              :value="projeto.id"
              v-for="projeto in projetos"
              :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <TemporizadorTarefa @aoTempoFinalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import TemporizadorTarefa from "./TemporizadorTarefa.vue";
import { useStore } from 'vuex'

import { key } from '@/store'

export default defineComponent({
  name: "FormularioTarefas",
  emits: ['aoSalvarTarefa'],
  components: {
    TemporizadorTarefa,
  },
  data () { 
    return {
      descricao: '',
      idProjeto: ''      
    }
  },
  methods: {
    finalizarTarefa (decorrido: number) : void {    
      this.$emit('aoSalvarTarefa', {
        tempo: decorrido,
        descricao: this.descricao,
        projeto: this.projetos.find(proj => proj.id == this.idProjeto)
      })
      this.descricao = ''
    }
  },
  setup () {
    const store = useStore(key)
    return {
      projetos: computed(() => store.state.projetos)
    }
  }
});
</script>
<style scoped>
.button {
  margin-left: 8px;
}
.box {
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
</style>
