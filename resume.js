function showTab(tabId) {
    // Hide all tab panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.remove('active');
    });
  
    // Remove active class from all tabs
    document.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.remove('active');
    });
  
    // Show selected tab pane
    const tabPane = document.getElementById(tabId);
    if (tabPane) {
      tabPane.classList.add('active');
    }
  
    // Add active class to clicked tab button
    // Find the button that has the specific onclick attribute
    const clickedTab = document.querySelector(`button[onclick="showTab('${tabId}')"]`);
    if (clickedTab) {
      clickedTab.classList.add('active');
    }
  }