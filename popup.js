document.getElementById("showBtn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          const fixDisplay = (el) => {
            const originalDisplay = window.getComputedStyle(el).display;
            if (originalDisplay === 'none') {
              if (el.tagName === 'TD') {
                el.style.display = 'table-cell';
              } else if (['SPAN', 'A', 'IMG'].includes(el.tagName)) {
                el.style.display = 'inline';
              } else {
                el.style.display = 'block';
              }
            }
          };
          document.querySelectorAll('[style*="display:none"]').forEach(fixDisplay);
        }
      });
    });
  });
  