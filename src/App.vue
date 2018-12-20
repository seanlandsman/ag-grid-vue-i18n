<template>
    <div>
        <ag-grid-vue style="width: 500px; height: 200px;"
                     class="ag-theme-balham"
                     :columnDefs="columnDefs"
                     :rowData="rowData"
                     :components="components"
                     @first-data-rendered="onFirstDataRendered">
        </ag-grid-vue>
    </div>
</template>

<script>
    import {AgGridVue} from "ag-grid-vue";
    import TranslationCellRenderer from "./components/TranslationCellRenderer";

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

<style scoped lang="css">
    @import '~ag-grid-community/dist/styles/ag-grid.css';
    @import '~ag-grid-community/dist/styles/ag-theme-balham.css';
</style>