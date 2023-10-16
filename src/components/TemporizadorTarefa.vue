<template>
    <div class="is-flex is-align0items-center is-justify-content-space-between">
        <CronometroTarefa :tempo="tempo"/>
          <button class="button" @click="iniciar" :disabled="rodando">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button" @click="finalizar" :disabled="!rodando">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroTarefa from "./CronometroTarefa.vue";

export default defineComponent({
  name: 'TemporizadorTarefa',
  emits: ['aoTempoFinalizado'],
  components: {
    CronometroTarefa,
  },
  data() {
    return {
      tempo: 0,
      cronometro: 0,
      rodando: false,
    };
  },
  methods: {
    iniciar() {
        this.rodando = true
        this.cronometro = setInterval(() => {
        this.tempo++;
      }, 1000);
    },
    finalizar() {
        this.rodando = false
      clearInterval(this.cronometro)
      this.$emit('aoTempoFinalizado', this.tempo)
      this.tempo = 0;
    },
  },
});
</script>
