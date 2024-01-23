import { reactive } from 'vue';

export const store = reactive ({
    baseUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cards:[],
    archetype :[],
    searchArchetype : '',
    numberCards: ''
})