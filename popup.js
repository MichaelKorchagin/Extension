// const buttonSave = document.getElementById("button-to-open-saver");
//
// chrome.runtime.sendMessage('blah blah', (response) => {
//     console.log('response started');
//     console.log(`1st: ${response}`);
// });


// buttonSave.addEventListener("click", async () => {
//
//     chrome.tabs.query({
//             currentWindow: true,
//             active: true
//         },
//         (tabs) => {
//             const active = tabs[0];
//             alert(active.id);
//         }
//     );
// });

// chrome.scripting.executeScript({
//     target: {tabId: tab.id},
//     func: getElements
// });
// const getElements = () => {
//     const elementsArr = [...document.getElementsByTagName('img')].map(i => i.src);
//     console.log(elementsArr);
// }
