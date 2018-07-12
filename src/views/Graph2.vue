<template>
<div>
    <div class="graph2">
        <h1>This is the graph2 page.</h1>
        <v-content>

            <v-container>
                <plot2 />
                <Form />
            </v-container>

            <v-container>
                <counter />
                <store />
            </v-container>

        </v-content>

        <v-footer color="indigo" app inset>
            <div style='text-align:center; width:2000px; color: white'>&copy;2018 — </div>
        </v-footer>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Plot2 from '@/components/Plot2.vue'
import Form from '@/components/Form.vue'
import Counter from '@/components/Counter.vue'
import store from '@/store.js'

export default {
    name: 'graph2',
    components: {
        Plot2,
        Form,
        Counter,
        store
    }
}
</script>
