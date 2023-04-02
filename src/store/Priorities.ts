import {defineStore} from "pinia";
import {ref} from "vue";

export const usePrioritiesStore = defineStore('prioritiesStore', () => {
    const options = ref([
        { name: 'ShowStopper', value: 'showstopper', indicator: { color: '#F44336' } },
        { name: 'Critical', value: 'critical', indicator: { color: '#FFBDBD' } },
        { name: 'Major', value: 'major', indicator: { color: '#FAFF0D' } },
        { name: 'Normal', value: 'normal', indicator: { color: '#4CAF50' } },
    ]);

    return {
        options
    }
})