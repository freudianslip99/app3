<template>
<div>
    <div class="graph">
        <h1>This is the graph page.</h1>
        <v-content>

            <v-container>

                <v-tabs>
                    <v-tab>Plot Linear</v-tab>
                    <v-tab>Plot Log</v-tab>
                    <v-tab-item>
                        <plot />
                    </v-tab-item>
                    <v-tab-item>
                        <plot2 />
                    </v-tab-item>
                </v-tabs>

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
import Plot from '@/components/Plot.vue'
import Plot2 from '@/components/Plot2.vue'

import Form from '@/components/Form.vue'
import Counter from '@/components/Counter.vue'
import store from '@/store.js'

export default {
    name: 'graph',
    components: {
        Plot,
        Plot2,
        Form,
        Counter,
        store
    }
}
</script>
