// scenarios.js
export const scenarios = {
    gwLoad: {
        executor: 'ramping-vus',
        startVus: 0,
        stages: [
            { duration: '5s', target: 2 }, // Ramp up to 20 users over 30 seconds
            { duration: '5s', target: 2 },  // Stay at 20 users for 1 minute
            { duration: '5s', target: 0 },  // Ramp down to 0 users over 10 seconds
        ],
        gracefulRampDown: '5s',
    },
};
