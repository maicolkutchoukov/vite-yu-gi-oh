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
            store.isLoading = true
            axios.get(store.baseUrl, {
                params: {
                    num : store.numberCards,
                    offset: '0'
                }
            })
            .then((response) => {
                this.store.cards= response.data.data;
                console.log(response.data);
                console.log(this.store.cards[0].archetype);
            })
        }, 
        getApiArchetype(){
            axios.get(store.archetypeUrl)
            .then((response) => {
                this.store.archetype = response.data
                console.log(this.store.archetype);
            })
            .finally(() => {
                store.isLoading = false
            })
        } 
    },
    created(){
        this.getApiCards()
        this.getApiArchetype()   
    }
}
</script>

<template>

    <AppHeader />

    <AppMain @archetypeSearch="getApiCards()"/>

    <AppFooter />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
</style>
