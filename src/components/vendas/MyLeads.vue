<template>
    <div>
        <h3> Leads </h3>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOME</th>
                    <th scope="col">TELEFONE</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="d in dados" :key="d.id">
                    <td> {{ d.id }} </td>
                    <td> {{ d.nome }} </td>
                    <td> {{ d.telefone }} </td>
                    <td>
                       <router-link to="/home/vendas/leads" class="btn btn-sm btn-primary"> 
                            <i class="bi bi-pencil-square" style="cursor: pointer;"></i>
                       </router-link>
                    </td>
                </tr>
            </tbody>    
        </table>
    </div>
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