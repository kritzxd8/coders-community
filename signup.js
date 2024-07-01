// TODO:
// [x] Make Privacy Policy and Terms & Conditions Center Vertically
// [x] Tycho Link To The Tycho.ir
// [x] Improve Input
// [x] Filter Input As Email
// [x] Complete Email Send Button
// [x] Responsive Font Sizes
// [x] Responsive location For Crasols
// Responsive Social Media Buttons
// [x] Fix Social Media Button Icon's Location
// [x] Responsive Social Media Buttons Location
// [x] Complete Order And Type Of Social Media Buttons
// Make It Ready For Work In Other Browsers
// Test In Other Browsers

function handleInput(evt) {
    const value = evt.target.value;
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
    if (emailRegex.test(value.trim())) {
      document.getElementById("footermailsend").disabled = false;
      document.getElementById("footermailsend").style.cursor = "pointer";
    } else {
      document.getElementById("footermailsend").disabled = true;
      document.getElementById("footermailsend").style.cursor = "default";
    }
  }