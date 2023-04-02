import {defineStore} from "pinia";
import {ref} from "vue";

export const useTypesStore = defineStore('typeStore', () => {
    const options = ref([
        { name: 'Feature', value: 'feature' },
        { name: 'Bug', value: 'bug' },
    ]);

    return {
        options
    }
})