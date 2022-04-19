<template>
    <div>
        <h3>Detalhes da Lead: {{ dados.id }} </h3>
            <div class="md-3 row">
                <label class="col-sm-2 col-form-label">ID</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" :value="dados.id">
                </div>
            </div>
            <div class="md-3 row">
                <label class="col-sm-2 col-form-label">NOME</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" :value="dados.nome">
                </div>
            </div>
            <div class="md-3 row">
                <label class="col-sm-2 col-form-label">TELEFONE</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" :value="dados.telefone">
                </div>
            </div>
    </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin"
export default {
    name: 'MyLead',
    mixins: [ApiMixin],
    created() {
        this.getDadosApi(`http://localhost:3000/leads/${this.$route.params.id}`)
    }
}
</script>