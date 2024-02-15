export function Gradualload() {
    return {
        stages: [
            { duration: '5m', target: 10 },
            { duration: '10m', target: 10 }
        ]
    };
}
