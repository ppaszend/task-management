import { defineStore } from "pinia";
import {computed, ref} from "vue";
import {Status, UserData} from "../interface/User";
import {useRouter} from "vue-router";

export const useUserStore = defineStore('userStore', () => {
    const router = useRouter();

    const activityStatus = ref<Status | null>('available');

    const data = ref<UserData | null>({
        avatar: '/assets/avatars/vpedretti.png',
        name: 'John Kowalski',
        email: 'jkowalski@gmail.com',
        phoneNumber: '786 475 928',
        title: 'Frontend Developer',
    });

    const statuses = [
        {
            label: 'Available',
            value: 'available',
            indicator: {
                color: '#4CAF50'
            },
        },
        {
            label: 'On a break',
            value: 'onABreak',
            indicator: {
                color: '#FF9800'
            },
        },
        {
            label: 'Offline',
            value: 'offline',
            indicator: {
                color: '#F44336'
            },
        },
    ];

    const activeStatus = computed(() => statuses.find(({value}) => activityStatus.value === value));

    const logout = () => {
        router.push({ name: 'loginView' })
        activityStatus.value = null;
        data.value = null;
    };

    return {
        data,
        statuses,
        activeStatus,
        activityStatus,
        logout,
    }
});
