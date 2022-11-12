
const buttonSave = document.getElementById("button-to-open-saver");
buttonSave.addEventListener("click", async () => {
  // chrome.runtime.sendMessage('blah blah', (response) => {
  //   console.log('resp');
  //   console.log(`1st: ${response}`);
  // });

  chrome.tabs.query({
    currentWindow: true,
    active: true,
  },
    (tabs) => {
      const active = tabs[0];
      alert(active.title);

      // const elementsArr = [...document.getElementsByTagName('img')].map(i=>i.src);
      //
      // console.log(elementsArr);
    }
  );
});
