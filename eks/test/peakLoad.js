export function Peakload() {
    return {
        stages: [
            { duration: '3m', target: 100 },
            { duration: '20m', target: 100 }
        ]
    };
}
