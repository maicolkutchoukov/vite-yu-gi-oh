<script>
export default {
    data() {
        return {

        };
    },
    props:{
        cards : Object
    },
    methods: {

    }
}
</script>

<template>
    <main class="bg-warning">
        <div v-if="cards.length < 20" class="d-flex justify-content-center p-5">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else="cards.length == 20" class="container">
            <select class="m-3 p-1 border rounded" name="search" id="search-type">
                <option value="">Alien</option>
                <option value="">Infernoble Arms</option>
                <option value="">Noble Knight</option>
                <option value="">Melodius</option>
            </select>
            <div class="cards-container p-5 bg-white">
                <div class="bg-dark text-white p-3 fw-bold">
                    Found {{ cards.length }} cards
                </div>
                <div class="row justify-content-between m-0">
                    <div v-for="(card, i) in cards" class="col-lg-auto col-md-3 col-sm-6 text-center bg-warning p-0 mt-0 mb-3">
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
.col-lg-auto{
    
    position: relative;
    .card-info{

    }
}
@media (min-width: 576px){
    .col-md-3 {
        width: calc(50% - 10px);
    }
}

@media (min-width: 768px){
    .col-md-3 {
        flex: 0 0 auto;
        width: calc(25% - 10px);
    }
}

@media (min-width: 992px){

    .col-lg-auto {
        flex: 0 0 auto;
        width: calc((100% / 5) - 10px);
    }
}




</style>
