<script>
import {store} from '../store.js';
export default {
    data() {
        return {
            store,
            
        };
    },
    methods: {
        searchArchetypeFn(){
            if (store.searchArchetype.length > 0){
                this.baseUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=25&offset=0',
                this.store.baseUrl += '?archetype=' + this.store.searchArchetype
                console.log(this.store.baseUrl)
            }
        }
    }
}
</script>

<template>
    {{ store.searchArchetype }}
    <form @submit.prevent="searchArchetypeFn()" action="">
        <select 
            v-model="store.searchArchetype" 
            class="m-3 p-1 border rounded" 
            name="search" 
            id="search-type">
            <option value="" disabled>
                Seleziona Archetipo
            </option>
            <option 
                v-for="(type, i) in store.archetype" 
                :value="type.archetype_name">
                    {{ type.archetype_name }}
            </option>
            
        </select>
        <button type="submit">Cerca!</button>
    </form>
</template>

<style lang="scss" scoped>
</style>
