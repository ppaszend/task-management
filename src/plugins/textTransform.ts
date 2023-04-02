export default {
    install: (app, options) => {
        app.config.globalProperties.$truncate = (value, length): string => {
            if (value.length <= length) {
                return value;
            }

            return [value.slice(0, length), '...'].join('');
        }
    }
}