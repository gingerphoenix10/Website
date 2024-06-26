window.onscroll = function() {
  var appear = 1;
  if (window.pageYOffset >= appear) {
    document.getElementById("pages").style.opacity = 1;
    document.getElementById("title").style.top = "100px";
      document.getElementById("pfp").style.opacity = 0;
  } else {
    document.getElementById("pages").style.opacity = 0;
    document.getElementById("title").style.top = "50%";
      document.getElementById("pfp").style.opacity = 1;
  }
};
setTimeout(function() {
    if (window.pageYOffset < 1) {
        setTimeout(function() {
            if (window.pageYOffset < 1) {
                scroll(0, 10);
            }
        }, 1500);
    }
}, 50)