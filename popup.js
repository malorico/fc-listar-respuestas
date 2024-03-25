const button = document.getElementById("btn-mensaje");
button.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    chrome.tabs.sendMessage(tab.id, "listarRespuestas");
  });
});
