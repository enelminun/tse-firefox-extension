document.getElementById('newTab').addEventListener('click', () => {
    chrome.tabs.create({ url: 'dosya.html' });
  });
  
  document.getElementById('setHomepage').addEventListener('click', () => {
    const homepageURL = 'file:///' + chrome.runtime.getURL('dosya.html');
    chrome.storage.local.set({ 'homepageURL': homepageURL }, () => {
      chrome.browserSettings.homepageOverride.set({ value: homepageURL });
      chrome.browserSettings.newTabPageOverride.set({ value: homepageURL });
      alert('Ana sayfa ve yeni sekme URL\'si ayarlandı!');
    });
  });