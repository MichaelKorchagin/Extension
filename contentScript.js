
chrome.runtime.sendMessage('blah blah', (response) => {
    console.log('response started');
    console.log(`1st: ${response}`);
});

console.log([...document.getElementsByTagName('img')].map(i => i.src));