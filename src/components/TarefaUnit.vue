<template>
    <ListaBox>
        <div class="columns">
            <div class="column is-7">
                {{tarefa.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column">
                <CronometroTarefa :tempo="tarefa.tempo" />
            </div>
        </div>
    </ListaBox>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';
import CronometroTarefa from './CronometroTarefa.vue'
import ITarefa from '../interfaces/ITarefas'
import ListaBox from './ListaBox.vue';

export default defineComponent({
    name: 'TarefaUnit',
    components: {
        CronometroTarefa,
        ListaBox
    },
    props: {
        tarefa:{
            type: Object as PropType<ITarefa>,
                required: true
        }
    }
});
</script>

