/** Fill in your portofolio number, extract it from the URL you have when you go to your "beleggingsrekening" */
const portofolioNumber = "";


// Create the context menu item when the extension installs
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "open-isin-on-new-tab",
    title: "Open Isin on new tab: '%s'",
    contexts: ["selection"]
  });
});

// Handle click on the context menu
chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "open-isin-on-new-tab" && info.selectionText) {
    const selected = encodeURIComponent(info.selectionText.trim());
    const url = `https://bankieren.rabobank.nl/online/nl/dashboard/beleggen/portfolio-dashboard/product-details?portfolioNumber=${portofolioNumber}&isin=${selected}`;
    chrome.tabs.create({ url });
  }
});
