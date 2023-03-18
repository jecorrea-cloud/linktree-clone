const shareButtons = document.querySelectorAll(".tile-share-button");
const sharePage = document.querySelector(".share-button");
//console.log(shareButtons)

//Function to make the buttons copy the link as text
async function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute("link");
  //   console.log(link);
  try {
    await navigator.clipboard.writeText(link);
    alert("Copied the text: " + link);
  } catch (err) {
    // console.error(err);
  }
}

shareButtons.forEach((shareButton) =>
  shareButton.addEventListener("click", copyText)
);

sharePage.addEventListener("click", copyText);
