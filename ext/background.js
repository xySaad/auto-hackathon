// background.js

chrome.webNavigation.onCompleted.addListener(
  function (details) {
    if (
      details.url.startsWith(
        "https://learn.zone01oujda.ma/intra/oujda/piscine-go/quest-10/"
      )
    ) {
      chrome.tabs.sendMessage(details.tabId, { action: "startMonitoring" });
    }
  },
  {
    url: [
      {
        urlMatches:
          "https://learn.zone01oujda.ma/intra/oujda/piscine-go/quest-10/",
      },
    ],
  }
);
