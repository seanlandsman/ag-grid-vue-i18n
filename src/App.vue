<template>
    <div>
        <ag-grid-vue style="width: 500px; height: 200px;"
                     class="ag-theme-balham"
                     :columnDefs="columnDefs"
                     :rowData="rowData"
                     :components="components"
                     :firstDataRendered="this.onFirstDataRendered">
        </ag-grid-vue>
    </div>
</template>

<script>
    import {AgGridVue} from "ag-grid-vue";
    import TranslationCellRenderer from "./components/TranslationCellRenderer";

    import '../node_modules/ag-grid-community/dist/styles/ag-grid.css'
    import '../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css'

    export default {
        name: 'App',
        data() {
            return {
                columnDefs: [
                    {
                        headerName: "Raw Term",
                        field: 'item'
                    },
                    {
                        headerName: "Translated Term",
                        field: 'item',
                        cellRendererFramework: 'TranslationCellRenderer'
                    },
                ],
                rowData: [
                    {item: 'chair'},
                    {item: 'car'}
                ],
                components: {
                    TranslationCellRenderer
                }
            }
        },
        components: {
            AgGridVue,
            TranslationCellRenderer
        },
        beforeMount() {
        },
        methods: {
            onFirstDataRendered(params) {
                params.api.sizeColumnsToFit();
            }
        }
    }
</script>

<style scoped>
    .exchange {
        margin-bottom: 10px;
    }
</style>