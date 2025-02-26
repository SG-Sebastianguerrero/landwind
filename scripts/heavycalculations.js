function heavyComputation() {
    const start = performance.now();
    let result = 0;
    for (let i = 0; i < 1e8; i++) { 
        result += Math.sin(i) * Math.cos(i);
    }
    const end = performance.now();
    console.log('Heavy computation finished:', result);
    console.log('Time taken:', (end - start).toFixed(2) + 'ms');
}

heavyComputation();