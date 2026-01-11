async function makeAsyncRequest(){
    const url = 'https://httpbin.org/delay/5';
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

makeAsyncRequest().then(console.log);
console.log('This will print first.')