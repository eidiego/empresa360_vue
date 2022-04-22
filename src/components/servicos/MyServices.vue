<template>
    <div>
        <h3> Serviços </h3>
        <div class="row">
            <div class="col mb-4" v-for="d in dados" :key="d.id">
                <div class="card" style="width: 11rem">
                    <img class="card-img-top" :src="`/img/${d.icone}`">
                    <div class="card-body text-center" >
                        <router-link :to="{ name: 'service', params: { id: d.id} }">
                             <p class="card-text">{{ d.servico }}</p>
                        </router-link>
                    </div>

                </div>
            </div>
        </div>
        <routerView class="mt-3" />
        <routerView name="options" />
        <routerView name="indicators" />

    </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin.ts"
export default {
    name: 'MyServices',
    mixins: [ApiMixin],
      created() {
        this.getDadosApi('http://localhost:3000/servicos')
    }   
}
</script>