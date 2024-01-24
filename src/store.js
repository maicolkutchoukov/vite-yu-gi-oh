import { reactive } from 'vue';

export const store = reactive ({
    baseUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    archetypeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cards: [],
    archetype : [],
    searchArchetype : '',
    numberCards: '1000',
    isLoading: false,
})