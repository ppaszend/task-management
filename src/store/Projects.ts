import {defineStore} from "pinia";
import {ref} from "vue";

export const useProjectsStore = defineStore('projectsStore', () => {
    const options = ref([
        { name: 'Core', value: 'core' },
        { name: 'Helpdesk', value: 'helpdesk' },
        { name: 'CRM', value: 'crm' }
    ]);

    return {
        options
    }
})