// Global variables.
var mobileBrowser = false;

// Functions.
function pickCover() {

  if (mobileBrowser) {
    $('#background-video').remove();
  } else {
    $('#background-graphic').remove();
  }

};

$(document).ready(function() {

  // Check if it’s a mobile browser.
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    mobileBrowser = true;
  } else {
    mobileBrowser = false;
  }

  // Call functions.
  pickCover();

  $('#background-video').maximage('maxcover');

});
