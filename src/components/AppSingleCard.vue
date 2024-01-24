<script>
import {store} from '../store.js';
import AppSelectArchetype from './AppSelectArchetype.vue';
export default {
    data() {
        return {
            store,
        };
    },
    props:{
        /* cards : Object */
    },
    methods: {

    },
    components:{
        AppSelectArchetype
    }
}
</script>

<template>
    <main class="bg-warning">
        <div v-if="store.isLoading" class="d-flex justify-content-center p-5">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else="store.isLoading == false" class="container">
            <AppSelectArchetype />
            <div class="cards-container p-5 bg-white">
                <div class="bg-dark text-white p-3 fw-bold">
                    Found {{ store.cards.length }} cards
                </div>
                <div class="row justify-content-between m-0">
                    <div v-for="(card, i) in store.cards" class="col-xl-auto col-lg-3 col-md-4 col-sm-6 text-center bg-warning p-0 mt-0 mb-3">
                        <div class="mb-4">
                            <img class="img-fluid"
                            :src="card.card_images[0].image_url" alt="Immagine">
                        </div>
                        <div class="card-info p-3">
                            <p class="card-name fs-4 fw-bold text-white">
                                {{ card.name }}
                            </p>
                            <p class="card-type fs-4">
                                {{ card.archetype }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

@media (min-width: 576px){
    .col-sm-6 {
        width: calc(50% - 10px);
    }
}

@media (min-width: 768px){
    .col-md-4 {
        flex: 0 0 auto;
        width: calc(33.33333333% - 10px);
    }
}

@media (min-width: 992px){

.col-lg-3 {
    flex: 0 0 auto;
    width: calc(25% - 10px);
}
}

@media (min-width: 1200px){

    .col-xl-auto {
        flex: 0 0 auto;
        width: calc((100% / 5) - 10px);
    }
}




</style>
