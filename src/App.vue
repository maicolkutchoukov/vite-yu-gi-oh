<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store.js';

export default {
    data() {
        return {
            store,
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {
/*         getApiCards(){
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=25&offset=0')
            .then((response) => {
                this.store.cards= response.data.data;
                console.log(response.data);
                console.log(this.store.cards[0].archetype);
            })
        },  */
        getApiCards(){

            axios.get(store.baseUrl, {
                params: {
                    /* archetype: store.searchArchetype, */
                }
            })
            .then((response) => {
                this.store.cards= response.data.data;
                console.log(response.data);
                console.log(this.store.cards[0].archetype);
            })
            .catch((error) => {
                    this.store.characters = [];
                    console.log('errore')
            })
            .finally(() => {
                console.log('Questo console.log viene eseguito sempre alla fine della chiamata API');
            })
        }, 
        getApiArchetype(){
            axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then((response) => {
                this.store.archetype = response.data
                console.log(this.store.archetype);
            })
        }  
    },
    mounted(){
        this.getApiCards()
        this.getApiArchetype()   
    }
}
</script>

<template>

    <AppHeader />

    <AppMain />

    <AppFooter />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
</style>
