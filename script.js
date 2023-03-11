const shareButtons = document.querySelectorAll(".tile-share-button");
//console.log(shareButtons)

//Function to make the buttons copy the link as text
function copyText() {
  e.preventDefault();
}

shareButtons.forEach((shareButton) =>
  shareButton.addEventListener("click", copyText())
);
