<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <NotificacaoBox />
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import NotificacaoBox from "./components/NotificacaoBox.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    NotificacaoBox
  },
  data() {
    return {
      modoEscuroAtivo: false,
    };
  },
  computed: {}
  ,
  methods: {
    trocarTema (modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    }
  },
});
</script>

<style>
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
