import { reactive } from 'vue';

export const store = reactive ({
    baseUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=25&offset=0',
    cards:[],
    archetype :[],
    searchArchetype : '',
})