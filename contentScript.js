
chrome.runtime.sendMessage('blah blah', (response) => {
    console.log('response started');
    console.log(`1st: ${response}`);
});

const imgArr = [...document.getElementsByTagName('img')].map(i => i.src);
console.log("Array of images:");
console.log(imgArr);


chrome.storage.local.set({curImg : [imgArr]}).then(() => {
    console.log("CONTENT SCRIPT CONTEXT: ");
    console.log(imgArr);
});


// for (let i = 0; i < imgArr.length; i++) {
//     console.log(imgArr[i]);
// }