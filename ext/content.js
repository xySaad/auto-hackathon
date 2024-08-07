// content.js

let monitoring = false;

function findAndClick() {
  const links = document.querySelectorAll(
    'a[href^="https://learn.zone01oujda.ma/intra/oujda/piscine-go/quest-10/"]'
  );
  if (links.length > 0) {
    const lastLink = links[links.length - 1];
    const button = document.querySelector('button[id^="run-"]');
      lastLink.click();
      button.click();
      console.log("Clicked the button:", button.id);
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startMonitoring") {
    if (!monitoring) {
      monitoring = true;
      setInterval(findAndClick, 2000); // Search every 30 minutes
    }
  }
});
