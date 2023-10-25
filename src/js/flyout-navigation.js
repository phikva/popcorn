function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "250px") {
      sidenav.style.width = "0";
      document.getElementById("toggleButton").innerHTML = "&#9654;";
    } else {
      sidenav.style.width = "250px";
      document.getElementById("toggleButton").innerHTML = "&#9664;";
    }
  }