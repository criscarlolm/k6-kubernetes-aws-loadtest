export function ScalabilityLoadTest() {
    return {
        stages: [
            { duration: '5m', target: 10 },
            { duration: '5m', target: 20 },
            { duration: '5m', target: 30 },
            { duration: '5m', target: 40 },
            { duration: '5m', target: 50 },
            { duration: '5m', target: 60 },
            { duration: '5m', target: 70 },
            { duration: '5m', target: 80 },
            { duration: '5m', target: 90 },
            { duration: '5m', target: 100 },
            { duration: '10m', target: 100 },
            { duration: '5m', target: 0 }
        ]
    };
}
