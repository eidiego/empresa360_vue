<template>
    <h3>Detalhes da Lead: {{ $route.params.id }} </h3>
</template>

<script>
export default {
    name: 'MyLead',
    created() {
        console.log(this.$route.params)
    }
}
</script>