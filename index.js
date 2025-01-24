document.addEventListener('DOMContentLoaded', function() {
    var openButton = document.getElementById('open');
    var toggleElement = document.getElementById('toggle');

    openButton.addEventListener('click', function() {
      toggleElement.classList.toggle('active');
    });
  });