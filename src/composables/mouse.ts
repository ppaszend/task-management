import {reactive, ref} from "vue";

export default function useMouse () {
    const position = reactive<{
        x: number;
        y: number;
    }>({
        x: 0,
        y: 0,
    });

    const clicked = ref(false);

    document.body.addEventListener("mousemove", (event) => {
        position.x = event.clientX;
        position.y = event.clientY;
    });

    document.body.addEventListener("mousedown", () => {
        clicked.value = true;
    });

    document.body.addEventListener("mouseup", () => {
        clicked.value = false;
    })

    return { position, clicked };
}
