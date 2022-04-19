<template>
    <div>
        <h3> Serviços </h3>
        <div class="row">
            <div class="col" v-for="d in dados" :key="d.id">
                <div class="card" style="width: 11rem">
                    <img class="card-img-top" :src="`/img/${d.icone}`">
                    <div class="card-body text-center" >
                        <p class="card-text">
                            {{d.servico}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin"
export default {
    name: 'MyServices',
    mixins: [ApiMixin],
      created() {
        this.getDadosApi('http://localhost:3000/servicos')
    }   
}
</script>