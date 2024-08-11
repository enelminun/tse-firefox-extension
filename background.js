chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get(['homepageURL'], (result) => {
      if (result.homepageURL) {
        chrome.browserSettings.homepageOverride.set({ value: result.homepageURL });
        chrome.browserSettings.newTabPageOverride.set({ value: result.homepageURL });
      }
    });
  });
  