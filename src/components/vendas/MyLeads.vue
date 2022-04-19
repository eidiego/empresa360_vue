<template>
    <h3> Leads </h3>

    {{ dados }}

</template>

<script>
export default {
    name: 'MyLeads',
    data: () => ({
        dados: null
    }),
    methods: {
        getDadosApi() {
            fetch('http://localhost:3000/leads')
                .then(response => response.json())
                .then(response => {
                    this.dados = response
                })
        }
    },
      created() {
        this.getDadosApi()
    }   
}
</script>