import {defineStore} from "pinia";
import {ref} from "vue";
import {CommentInterface} from "../interface/Comment";
import commentsMock from "../mocks/CommentsMock";

export const useNotificationsStore = defineStore('notificationsStore', () => {
    const data = ref<CommentInterface[]>(commentsMock);

    return {
        data
    }
});