<template>
    <div class="box has-text-weight-bold" :style="estilos">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ListaBox',
    data() {
        return {
            estilos: {
                color:  'lightgrey',
                background: '#6d89a3'
            }
        }
    },
    props: {
        tarefa: {
            type: Object,
            required: true
        }
    }
})
</script>

<!-- <style scoped>
.box{
    color: lightgrey;
    background: #6d89a3;
}
</style> -->