import {defineStore} from "pinia";
import {ref, watch} from "vue";

export const useWindowStore = defineStore('windowStore', () => {
    const lockScroll = ref(false);

    watch(lockScroll, (value) => {
        document.body.style.overflow = value ? 'hidden' : null;
    });

    return {
        lockScroll
    }
});
