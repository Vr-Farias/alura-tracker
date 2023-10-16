<template>
  <section>
    <strong class="display">
      {{ tempoFormatado }}
    </strong>
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'CronometroTarefa',
  props: {
    tempo: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    tempoFormatado(): string {
      return new Date(this.tempo * 1000).toISOString().substr(11, 8);
    },
  },
});
</script>

<style scoped>
.display {
  color: var(--texto-primario);
}
</style>