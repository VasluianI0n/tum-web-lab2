document.addEventListener('DOMContentLoaded', function() {

  setTimeout(function() {
    var mascot = document.getElementById('mascot');
    mascot.style.display = 'inline-block';
    console.log("Done"); 
}, 3000); 
});

document.addEventListener('DOMContentLoaded', function() {
 

  // Add event listener to the menu icon
  document.getElementById('menuIcon').addEventListener('click', function() {
      var menuItems = document.getElementById('menuItems');
      menuItems.classList.toggle('show'); // Toggle the 'show' class on menu items
  });
  
});

