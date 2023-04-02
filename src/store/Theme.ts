import {defineStore} from 'pinia';
import {computed, ref, watch} from "vue";
import {Theme} from "../interface/Theme";

export const useThemeStore = defineStore('themeStore', () => {
    const active = ref<Theme>('light');
    const setActiveTheme = (theme: Theme) => active.value = theme;

    const options = ref([
        {
            label: 'Sync with OS',
            value: 'os',
        },
        {
            label: 'Light',
            value: 'light',
        },
        {
            label: 'Dark',
            value: 'dark',
        },
    ]);

    const activeThemeOptions = computed(() => options.value.find(({value}) => active.value === value));

    watch(active, (theme) => {
        if (theme === 'dark') {
            document.documentElement.className = 'darkTheme';
        } else {
            document.documentElement.className = '';
        }
    })

    return {
        active,
        activeThemeOptions,
        setActiveTheme,
        options,
    }
});