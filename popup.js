// const buttonSave = document.getElementById("button-to-open-saver");
//
// chrome.runtime.sendMessage('blah blah', (response) => {
//     console.log('response started');
//     console.log(`1st: ${response}`);
// });



chrome.storage.local.get(["curImg"]).then((result) => {
    console.log("POPUP CONTEXT: ");
    console.log(result.curImg);

    const docFragment = new DocumentFragment();
    for (let i = 0; i < result.curImg[0].length; i++) {
        let innerImg = result.curImg[0][i];

        let newDiv = document.createElement("img");
        console.log(newDiv);

        newDiv.className = "imagesPreview";
        newDiv.setAttribute("src", innerImg);
        docFragment.append(newDiv);
    }
    document.getElementById("preview-images").append(docFragment);
});

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
