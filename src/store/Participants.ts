import {defineStore} from "pinia";
import {ref} from "vue";

export const useParticipantsStore = defineStore('participantsStore', () => {
    const options = ref([
        { name: 'John Kowalski', value: 'jkowalski@gmail.com' },
        { name: 'Dan Nowak', value: 'dnowak@gmail.com' },
        { name: 'Adam Mickiewicz', value: 'amickiewicz@gmail.com' },
    ]);

    return {
        options
    }
})