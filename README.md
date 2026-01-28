# rabobank-fix-lazy-loading-new-tab

## Problem
Rabobank has lazy loading enabled for listing of effects, however, it is not possible to open them in a new tab. Nor through context menu (right click), nor through crtl + click. 

## Solution
This extension adds a context menu entry when selecting the isin text of the effect, when clicked it opens the effect in a new tab. 

## Usage

1. Clone repo
2. Fill in your portofolio number in the "background.js" file.
3. Load the repository directory as unpacked extension into chrome.

__Steps to load unpacked extension__
1. Open Chromium.
2. Go to chrome://extensions.
3. Enable Developer mode (toggle in the top-right).
4. Click Load unpacked.
5. Select the folder that contains the extension’s manifest.json.
6. The extension will load immediately and appear in the extensions list.
   
**Finally refresh the portofolio page, select the isin of the effect(stock, etf, etc.), the context menu entry should be there under the name "open-isin-on-new-tab".**
