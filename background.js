// function getImage() {
//     alert([...document.getElementsByTagName('img')].map(i => i.src));
// }
//
// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         func: getImage
//     });
// });

// Called when the user clicks on the action.
// chrome.tabs.onUpdated.addListener(
//   function (tabId, info) {
//     console.log(tabId);
//     console.log(info);
//   }
// );

async function getCurrentTab() {
    let queryOptions = {
        active: true,
        lastFocusedWindow: true
    };

    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.id;
}

chrome.runtime.onMessage.addListener(
    (req, sender, sendResponse) => {
        if (req === 'blah blah') {
            sendResponse(getCurrentTab());
        }
    }
);


// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message === 'getImg') {
//         sendResponse('Connect is work');
//     }
// });