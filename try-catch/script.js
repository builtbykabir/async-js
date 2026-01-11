async function makeAsyncRequest() {
    const url = 'https://httpbin.org/delay/5';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
        return null;
    } finally {
        console.log('Request attempt finished.');
    }
}

makeAsyncRequest().then(console.log);
console.log('This will print first.');
