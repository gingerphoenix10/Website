var previous = window.pageYOffset;
window.onscroll = function() {
  if (window.pageYOffset < previous) {
      document.getElementById("menubar").style.height = "55px";
  } else {
      document.getElementById("menubar").style.height = "45px";
  }
    previous = window.pageYOffset;
};