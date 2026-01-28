# rabobank-fix-lazy-loading-new-tab

## Problem
Rabobank has lazy loading enabled for listing of effects, however, it is not possible to open them in a new tab (nor through context menu, nor through crtl click). 

## Solution
This extension adds a context menu entry when selecting text, when clicked it opens the effect in a new tab. 

## Usage
Fill in your portofolio number in the "background.js" file. Load the repository directory as unpacked extension into chrome, refresh the portofolio page, the context menu entry should be there.
