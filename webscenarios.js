// scenarios.js
export const scenarios = {
    ui: {
        executor: 'shared-iterations',
        vus: 5,
        iterations: 5,
        options: {
            browser: {
                type: 'chromium',
            },
        },
    },
};
