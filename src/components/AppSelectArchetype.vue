<script>
import {store} from '../store.js';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            
        };
    },
    methods: {
        searchArchetypeFn(){
            if (store.searchArchetype.length > 0){
                let myUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=' + this.store.searchArchetype
                this.store.searchArchetype = ''
                axios.get(myUrl)
                .then((response) => {
                    this.store.cards= response.data.data;
                    console.log('cards',this.store.cards)
                })
            }
        }
    }
}
</script>

<template>
    <form action="">
        <select 
            v-model="store.searchArchetype" 
            class="m-3 p-1 border rounded" 
            name="search" 
            id="search-type"
            @click="searchArchetypeFn()">
            <option value="" disabled>
                Seleziona Archetipo
            </option>
            <option 
                v-for="(type, i) in store.archetype" 
                :value="type.archetype_name">
                    {{ type.archetype_name }}
            </option>
            
        </select>
        <button @click="searchArchetypeFn()" type="button">Cerca!</button>
    </form>
</template>

<style lang="scss" scoped>
</style>
