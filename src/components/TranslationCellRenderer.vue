<template>
    <div>{{ $t(`message.${params.value}`) }}</div>
</template>

<script>
    export default {
        name: 'TranslationCellRenderer'
    }
</script>
