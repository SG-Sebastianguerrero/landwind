// Measure time from navigation start
document.addEventListener('DOMContentLoaded', () => {
    const domLoadTime = ((performance.now() + performance.timing.navigationStart) / 1000).toFixed(2);
    console.log(`Time until DOM fully loaded: ${domLoadTime} seconds`);
});

window.addEventListener('load', () => {
    const pageLoadTime = ((performance.now() + performance.timing.navigationStart) / 1000).toFixed(2);
    console.log(`Total page load time: ${pageLoadTime} seconds`);
});