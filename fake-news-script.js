
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var proceedBtn = document.getElementById("proceedBtn");
var readMoreBtn = document.getElementById("readMoreBtn");
var readMoreContent = document.getElementById("readMoreContent");

proceedBtn.addEventListener("click", closeModal);
readMoreBtn.addEventListener("click", readMore);

function closeModal() {
  modal.style.display = "none";
}

function readMore() {
  readMoreBtn.style.display = "none";
  readMoreContent.style.display = "block";
}
