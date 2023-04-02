import {ref} from "vue";

export default function useWindowWidth () {
    const windowWidth = ref(window.innerWidth);

    window.addEventListener('resize', () => windowWidth.value = window.innerWidth);

    return windowWidth;
}