<!-- 

Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari
per strutturare il layout come da screenshot allegato.
Al caricamento della pagina, effettuate una chiama ajax all'API di Yu Gi Oh: 
https://db.ygoprodeck.com/api/v7/cardinfo.php
e con i dati restituiti, stampate una card per ogni carta.
ATTENZIONE: l'api restituisce tutti i risultati in un colpo solo. 
Per evitare attese e/o rallentamenti nelle richieste, 
potete diminuire il numero di risultati sfruttando i parametri num e offset
https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0


Bonus:
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.

 -->

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import {store} from './store.js';

export default {
    data() {
        return {
            /* cards:[], */
            store,
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {

    },
    created(){
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=25&offset=0')
            .then((response) => {
                this.store.cards= response.data.data;
                console.log(response.data);
                console.log(this.store.cards[0].name);

            })
    }
}
</script>

<template>

    <AppHeader />

    <AppMain :cards="cards"/>

    <AppFooter />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
</style>
