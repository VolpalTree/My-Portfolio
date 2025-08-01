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
      
      // Add special animation for skills tab
      if (tabId === 'skills') {
        // Reset animations for skill icons
        const skillIcons = tabPane.querySelectorAll('.skills-content svg');
        skillIcons.forEach((icon, index) => {
          icon.style.animation = 'none';
          icon.offsetHeight; // Trigger reflow
          icon.style.animation = `slideInSkill 0.6s ease-out ${0.1 + (index * 0.1)}s both`;
        });
      }
    }
  
    // Add active class to clicked tab button
    // Find the button that has the specific onclick attribute
    const clickedTab = document.querySelector(`button[onclick="showTab('${tabId}')"]`);
    if (clickedTab) {
      clickedTab.classList.add('active');
    }
  }