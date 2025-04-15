chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const fixDisplay = (el) => {
          const originalDisplay = window.getComputedStyle(el).display;
          if (originalDisplay === 'none') {
            if (el.tagName === 'TD') {
              el.style.display = 'table-cell';
            } else if (el.tagName === 'SPAN' || el.tagName === 'A' || el.tagName === 'IMG') {
              el.style.display = 'inline';
            } else {
              el.style.display = 'block';
            }
          }
        };
  
        document.querySelectorAll('[style*="display:none"]').forEach(fixDisplay);
  
        // Visual feedback
        alert("🎉 Elemen yang tersembunyi telah ditampilkan!");
      }
    });
  });
  