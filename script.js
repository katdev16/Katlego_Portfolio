let isFooterOpen = false;

function toggleFooter() {
  alert("Hello");
  const footer = document.getElementsByClassName("rectangle")[0];
  const arrow = document.getElementsByClassName("arrowup")[0];
  const footerText = document.getElementById("footerText");


  
 // Add transitions
  footer.style.transition = "height 0.6s ease";
  arrow.style.transition = "transform 0.6s ease";


  if (!isFooterOpen) {
    footer.style.height = "400px";
    arrow.style.transform = "rotate(180deg)";
    footerText.style.display = "block"; // Show text
  } else {
    footer.style.height = "100px";
    arrow.style.transform = "rotate(0deg)";
    footerText.style.display = "none"; // Hide text
  }

  arrow.style.transition = "transform 0.6s ease";
  isFooterOpen = !isFooterOpen;
}
function TopFunction() {

  const footer = document.getElementsByClassName("MainBackground")[0];
  const arrow = document.getElementsByClassName("sliderq")[0];
  const footerText = document.getElementById("MainBackgroundText");


  
 // Add transitions
  footer.style.transition = "height 0.6s ease";
  arrow.style.transition = "transform 0.6s ease";


  if (!isFooterOpen) {
    footer.style.height = "400px";
    arrow.style.transform = "rotate(180deg)";
    footerText.style.display = "block"; // Show text
  } else {
    footer.style.height = "100px";
    arrow.style.transform = "rotate(0deg)";
    footerText.style.display = "none"; // Hide text
  }

  arrow.style.transition = "transform 0.6s ease";
  isFooterOpen = !isFooterOpen;
}



