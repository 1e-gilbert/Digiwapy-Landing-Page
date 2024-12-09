// Toggle for "Contact Us" Dropdown
document.getElementById('arrow-toggle').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown-content');
    dropdown.classList.toggle('show'); // Toggles visibility
    
    // Add/remove a class to adjust spacing for the footer elements below
    document.querySelector('.footer-link-item').classList.toggle('show-dropdown'); 
});

// Toggle for "Help Centre" Dropdown
document.getElementById('help-arrow-toggle').addEventListener('click', function() {
    var helpDropdown = document.getElementById('help-dropdown-content');
    helpDropdown.classList.toggle('show');
    
    // Add/remove the 'right' class when toggling the Help Centre dropdown
    helpDropdown.classList.toggle('right');
    
    // Add/remove a class to adjust spacing for the footer elements below
    document.querySelector('.footer-link-item:nth-child(2)').classList.toggle('show-dropdown'); 
});
